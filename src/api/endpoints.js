export const API = {
  // Authentication
  SignUp: "/Auth/Signup", //post
  Login: "/Auth/SignIn", //post
  RefreshToken: "/Auth/TokenRefresh", //post
  RevokeToken: "/Auth/TokenRevoke", //post
  ChangePassword: "/api/Authentication/ChangePassword", //post
  GetLoginUser: "/Auth/GetLoggedInUser", //get
  GetProfile: "/Auth/UpdateProfilePicture", // patch

  // User......
  PostUser: "/User/Create", //post
  GetUser: "/User/GetAll", //get
  GetSingleUser: "/User/GetById/{DocId}", //get
  DeleteUser: "/User/DeleteById/{DocId}", // delete
  UpdateUser :'/api/ApplicationUser/UpdateOwnProfile',//update profile
  UpdateProfile :'/api/ApplicationUser/UpdateOwnProfilePicture',//update profile picture
  // Space Type
  CreateSpaceType: "/api/SpaceType/Create", // post
  GetSpaceType: "/api/SpaceType/GetAll", //get
  GetSingleSpaceType: "/api/SpaceType/GetById/{DocId}", //get
  UpdateSpaceType: "/api/SpaceType/UpdateById/", //patch
  DeleteSpaceType: "/api/SpaceType/DeleteById/{DocId}", //delete

  //Terms And Condition....
  CreateTermsAndCondition : "/api/TermsAndCondition/Create",
  UpdateTermsAndCondition : "/api/TermsAndCondition/UpdateById/",
  GetAllTermsAndCondition : "/api/TermsAndCondition/GetAll",


  //SpaceAccess Option
  SpaceAccessCreate: "/api/SpaceAccessOption/Create", //post
  GetSpaceAccessOption: "/api/SpaceAccessOption/GetAll", // get
  GetSingleAccessOption: "/api/SpaceAccessOption/GetById/{DocId}", //get
  UpdateAccessOption: "/api/SpaceAccessOption/UpdateById/{DocId}", //update-patch
  DeleteAccessOption: "/api/SpaceAccessOption/DeleteById/{DocId}", //delete

  // Storage  Condition Features
  StorageConditionCreate: "/api/StorageConditionFeature/Create", //post
  GetStorageCondition: "/api/StorageConditionFeature/GetAll", // get
  DeleteStorageCondition: "/api/StorageConditionFeature/DeleteById", // delete

  // Space Security Features
  SpaceSecurityFeatureCreate: "/api/SpaceSecurityFeature/Create", //post
  GetSpaceSecurityFeature: "/api/SpaceSecurityFeature/GetAll", //get
  DeleteSpaceSecurityFeature: "/api/SpaceSecurityFeature/DeleteById/{DocId}", //delete

  // Space Schedule Features
  SpaceScheduleFeatureCreate: "/api/SpaceScheduleFeature/Create", //post
  GetSpaceScheduleFeature: "/api/SpaceScheduleFeature/GetAll", //get
  DeleteSpaceScheduleFeature: "/api/SpaceScheduleFeature/DeleteById/{DocId}", //delete

  // Space For Rent
  SpaceForRentCreate: "/api/SpaceForRent/Create", //post
  GetSpaceForRent: "/api/SpaceForRent/GetAll", //get
  GetSingleSpaceForRent: "/api/SpaceForRent/GetById/{DocId}", //get
  UpdateSpaceForRent: "/api/SpaceForRent/UpdateById/{DocId}", //update
  DeleteSpaceForRent: "/api/SpaceForRent/DeleteById/{DocId}", //delete

  AddSpaceImage: "/api/SpaceForRent/AddSpaceImageById/{DocId}", //post
  DeleteSpaceImage:
    "/api/SpaceForRent/DeleteSpaceImageById/{SpaceId}/{ImageId}", //delete
};
