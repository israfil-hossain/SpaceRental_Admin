import dayjs from "dayjs";
import { calender } from "../../assets/images/icons";
import { FaUser } from "react-icons/fa";

const topUserHeader = [
  {
    label: "NAME",
    key: "fullName",
    className: "custom-class",
    render: (value, item) => (
      <div className="flex space-x-2">
        {item?.profilePicture ? (
          <img
            src={item?.profilePicture}
            alt="User"
            style={{ width: 30, height: 30, borderRadius: "50%" }}
          />
        ) : (
          <FaUser  size={22} className="text-black"/>
        )}

        <p>{value}</p>
      </div>
    ),
  },
  {
    label: "JOINED",
    key: "dateJoined",
    className: "custom-class",
    render: (value) => (
      <div className="flex space-x-2">
        <img
          src={calender}
          alt="calender"
          style={{ width: 20, height: 20, borderRadius: "50%" }}
        />
        <p>{dayjs(value).format("DD/MM/YYYY")}</p>
      </div>
    ),
  },
];

const permissionHeadings = [
  {
    label: "NAME",
    key: "name",
    className: "custom-class",
    render: (value, item) => (
      <div className="flex space-x-2">
        <img
          src={item.image}
          alt="User"
          style={{ width: 30, height: 30, borderRadius: "50%" }}
        />
        <p>{value}</p>
      </div>
    ),
  },
];

const conditionHeadings = [
  {
    label: "Condition NAME",
    key: "name",
    className: "custom-class",
  },
  {
    label: "STATUS",
    key: "isActive",
    className: "custom-class",
    render: (value) => (
      <div className="text-sm font-normal">
        <p
          className={`${
            value === true ? "bg-[#CDF8D8]" : "bg-[#fcbab1]"
          } w-28 rounded-lg p-1 text-center`}
        >
          {value ? "Active" : "Inactive"}
        </p>
      </div>
    ),
  },
];

const spaceTypeHeadings = [
  {
    label: "Space Type",
    key: "name",
    className: "custom-class",
  },
  {
    label: "Price Per Month",
    key: "pricePerMonth",
    className: "custom-class",
  },
  {
    label: "STATUS",
    key: "isActive",
    className: "custom-class",
    render: (value) => (
      <div className="text-sm font-normal">
        <p
          className={`${
            value === true ? "bg-[#CDF8D8]" : "bg-[#fcbab1]"
          } w-28 rounded-lg p-1 text-center`}
        >
          {value ? "Active" : "Inactive"}
        </p>
      </div>
    ),
  },
];

const AccessTypeHeadings = [
  {
    label: "Access Type",
    key: "name",
    className: "custom-class",
  },
  {
    label: "STATUS",
    key: "isActive",
    className: "custom-class",
    render: (value) => (
      <div className="text-sm font-normal">
        <p
          className={`${
            value === true ? "bg-[#CDF8D8]" : "bg-[#fcbab1]"
          } w-28 rounded-lg p-1 text-center`}
        >
          {value ? "Active" : "Inactive"}
        </p>
      </div>
    ),
  },
];

const StorageTypeHeadings = [
  {
    label: "Storage Condition",
    key: "name",
    className: "custom-class",
  },
  {
    label: "STATUS",
    key: "isActive",
    className: "custom-class",
    render: (value) => (
      <div className="text-sm font-normal">
        <p
          className={`${
            value === true ? "bg-[#CDF8D8]" : "bg-[#fcbab1]"
          } w-28 rounded-lg p-1 text-center`}
        >
          {value ? "Active" : "Inactive"}
        </p>
      </div>
    ),
  },
];

const UnloadMovesHeadings = [
  {
    label: "Unload Moves",
    key: "name",
    className: "custom-class",
  },
  {
    label: "STATUS",
    key: "isActive",
    className: "custom-class",
    render: (value) => (
      <div className="text-sm font-normal">
        <p
          className={`${
            value === true ? "bg-[#CDF8D8]" : "bg-[#fcbab1]"
          } w-28 rounded-lg p-1 text-center`}
        >
          {value ? "Active" : "Inactive"}
        </p>
      </div>
    ),
  },
];

const ScheduleHeadings = [
  {
    label: "Schedule Condition",
    key: "name",
    className: "custom-class",
  },
  {
    label: "STATUS",
    key: "isActive",
    className: "custom-class",
    render: (value) => (
      <div className="text-sm font-normal">
        <p
          className={`${
            value === true ? "bg-[#CDF8D8]" : "bg-[#fcbab1]"
          } w-28 rounded-lg p-1 text-center`}
        >
          {value ? "Active" : "Inactive"}
        </p>
      </div>
    ),
  },
];

const SecurityHeadings = [
  {
    label: "Security Condition",
    key: "name",
    className: "custom-class",
  },
  {
    label: "STATUS",
    key: "isActive",
    className: "custom-class",
    render: (value) => (
      <div className="text-sm font-normal">
        <p
          className={`${
            value === true ? "bg-[#CDF8D8]" : "bg-[#fcbab1]"
          } w-28 rounded-lg p-1 text-center`}
        >
          {value ? "Active" : "Inactive"}
        </p>
      </div>
    ),
  },
];

export {
  topUserHeader,
  permissionHeadings,
  conditionHeadings,
  spaceTypeHeadings,
  AccessTypeHeadings,
  StorageTypeHeadings,
  UnloadMovesHeadings,
  ScheduleHeadings,
  SecurityHeadings,
};
