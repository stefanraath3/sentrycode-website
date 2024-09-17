"use client";

const NewsLatterBox = () => {
  return (
    <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
      <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
        Stay Informed on Security
      </h3>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Subscribe to our newsletter for the latest updates on cybersecurity
        trends, threat intelligence, and SentryCode solutions.
      </p>
      <form>
        <input
          type="text"
          placeholder="Your Name"
          className="mb-4 w-full rounded-md border border-gray-300 bg-transparent px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="mb-4 w-full rounded-md border border-gray-300 bg-transparent px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:text-white"
        />
        <button className="w-full rounded-md bg-gray-700 px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
          Subscribe
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        No spam guaranteed, only essential updates.
      </p>
    </div>
  );
};

export default NewsLatterBox;
