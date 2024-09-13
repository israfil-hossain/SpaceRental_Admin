const SpaceAccessApi = {
  SpaceAccessCreate: "/api/SpaceAccessMethod/Create", //post
  GetAllSpaceAccess: "/api/SpaceAccessMethod/GetAll", // get
  GetSingleAccessOption: "/api/SpaceAccessMethod/GetById/{DocId}", //get
  UpdateAccessOption: "/api/SpaceAccessMethod/UpdateById/{DocId}", //update-patch
  DeleteAccessOption: "/api/SpaceAccessMethod/DeleteById/{DocId}", //delete
};

const TermsAPI = {
  TermsAndConditionCreate: "/api/TermsAndCondition/Create", //post
  GetAllTerms: "/api/TermsAndCondition/GetAll", // get
  DeleteTermsAndCondition: "/api/TermsAndCondition/DeleteById", // delete
  UpdateTermsAndConditon: "/api/TermsAndCondition/UpdateById/", // update
};

const SpaceTypeAPI = {
  CreateSpaceType: "/api/SpaceType/Create",
  GetAllSpaceType: "/api/SpaceType/GetAll",
  GetByIdSpaceType: "/api/SpaceType/GetById/",
  UpdateSpaceType: "/api/SpaceType/UpdateById/",
  DeleteSpaceType: "/api/SpaceType/DeleteById",
  GetAllSpaceTypeDropdown: "/api/SpaceType/GetAllForDropdown",
};

const SpaceScheduleAPI = {
  SpaceScheduleFeatureCreate: "/api/SpaceScheduleFeature/Create", //post
  GetSpaceScheduleFeature: "/api/SpaceScheduleFeature/GetAll", //get
  DeleteSpaceScheduleFeature: "/api/SpaceScheduleFeature/DeleteById", //delete
};

const SpaceSecurityAPI = {
  SpaceSecurityFeatureCreate: "/api/SpaceSecurityFeature/Create", //post
  GetSpaceSecurityFeature: "/api/SpaceSecurityFeature/GetAll", //get
  DeleteSpaceSecurityFeature: "/api/SpaceSecurityFeature/DeleteById/{DocId}", //delete
};

export {
  SpaceAccessApi,
  TermsAPI,
  SpaceTypeAPI,
  SpaceScheduleAPI,
  SpaceSecurityAPI,
};
