interface PickOutboundNumbersByTagsRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "CalleeNumber": string;
    "Count": number;
    "SkillGroupId": string[];
    "ServiceTag"?: string[];
    "PrioritizedCallerArea"?: string[];
}
export { PickOutboundNumbersByTagsRequest };