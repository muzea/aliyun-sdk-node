interface CreateUserRequest {
    "RegionId"?: string;
    "DisplayName": string;
    "InstanceId": string;
    "LoginName": string;
    "Email": string;
    "RoleId": string[];
    "Phone"?: string;
    "PrivateOutboundNumberId"?: string;
    "SkillGroupId"?: string[];
    "SkillLevel"?: number[];
}
export { CreateUserRequest };