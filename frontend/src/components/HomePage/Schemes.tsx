const Schemes = () => {
  return (
    <div className="flex gap-5 mt-16 h-[500px] sm:max-md:flex-col sm:max-md:h-fit">
      <div className="w-[60%] p-4 bg-black dark:border-[1px] text-white flex flex-col items-center justify-center sm:max-md:w-full sm:max-md:h-[250px]">
        <h1 className="text-3xl font-lato uppercase text-center sm:max-md:text-2xl">
          Peace of mind
        </h1>
        <p className="text-center mt-5 sm:max-md:text-[0.9rem] text-slate-300 dark:text-slate-500">
          A one-stop platform for all your fashion needs, <br /> hassle-free.
          Buy with a peace of mind.
        </p>
        <button className="mt-8 bg-white text-etBlue p-4 dark:bg-black dark:text-white dark:border-[1px] dark:border-etBlue">
          Buy Now
        </button>
      </div>
      <div className="w-[40%] p-4 bg-black dark:border-[1px] text-white flex flex-col items-center justify-center sm:max-md:w-full sm:max-md:h-[250px]">
        <h1 className="text-3xl font-lato uppercase text-center sm:max-md:text-2xl">
          Buy 2 get 1 free
        </h1>
        <p className="text-center mt-5 sm:max-md:text-[0.9rem] text-slate-300 dark:text-slate-500">
          End of season sale. Buy any 2 items of your choice <br /> and get 1
          free.
        </p>
        <button className="mt-8 bg-white text-etBlue p-4 dark:bg-black dark:text-white dark:border-[1px] dark:border-etBlue">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Schemes;
