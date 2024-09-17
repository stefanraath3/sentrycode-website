import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="bg-black py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap">
          <div className="mb-10 w-full px-4 lg:mb-0 lg:w-7/12">
            <div className="rounded-lg bg-white bg-opacity-10 p-8 shadow-md backdrop-blur-md">
              <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">
                Need an Intelligence Solution?
              </h2>
              <p className="mb-8 text-gray-600 dark:text-gray-300">
                Our team is ready to serve you with tailored security and
                intelligence solutions.
              </p>
              <form>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-md border border-gray-300 bg-transparent px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:text-white"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-md border border-gray-300 bg-transparent px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:text-white"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="col-span-2 w-full resize-none rounded-md border border-gray-300 bg-transparent px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:text-white"
                  ></textarea>
                </div>
                <button className="mt-6 w-full rounded-md bg-white px-6 py-3 font-semibold text-black transition duration-300 ease-in-out hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-white dark:hover:text-black dark:focus:ring-gray-600">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12">
            <div className="rounded-lg bg-white bg-opacity-10 p-8 shadow-md backdrop-blur-md">
              <NewsLatterBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
