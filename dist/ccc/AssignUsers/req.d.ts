interface AssignUsersRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "UserRamId": string[];
    "RoleId"?: string[];
    "SkillGroupId"?: string[];
    "SkillLevel"?: number[];
}
export { AssignUsersRequest };