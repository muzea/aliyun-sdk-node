interface UpdateUserGroupRequest {
    "RegionId": string;
    "Id": number;
    "Name": string;
    "Type"?: string;
    "Description"?: string;
    "RoleId"?: number[];
}
export { UpdateUserGroupRequest };