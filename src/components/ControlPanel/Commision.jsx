import React, { useEffect, useState } from "react";
import { CommonButton, CommonSelect } from "../common/ui";
import {
  commisionPercent,
  commisions,
} from "../../constants/Data/constantsData";
import { API } from "../../api/endpoints";
import usePatch from "../../hooks/usePatch";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import Loader from "../common/Loader";

const Commision = () => {
  const GetCommision = API.GetCommision;
  
  // get Condition Data ....
  const {
    data: commisionData = {},
    isLoading: CommisionLoading,
    refetch,
  } = useQuery([API.GetCommision]);

  const [commisionspace, setCommisionSpace] = useState("space-owner");
  const [commisionForOwner, setCommisionForOwner] = useState(commisionData?.data?.ownerCommission);
  const [commisionrenter, setCommisionRenter] = useState("rental-owner");
  const [commisionForRenter, setCommisionForRenter] = useState(commisionData?.data?.renterCommission);


  const { mutateAsync: updateMutate, isLoading: updateLoading } = usePatch({
    endpoint: API.UpdateCommision, 
    onSuccess: (data) => {
      toast.success("Update Commission Successfully !");
      refetch();
    },
    onError: (error) => {
      // Handle update error, e.g., display an error message
      console.error("Update failed", error);
      toast.error("Something went wrong !");
    },
  });

  const handleSave = async ()=>{
    try{
      const payload = {
        ownerCommission : commisionForOwner, 
        renterCommission : commisionForRenter
      }
      await updateMutate(payload)

    }
    catch(err){
      console.error(err); 
      toast.error(err)
    }
  }

  useEffect(()=>{
    if(commisionData){
      setCommisionForOwner(commisionData?.data?.ownerCommission)
      setCommisionForRenter(commisionData?.data?.renterCommission)
    }
  },[commisionData])

  return (
    <div className="border border-primary rounded-lg p-5">
      <div className="flex justify-between ">
        <p className="lg:text-lg md:text-md xs:text-sm font-semibold ">
          Commission Setting
        </p>
        <div className="flex space-x-2">
          <CommonButton
            type="reset"
            text={"Reset"}
            className="bg-[#E7E9E2] hover:bg-[#eaf9c4]"
          />
          <CommonButton
            type="submit"
            text={"Save Changes"}
            className="bg-primary hover:bg-secondary"
            onClick={handleSave}
            isLoading={updateLoading}
            
          />
        </div>
      </div>
      {CommisionLoading ? (
        <Loader />
      ) : (
        <>
          <div className="mt-4 items-center grid lg:grid-cols-2 xs:grid-cols-1 gap-5 ">
            <CommonSelect
              width={270}
              label="Commision for"
              labelId={"commision-label"}
              id={"commision-label-id"}
              options={commisions}
              value={commisionspace}
              setSelect={setCommisionSpace}
              disabled={true}
            />

            <CommonSelect
              width={270}
              label="Commision %"
              labelId={"commision-percent-label"}
              id={"commision-percent-label-id"}
              options={commisionPercent}
              defaultValue={commisionData?.data?.ownerCommission}
              value={commisionForOwner}
              setSelect={setCommisionForOwner}
            />
          </div>
          <div className="mt-5 mb-5 items-center grid lg:grid-cols-2 xs:grid-cols-1 gap-5 ">
            <CommonSelect
              width={270}
              label="Commision for"
              labelId={"commision-label"}
              id={"commision-label-id"}
              options={commisions}
              value={commisionrenter}
              setSelect={setCommisionRenter}
              disabled={true}
            />

            <CommonSelect
              width={270}
              label="Commision %"
              labelId={"commision-label"}
              id={"commision-label-id"}
              options={commisionPercent}
              value={commisionForRenter}
              setSelect={setCommisionForRenter}
              defaultValue={commisionData?.data?.renterCommission}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Commision;
