interface CreateBatchUsersRequest {
    "RegionId": string;
    "UserBaseParamList": string[];
    "RoleId"?: number[];
    "GroupId"?: number[];
    "Description"?: string;
}
export { CreateBatchUsersRequest };