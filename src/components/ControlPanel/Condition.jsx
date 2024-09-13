import React, { useState } from "react";
import { MdAdd, MdDelete, MdModeEditOutline } from "react-icons/md";
import DefaultTable from "../common/DefaultTable";
import { conditionHeadings } from "../../constants/TableColumns/headings";
import AddCondition from "./AddCondition";
import { useQuery } from "@tanstack/react-query";
import { useDelete } from "../../hooks";
import { CommonButton } from "../common/ui";
import { deleteConfirmation } from "../common/Toast/DeleteConfirmation";
import { toast } from "react-toastify";
import { TermsAPI } from "../../api/controlapi";

const Condition = () => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [conditionData, setConditionData] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setConditionData("");
    setOpen(false);
  };
  const ConditionDeleteEndpoint = TermsAPI.DeleteTermsAndCondition;

  // get Condition Data ....
  const {
    data: getConditionData = {},
    isLoading: ConditionLoading,
    refetch,
  } = useQuery([TermsAPI.GetAllTerms]);

  // Delte Mutation ....
  const deleteMutation = useDelete({
    endpoint: ConditionDeleteEndpoint,
  });

  const handleEdit = (item) => {
    setConditionData(item);
    handleOpen();
  };

  const handleDelete = async (item) => {
    if (item?._id) {
      deleteConfirmation().then((result) => {
        if (result.isConfirmed) {
          deleteMutation.mutateAsync(item?._id, {
            onSuccess: () => {
              toast.success("Delete successful!");
              refetch();
            },
            onError: (error) => {
              toast.error("Something went wrong!");
              console.error("Error during delete:", error);
            },
          });
        }
      });
    }
  };

  const conditionActions = [
    {
      icon: <MdModeEditOutline color="white" size={16} />,
      tooltip: "Edit",
      handler: handleEdit,
      bgColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-700",
    },
    {
      icon: <MdDelete color="white" size={16} />,
      tooltip: "Delete",
      handler: handleDelete,
      bgColor: "bg-red-500",
      hoverColor: "hover:bg-red-700",
    },
  ];
  return (
    <div>
      <div className="">
        {/* Condition for renter and space owner  */}
        <div className="border border-primary rounded-lg p-5 bg-white">
          <div className="flex justify-between ">
            <p className="lg:text-lg md:text-md xs:text-sm font-semibold ">
              Condition for renter and space owner
            </p>
            <CommonButton
              text="Add"
              className="bg-primary hover:bg-secondary text-gray-200"
              icon={<MdAdd />}
              onClick={handleOpen}
            />
          </div>
          <div className="mt-4 pb-3 ">
            <DefaultTable
              isLoading={ConditionLoading}
              headings={conditionHeadings}
              data={getConditionData?.data}
              disablePagination={false}
              size={size}
              setSize={setSize}
              page={page}
              setPage={setPage}
              actionIcons={conditionActions}
            />
          </div>
        </div>
      </div>
      {/* Add New Condition  */}
      <AddCondition
        open={open}
        onClose={handleClose}
        refetch={refetch}
        data={conditionData}
      />
    </div>
  );
};

export default Condition;
