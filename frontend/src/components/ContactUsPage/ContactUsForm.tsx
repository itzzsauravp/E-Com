const ContactUsForm = () => {
  return (
    <form className="flex flex-col gap-5 mt-2">
      <div className="flex gap-5 sm:max-md:flex-col">
        <div className="flex flex-col gap-2 w-[50%] sm:max-md:w-full">
          <span className="text-tLight dark:text-white">Name</span>
          <input type="text" className="outline-none px-2 py-3 border-[1px]  dark:bg-black dark:placeholder:text-slate-500" placeholder="Saurav Parajulee" />
        </div>
        <div className="flex flex-col gap-2  w-[50%] sm:max-md:w-full">
          <span className="text-tLight dark:text-white">Email</span>
          <input type="text" className="outline-none px-2 py-3 border-[1px] dark:bg-black dark:placeholder:text-slate-500" placeholder="socail.saurav2003@gmail.com"/>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start sm:max-md:justify-center sm:max-md:items-center">
        <div className="w-full">
          <p className="text-tLight dark:text-white mb-1">Message</p>
          <textarea
            name=""
            id=""
            className="w-full resize-none h-[200px] p-2 border-[1px] outline-none dark:bg-black dark:placeholder:text-slate-500" placeholder="Heyy!! its me Saurav i would like to know if you deliver to..."
          ></textarea>
        </div>
        <input
          type="submit"
          value="Send Message"
          className="mt-1 bg-etBlue text-white px-8 py-4 uppercase font-lato"
        />
      </div>
    </form>
  );
};

export default ContactUsForm;
