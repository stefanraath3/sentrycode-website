import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/supabaseClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, jobTitle, company, country } =
      req.body;

    try {
      const { data, error } = await supabase
        .from("contact_submissions")
        .insert([
          {
            first_name: firstName,
            last_name: lastName,
            email,
            phone,
            job_title: jobTitle,
            company,
            country,
          },
        ]);

      if (error) throw error;

      res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("Error logging to Supabase:", error);
      res.status(500).json({ message: "Error submitting form" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
