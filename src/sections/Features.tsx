import AppFrame from "../assets/app_frame.png";
import ShieldCheck from "../assets/icons/check.png";
import Coins from "../assets/icons/coins.png";
import Frames from "../assets/frames.png";
function Features() {
  return (
    <section
      id="features"
      className=" flex max-w-7xl flex-col gap-10 px-10 pt-10 lg:px-12 xl:m-auto xl:pt-20"
    >
      <article className="m-auto w-[30ch] text-center text-gray-500 md:m-0 md:w-full">
        <h2 className="mb-4 text-4xl font-semibold text-gray-800">
          Make every cent count
        </h2>
        <p>
          Paying your bills has never been easier
          <br />
          Spend smarter
        </p>
      </article>
      <article className=" flex w-full flex-col gap-8 overflow-hidden xl:h-96 xl:flex-row">
        <div className=" flex flex-col rounded-2xl bg-sky-100 px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3">
          <div className="mt-10 flex flex-col justify-center gap-4 text-center sm:mx-10 md:mx-0 md:ml-10 md:w-1/2 md:text-left">
            <h2 className=" m-auto text-center text-3xl font-semibold text-gray-800 sm:w-[16ch] md:m-0 md:text-left">
              Pay with this App, quick, fast and simple
            </h2>
            <p className=" m-auto text-center text-gray-500 sm:w-[30ch] md:m-0 md:text-left">
              Paying Bills has never been easier
            </p>
          </div>
          <div className=" m-auto mt-10 max-w-72 md:mx-10 md:w-1/2 lg:mx-0">
            <img src={AppFrame} alt="App Frame" />
          </div>
        </div>
        <div className=" flex flex-col justify-center gap-4 rounded-2xl bg-indigo-400 p-10 xl:w-1/3">
          <div className=" w-fit rounded-full bg-indigo-950 p-4">
            <img src={ShieldCheck} alt="" />
          </div>
          <h2 className=" text-3xl font-semibold text-gray-600">
            Bank Security
          </h2>
          <p className=" text-gray-500">
            Your money is 101 % safe with us and secure on App! No worries, just
            relax!
          </p>
        </div>
      </article>
      <article className=" flex w-full flex-col gap-8 xl:h-96 xl:flex-row">
        <div className=" flex flex-col justify-center gap-4 rounded-2xl bg-red-400 p-10 xl:w-1/3">
          <div className=" w-fit rounded-full bg-indigo-950 p-4">
            <img src={Coins} alt="" />
          </div>
          <h2 className=" text-3xl font-semibold text-gray-600">
            Cost reduction
          </h2>
          <p className=" text-gray-500">
            The App optimize cost reduncies, and cost reduction are non!
          </p>
        </div>
        <div className=" flex flex-col gap-8 overflow-hidden rounded-2xl bg-sky-100 px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3">
          <div className="mt-10 flex flex-col justify-center gap-4 text-center sm:mx-10 md:mx-0 md:ml-10 md:mt-0 md:w-1/2 md:text-left">
            <h2 className=" m-auto text-center text-3xl font-semibold text-gray-800 sm:w-[16ch] md:m-0 md:text-left">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className=" m-auto text-center text-gray-500 sm:w-[30ch] md:m-0 md:text-left">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              illum ad, esse adipisci autem voluptatem.
            </p>
          </div>
          <div className=" m-auto max-w-96 md:mt-36 md:w-1/2">
            <img src={Frames} alt="App Frame" />
          </div>
        </div>
      </article>
    </section>
  );
}

export default Features;
