interface CreateSkillGroupRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "Name": string;
    "Description"?: string;
    "RoutingStrategy"?: string;
    "OutboundPhoneNumberId"?: string[];
    "UserId"?: string[];
    "SkillLevel"?: number[];
    "AllowPrivateOutboundNumber"?: boolean;
}
export { CreateSkillGroupRequest };