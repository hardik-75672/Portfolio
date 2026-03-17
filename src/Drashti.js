import React from "react";

const Drashti = () => {
  return (
    <div>
      <div className="w-full text-center ">
        <div className="bg-gray-100 p-8">
          <h1 className="text-2xl font-semibold">OUR GALLERY</h1>
          <div className="p-3">
            <a href="/" className="font-light">Home </a>/ <a href="/gallery" className=""> Gallery </a>
          </div>
        </div>
      </div>
      <header className="p-4  text-gray-800">
        <div className="container flex justify-between h-10 mx-auto md:justify-center md:space-x-8">
          <ul className="items-stretch hidden space-x-3 text-gray-500 md:flex font-semibold">
            <li className="flex bg-blue-300 rounded-lg">
              <button
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                All
              </button>
            </li>
            <li className="flex rounded-lg bg-gray-100">
              <button
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                EVENTS
              </button>
            </li>
            <li className="flex rounded-lg bg-gray-100">
              <button
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Training Of Trainers (TOT)
              </button>
            </li>

            <li className="flex rounded-lg bg-gray-100">
              <button
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Centre Activities
              </button>
            </li>
            <li className="flex rounded-lg bg-gray-100">
              <button
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Centre Inauguration
              </button>
            </li>
            <li className="flex rounded-lg bg-gray-100">
              <button
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Fun Activities & Celebrations
              </button>
            </li>
            <li className="flex rounded-lg bg-gray-100">
              <button
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Fun Activities & Celebrations
              </button>
            </li>
            <li className="flex rounded-lg bg-gray-100">
              <button
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                DISHA Meet 2019
              </button>
            </li>
          </ul>
          <button title="Button" type="button" className="p-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
      <section className="py-6 px-20 ">
        <div className="container flex flex-col justify-center p-28 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            <img
              alt="Gallery image 1"
              className="object-cover w-full bg-gray-500 aspect-square h-full rounded-xl"
              src="https://source.unsplash.com/random/300x300/?1"
            />
            <img
              alt="Gallery image 2"
              className="object-cover w-full bg-gray-500 aspect-square h-full rounded-xl"
              src="https://source.unsplash.com/random/300x300/?2"
            />
            <img
              alt="Gallery image 3"
              className="object-cover w-full bg-gray-500 aspect-square h-full rounded-xl"
              src="https://source.unsplash.com/random/300x300/?3"
            />
            <img
              alt="Gallery image 4"
              className="object-cover w-full bg-gray-500 aspect-square h-full rounded-xl"
              src="https://source.unsplash.com/random/300x300/?4"
            />
            <img
              alt="Gallery image 5"
              className="object-cover w-full bg-gray-500 aspect-square h-full rounded-xl"
              src="https://source.unsplash.com/random/300x300/?1"
            />
            <img
              alt="Gallery image 6"
              className="object-cover w-full bg-gray-500 aspect-square h-full rounded-xl"
              src="https://source.unsplash.com/random/300x300/?2"
            />
            <img
              alt="Gallery image 7"
              className="object-cover w-full bg-gray-500 aspect-square h-full rounded-xl"
              src="https://source.unsplash.com/random/300x300/?3"
            />
            <img
              alt="Gallery image 8"
              className="object-cover w-full bg-gray-500 aspect-square h-full rounded-xl"
              src="https://source.unsplash.com/random/300x300/?4"
            />
            <img
              alt="Gallery image 9"
              className="object-cover w-full bg-gray-500 aspect-square h-full rounded-xl"
              src="https://source.unsplash.com/random/300x300/?1"
            />
            <img
              alt="Gallery image 10"
              className="object-cover w-full bg-gray-500 aspect-square h-full rounded-xl"
              src="https://source.unsplash.com/random/300x300/?2"
            />
            <img
              alt="Gallery image 11"
              className="object-cover w-full bg-gray-500 aspect-square h-full rounded-xl"
              src="https://source.unsplash.com/random/300x300/?3"
            />
            <img
              alt="Gallery image 12"
              className="object-cover w-full bg-gray-500 aspect-square h-full rounded-xl"
              src="https://source.unsplash.com/random/300x300/?4"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Drashti;
