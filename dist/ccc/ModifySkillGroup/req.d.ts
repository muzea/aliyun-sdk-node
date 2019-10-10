interface ModifySkillGroupRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "SkillGroupId": string;
    "Name": string;
    "Description"?: string;
    "RoutingStrategy"?: string;
    "OutboundPhoneNumberId"?: string[];
    "UserId"?: string[];
    "SkillLevel"?: number[];
    "AllowPrivateOutboundNumber"?: boolean;
}
export { ModifySkillGroupRequest };