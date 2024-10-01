import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { API } from "../api/endpoints";
import { CommonProgress } from "../components/common/CommonProgress";
import { IoMdArrowRoundBack } from "react-icons/io";
import { PiMapPin } from "react-icons/pi";

// Tailwind classes for styling
const SingleStore = () => {
  const { id } = useParams();
  const endpoint = API.GetSingleSpaceForRent + id;

  const { data: storeData = {}, isLoading } = useQuery([endpoint]);

  if (isLoading) return <CommonProgress />;

  const store = storeData.data;

  return (
    <Fragment>
      <div className="">
        {/* Back Button */}
        <div className="flex items-center mb-6">
          <a href="/category" className="flex items-center text-primary">
            <IoMdArrowRoundBack size={23} />
            <span className="ml-2">Back</span>
          </a>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Store Details Section */}
          <div className="flex flex-col lg:w-[50%] w-[100%] lg:pr-10">
            {/* Image Section */}
            <div className="px-5">
              <div className="grid grid-cols-1 gap-4">
                <img
                  src={store.spaceImages[0]?.url}
                  alt={store.name}
                  className="w-full object-cover h-[300px] rounded-xl"
                />
                {/* Other images can go here */}
                <div className="flex space-x-4">
                  {store.spaceImages.slice(1).map((img) => (
                    <img
                      key={img._id}
                      src={img.url}
                      alt={img.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="w-full lg:pl-8 mt-5 ">
              <div className="flex justify-between ">
                <div>
                  <h1 className="text-3xl font-bold mb-4">{store.name}</h1>
                  <div className="flex items-center py-2">
                    <PiMapPin size={22} />
                    <p>{store.location}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-xl font-semibold text-green-600">
                    ${store.pricePerMonth}/month
                  </span>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-4">{store.description}</p>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold">Features</h2>
                <ul className="mt-4 space-y-2">
                  {store?.storageConditions.map((condition) => (
                    <li key={condition._id} className="flex items-center">
                      <span className="text-green-500 mr-2">✔</span>
                      {condition.name}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold">Security</h2>
                <ul className="mt-4 space-y-2">
                  {store?.spaceSecurities.map((security) => (
                    <li key={security._id} className="flex items-center">
                      <span className="text-green-500 mr-2">✔</span>
                      {security.name}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold">Schedules</h2>
                <ul className="mt-4 space-y-2">
                  {store.spaceSchedules.map((schedule) => (
                    <li key={schedule._id} className="flex items-center">
                      <span className="text-green-500 mr-2">✔</span>
                      {schedule.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Location Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-4">Location</h2>
              <div className="bg-gray-100 p-6 rounded-lg">
                <p>{store.location}</p>
                {/* Add Google Maps component here if needed */}
              </div>
            </div>
          </div>

          {/* Facilities Section */}
          <div className="mt-12 lg:w-[40%] w-[100%]">
            <h2 className="text-2xl font-semibold mb-4">
              Check and verify facilities
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                "Location",
                "Space Located Inside",
                "Car Park",
                "HGV Access",
                "Inside Lighting",
                "Video Surveillance",
                "Alarm",
                "Biometric",
                "Key",
                "Voice Control",
              ].map((facility, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-primary/10 border border-primary rounded-lg"
                >
                  <span className="text-green-500 mr-2">✔</span>
                  {facility}
                </div>
              ))}
            </div>
            <button className="mt-6 bg-yellow-500 text-white py-3 px-6 rounded-lg">
              Confirm Verification
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SingleStore;
