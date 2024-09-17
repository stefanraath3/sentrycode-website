import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SentryCode | Secure Intelligence Solutions",
  description:
    "Get in touch with SentryCode for tailored security and intelligence solutions.",
};

const ContactPage = () => {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-24">
      <h1 className="mb-8 text-3xl font-bold text-black dark:text-white">
        Interested in solving your problems with SentryCode?
      </h1>
      <div className="rounded-lg bg-black p-8 shadow-lg">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
