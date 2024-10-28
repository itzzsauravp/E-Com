const AdditionalContactInfo = () => {
  return (
    <div className="w-[40%] p-2 flex flex-col items-center justify-center gap-32 sm:max-md:w-full sm:max-md:gap-5">
      <div className="w-full text-center sm:max-md:text-left">
        <h1 className="text-tDark text-2xl font-bold dark:text-white">
          Visit Us
        </h1>
        <p className="text-tLight dark:text-slate-500">Kathmandu, Nepal</p>
        <p className="text-tLight dark:text-slate-500">
          Phone: +977 9865000000
        </p>
      </div>
      <div className="w-full text-center sm:max-md:text-left">
        <h1 className="text-tDark text-2xl font-bold dark:text-white">
          Get in Touch
        </h1>
        <p className="text-tLight dark:text-slate-500">
          You can get in touch with us on this provided email.
        </p>
        <p className="text-tLight dark:text-slate-500">
          Email: socail.saurav2003@gmail.com
        </p>
      </div>
    </div>
  );
};

export default AdditionalContactInfo;
