import Carousel from "../common/Carousel";
import StoreLinks, { BtnTypes } from "../common/StoreLinks";

function Reviews() {
  const slides = [
    {
      src: "https://images.unsplash.com/photo-1595986630530-969786b19b4d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, at.",
      name: "Elrond",
      country: "Rivendell",
    },
    {
      src: "https://images.unsplash.com/photo-1554196038-950a8ab51827?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, at.",
      name: "Vladimir",
      country: "Minas Tirith",
    },
    {
      src: "https://images.unsplash.com/photo-1622556498246-755f44ca76f3?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, at.",
      name: "Gandalf",
      country: "Valar",
    },
  ];
  return (
    <section
      id="reviews"
      className=" flex max-w-7xl flex-col items-center justify-between px-8 py-20 lg:m-auto lg:flex-row lg:px-12"
    >
      <article className=" mb-10 flex flex-col items-center justify-center lg:w-1/2 lg:items-start">
        <h2 className="mb-4 max-w-[16ch] text-center text-4xl font-semibold text-green-800 lg:w-full lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <StoreLinks type={BtnTypes.Standard}></StoreLinks>
      </article>
      <Carousel slides={slides}></Carousel>
    </section>
  );
}

export default Reviews;
