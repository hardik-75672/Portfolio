import React from "react";

const Drashti = () => {
  return (
    <div>
      <div className="w-full text-center ">
        <div className="bg-gray-100 p-8">
          <h1 className="text-2xl font-semibold">OUR GALLERY</h1>
          <div className="p-3">
            <a className="font-light">Home </a>/ <a className=""> Gallery </a>
          </div>
        </div>
      </div>
      <header className="p-4  text-gray-800">
        <div className="container flex justify-between h-10 mx-auto md:justify-center md:space-x-8">
          <ul className="items-stretch hidden space-x-3 text-gray-500 md:flex font-semibold">
            <li className="flex bg-blue-300 rounded-lg">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                All
              </a>
            </li>
            <li className="flex rounded-lg bg-gray-100">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                EVENTS
              </a>
            </li>
            <li className="flex rounded-lg bg-gray-100">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Training Of Trainers (TOT)
              </a>
            </li>

            <li className="flex rounded-lg bg-gray-100">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Centre Activities
              </a>
            </li>
            <li className="flex rounded-lg bg-gray-100">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Centre Inauguration
              </a>
            </li>
            <li className="flex rounded-lg bg-gray-100">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Fun Activities & Celebrations
              </a>
            </li>
            <li className="flex rounded-lg bg-gray-100">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Fun Activities & Celebrations
              </a>
            </li>
            <li className="flex rounded-lg bg-gray-100">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                DISHA Meet 2019
              </a>
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
              className="object-cover w-full bg-gray-500 aspect-square h-full rounded-xl"
              src="https://source.unsplash.com/random/300x300/?1"
            />
            <img
              className="object-cover w-full bg-gray-500 aspect-square h-full rounded-xl"
              src="https://source.unsplash.com/random/300x300/?2"
            />
            <img
              className="object-cover w-full bg-gray-500 aspect-square h-full rounded-xl"
              src="https://source.unsplash.com/random/300x300/?3"
            />
            <img
              className="object-cover w-full bg-gray-500 aspect-square h-full rounded-xl"
              src="https://source.unsplash.com/random/300x300/?4"
            />
            <img
              className="object-cover w-full bg-gray-500 aspect-square h-full rounded-xl"
              src="https://source.unsplash.com/random/300x300/?1"
            />
            <img
              className="object-cover w-full bg-gray-500 aspect-square h-full rounded-xl"
              src="https://source.unsplash.com/random/300x300/?2"
            />
            <img
              className="object-cover w-full bg-gray-500 aspect-square h-full rounded-xl"
              src="https://source.unsplash.com/random/300x300/?3"
            />
            <img
              className="object-cover w-full bg-gray-500 aspect-square h-full rounded-xl"
              src="https://source.unsplash.com/random/300x300/?4"
            />
            <img
              className="object-cover w-full bg-gray-500 aspect-square h-full rounded-xl"
              src="https://source.unsplash.com/random/300x300/?1"
            />
            <img
              className="object-cover w-full bg-gray-500 aspect-square h-full rounded-xl"
              src="https://source.unsplash.com/random/300x300/?2"
            />
            <img
              className="object-cover w-full bg-gray-500 aspect-square h-full rounded-xl"
              src="https://source.unsplash.com/random/300x300/?3"
            />
            <img
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
