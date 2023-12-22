export const API ={
    // Authentication 
    SignUp : '/Auth/Signup', //post 
    Login : '/Auth/SignIn', //post 
    RefreshToken : '/Auth/TokenRefresh',  //post 
    RevokeToken : '/Auth/TokenRevoke',  //post 
    ChangePassword : '/Auth/ChangePassword',  //post 
    GetLoginUser : '/Auth/GetLoggedInUser', //get 
    GetProfile : '/Auth/UpdateProfilePicture', // patch 

    // User...... 
    PostUser : '/User/Create', //post 
    GetUser : '/User/GetAll', //get  
    GetSingleUser : '/User/GetById/{DocId}' , //get 
    DeleteUser : '/User/DeleteById/{DocId}', // delete 

    // Space Type 
    CreateSpaceType : '/SpaceType/Create' , // post 
    GetSpaceType : '/SpaceType/GetAll', //get 
    GetSingleSpaceType : '/SpaceType/GetById/{DocId}', //get 
    UpdateSpaceType : '/SpaceType/UpdateById/{DocId}', //patch 
    DeleteSpaceType : '/SpaceType/DeleteById/{DocId}', //delete

    //SpaceAccess Option 
    SpaceAccessCreate : '/SpaceAccessOption/Create', //post 
    GetSpaceAccessOption : '/SpaceAccessOption/GetAll', // get 
    GetSingleAccessOption : '/SpaceAccessOption/GetById/{DocId}', //get 
    UpdateAccessOption : '/SpaceAccessOption/UpdateById/{DocId}', //update-patch 
    DeleteAccessOption : '/SpaceAccessOption/DeleteById/{DocId}', //delete 

    // Storage  
    StorageConditionCreate : '/StorageConditionFeature/Create', //post 
    GetStorageCondition : '/StorageConditionFeature/GetAll', // get 
    DeleteStorageCondition : '/StorageConditionFeature/DeleteById/{DocId}', // delete 

    // Space Security Features 
    SpaceSecurityFeatureCreate : '/SpaceSecurityFeature/Create', //post 
    GetSpaceSecurityFeature : '/SpaceSecurityFeature/GetAll', //get 
    DeleteSpaceSecurityFeature : '/SpaceSecurityFeature/DeleteById/{DocId}', //delete 

    // Space Schedule Features  
    SpaceScheduleFeatureCreate : '/SpaceScheduleFeature/Create', //post 
    GetSpaceScheduleFeature : '/SpaceScheduleFeature/GetAll', //get 
    DeleteSpaceScheduleFeature: '/SpaceScheduleFeature/DeleteById/{DocId}', //delete 


    // Space For Rent 
    SpaceForRentCreate : '/SpaceForRent/Create', //post 
    GetSpaceForRent : '/SpaceForRent/GetAll', //get 
    GetSingleSpaceForRent: '/SpaceForRent/GetById/{DocId}', //get 
    UpdateSpaceForRent : '/SpaceForRent/UpdateById/{DocId}', //update
    DeleteSpaceForRent: '/SpaceForRent/DeleteById/{DocId}', //delete

    AddSpaceImage : '/SpaceForRent/AddSpaceImageById/{DocId}', //post 
    DeleteSpaceImage : '/SpaceForRent/DeleteSpaceImageById/{SpaceId}/{ImageId}', //delete 


}