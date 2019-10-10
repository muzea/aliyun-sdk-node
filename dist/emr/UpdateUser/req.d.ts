interface UpdateUserRequest {
    "RegionId": string;
    "UserName": string;
    "AliyunUserId"?: string;
    "UserType"?: string;
    "Status"?: string;
    "Description"?: string;
    "RoleIdList"?: number[];
    "GroupIdList"?: number[];
    "UserAccountParamList"?: string[];
}
export { UpdateUserRequest };