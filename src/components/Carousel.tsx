import Image from "next/image";
import Link from "next/link";

export default function Carousel() {
  return (
    <section className="bg-center rounded-3xl bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl">
          IKATAN ALUMNI TEKNIK LINGKUNGAN
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Universitas Pembangunan Nasional "Veteran" Yogyakarta
        </p>
      </div>
    </section>
  );
}
