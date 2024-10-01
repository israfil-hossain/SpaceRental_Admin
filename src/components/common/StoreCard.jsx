import React from "react";
import { FaRegStar } from "react-icons/fa";
import { PiMapPin } from "react-icons/pi";
import { FaHeart } from "react-icons/fa6";
import { nodata, profile } from "../../assets";
import { useNavigate } from "react-router-dom";

const StoreCard = ({ data }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/stores/${data?._id}`);
  };

  return (
    <div
      className="min-w-[260px] max-w-[350px] h-[320px] cursor-pointer hover:shadow-xl hover:shadow-gray-400 hover:bg-gray-50 transition-all duration-300 ease-in-out rounded-3xl border border-yellow-400"
      onClick={handleCardClick}
    >
      <div className="h-[200px] w-full relative flex justify-center items-center">
        {data?.coverImage ? (
          <img
            src={data?.coverImage}
            className="w-full  h-[200px] rounded-t-3xl object-cover"
          />
        ) : (
          <img
            src={nodata}
            className="w-20 h-20 bg-gray-200 rounded-full p-2"
          />
        )}
        <div className="w-[105px] h-[34px] shadow-md px-4 py-2 left-[20px] top-[24px] absolute bg-cyan-200 rounded-lg justify-center items-center gap-2 inline-flex">
          <img
            className="w-[18px] h-[18px] rounded-full"
            src={data?.ownerProfilePicture || profile}
          />
          <div className="text-zinc-800 text-xs font-semibold font-sanse leading-[18px]">
            Certified
          </div>
        </div>
        <div className="w-28 h-[35px] p-1 right-3 shadow-md top-[24px] absolute bg-white rounded-lg justify-around items-center inline-flex">
          <div className="justify-start items-center gap-1 flex">
            <FaRegStar className="text-yellow-500" />
            <div className="text-zinc-800 text-sm font-semibold font-sanse leading-[21px]">
              {data?.averageRating || 0}
            </div>
          </div>
          <div className="text-gray-400 text-xs font-medium font-sanse leading-[14px]">
            {data?.reviewCount || 0} reviews
          </div>
        </div>
      </div>

      <div className="mt-5 w-full flex justify-between items-center px-4">
        <p>{data?.name}</p>
        <div className="flex space-x-2 ">
          <div className="w-[58px] relative">
            <img
              className="w-[22px] h-[22px] left-[36px] top-0 absolute rounded-full border border-white"
              src={profile}
            />
            <img
              className="w-[22px] h-[22px] left-[24px] top-0 absolute rounded-full border border-white"
              src={profile}
            />
            <img
              className="w-[22px] h-[22px] left-[12px] top-0 absolute rounded-full border border-white"
              src={profile}
            />
            <img
              className="w-[22px] h-[22px] left-0 top-0 absolute rounded-full border border-white"
              src={profile}
            />
          </div>
          <div className="w-6 h-6">
            <FaHeart size={24} className="text-red-500" />
          </div>
        </div>
      </div>

      <div className="items-center flex space-x-2 mt-2 px-4">
        <PiMapPin />
        <div className="text-gray-400 text-[12px] font-medium font-sanse leading-[18px]">
          {data?.location || "-"}
        </div>
      </div>

      <div className="w-full flex justify-between px-4 mt-1 items-center">
        <div className="text-zinc-800 text-sm font-[14px] font-sanse leading-[12px]">
          {data?.accessMethod || "Acess - "}
        </div>
        <div className="flex  justify-start items-center gap-1">
          <div className="text-zinc-800 text-[16px] font-bold font-sanse leading-[12px]">
            ${data?.pricePerMonth}
          </div>
          <div className="text-gray-400 text-xs font-medium font-sanse leading-[18px]">
            /month
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
