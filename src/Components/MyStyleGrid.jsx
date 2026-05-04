import React from "react";

const MyStyleGrid = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center px-4 sm:px-6 lg:px-0">
        <div className="w-[85%] max-w-7xl bg-LightGray rounded-3xl px-4 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-10 flex flex-col items-center gap-8 sm:gap-12 lg:gap-16">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center font-integral font-extrabold leading-tight">
            BROWSE BY DRESS STYLE
          </h1>

          <div className="w-full">
            {/* Mobile = 1 column | Tablet = 2 columns | Desktop = custom */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {/* Casual */}
              <div className="col-span-1 lg:col-span-1 h-50 relative">
                <img
                  src="/img/casual.png"
                  alt="Casual"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <h1 className="absolute cursor-pointer hover:text-gray-400 top-5 left-5 text-lg sm:text-xl font-integral font-bold">
                  Casual
                </h1>
              </div>

              {/* Formal */}
              <div className="col-span-1 sm:col-span-1 lg:col-span-2 h-50 relative">
                <img
                  src="/img/formal.png"
                  alt="Formal"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <h1 className="absolute cursor-pointer hover:text-gray-400 top-5 left-5 text-lg sm:text-xl font-integral font-bold">
                  Formal
                </h1>
              </div>

              {/* Party */}
              <div className="col-span-1 sm:col-span-1 lg:col-span-2 h-50 relative">
                <img
                  src="/img/party.png"
                  alt="Party"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <h1 className="absolute cursor-pointer hover:text-gray-400 top-5 left-5 text-lg sm:text-xl font-integral font-bold">
                  Party
                </h1>
              </div>

              {/* Gym */}
              <div className="col-span-1 lg:col-span-1 h-50 relative">
                <img
                  src="/img/gym.png"
                  alt="Gym"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <h1 className="absolute cursor-pointer hover:text-gray-400 top-5 left-5 text-lg sm:text-xl font-integral font-bold">
                  Gym
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyStyleGrid;
