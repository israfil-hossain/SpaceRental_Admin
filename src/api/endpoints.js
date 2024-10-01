const postFix = "/api";
export const API = {
  // Authentication

  SignUp: "/api/Authentication/Signup", //post
  Login: "/api/Authentication/SignIn", //post
  RefreshToken: "/api/Authentication/TokenRefresh", //post
  RevokeToken: "/api/Authentication/TokenRevoke", //post
  ChangePassword: "/api/api/Authentication/ChangePassword", //post
  GetLoginUser: "/api/Authentication/GetLoggedInUser", //get
  GetProfile: "/api/Authentication/UpdateProfilePicture", // patch

  // User......
  PostUser: "/api/ApplicationUser/Create", //post
  GetUser: "/api/ApplicationUser/GetAll", //get
  GetSingleUser: "/api/ApplicationUser/GetById/", //get
  DeleteUser: "/api/ApplicationUser/DeleteById", // delete

  // Control Panel API ...................................................................

  // Configuration API
  UpdateCommision: "/api/Configuration/SetCommissionSettings",
  GetCommision: "/api/Configuration/GetCommissionSettings",

  //.............................................................................................

  // Space For Rent
  SpaceForRentCreate: "/api/SpaceForRent/Create", //post
  GetSpaceForRent: "/api/SpaceForRent/GetAll", //get
  GetSingleSpaceForRent: "/api/SpaceForRent/GetById/", //get
  UpdateSpaceForRent: "/api/SpaceForRent/UpdateById/{DocId}", //update
  DeleteSpaceForRent: "/api/SpaceForRent/DeleteById/{DocId}", //delete

  AddSpaceImage: "/api/SpaceForRent/AddSpaceImageById/{DocId}", //post
  DeleteSpaceImage:
    "/api/SpaceForRent/DeleteSpaceImageById/{SpaceId}/{ImageId}", //delete

  // Supports
  GetAllTicket: "/api/Support/GetAllTickets",
  CreateTicket: "/api/Support/CreateTicket",
  GetSupportStatus: "/api/Support/GetSupportStatusForDropdown",
  UpdateTicketById: "/api/Support/UpdateTicketById/",
  GetAllMessage: "/api/Support/GetAllMessagesById/",
  AddMessage: "/api/Support/AddMessageById/",
};
