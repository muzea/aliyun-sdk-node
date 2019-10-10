interface ModifyUserRequest {
    "RegionId"?: string;
    "DisplayName": string;
    "InstanceId": string;
    "UserId": string;
    "Phone": string;
    "Email": string;
    "RoleId": string[];
    "PrivateOutboundNumberId"?: string;
    "SkillGroupId"?: string[];
    "SkillLevel"?: number[];
}
export { ModifyUserRequest };