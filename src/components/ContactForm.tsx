const ContactForm = () => {
  return (
    <form className="space-y-6">
      <div>
        <label
          htmlFor="firstName"
          className="mb-2 block text-sm font-medium text-white"
        >
          FIRST NAME: *
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          className="w-full border-b border-white bg-black px-3 py-2 text-white focus:border-gray-400 focus:outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="lastName"
          className="mb-2 block text-sm font-medium text-white"
        >
          LAST NAME: *
        </label>

        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          className="w-full border-b border-white bg-black px-3 py-2 text-white focus:border-gray-400 focus:outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-white"
        >
          BUSINESS EMAIL ADDRESS: *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border-b border-white bg-black px-3 py-2 text-white focus:border-gray-400 focus:outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-medium text-white"
        >
          PHONE NUMBER: *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full border-b border-white bg-black px-3 py-2 text-white focus:border-gray-400 focus:outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="jobTitle"
          className="mb-2 block text-sm font-medium text-white"
        >
          JOB TITLE: *
        </label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          required
          className="w-full border-b border-white bg-black px-3 py-2 text-white focus:border-gray-400 focus:outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="company"
          className="mb-2 block text-sm font-medium text-white"
        >
          COMPANY / INSTITUTION: *
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          className="w-full border-b border-white bg-black px-3 py-2 text-white focus:border-gray-400 focus:outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="country"
          className="mb-2 block text-sm font-medium text-white"
        >
          COUNTRY: *
        </label>
        <input
          type="text"
          id="country"
          name="country"
          required
          className="w-full border-b border-white bg-black px-3 py-2 text-white focus:border-gray-400 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-white px-6 py-3 text-black transition duration-300 hover:bg-gray-200"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
