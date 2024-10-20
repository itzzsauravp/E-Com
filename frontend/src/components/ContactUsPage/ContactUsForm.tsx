const ContactUsForm = () => {
  return (
    <form className="flex flex-col gap-5 mt-5">
      <div className="flex gap-5 sm:max-md:flex-col">
        <div className="flex flex-col gap-2 w-[50%] sm:max-md:w-full">
          <span className="text-tLight">Name</span>
          <input type="text" className="outline-none px-2 py-3 border-2" />
        </div>
        <div className="flex flex-col gap-2  w-[50%] sm:max-md:w-full">
          <span className="text-tLight">Email</span>
          <input type="text" className="outline-none px-2 py-3 border-2" />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start sm:max-md:justify-center sm:max-md:items-center">
        <div className="w-full">
          <span className="text-tLight">Message</span>
          <textarea
            name=""
            id=""
            className="w-full resize-none h-[200px] p-2 border-2 outline-none"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Send Message"
          className="mt-7 bg-etBlue text-white px-8 py-4 uppercase font-lato mb-12"
        />
      </div>
    </form>
  );
};

export default ContactUsForm;
