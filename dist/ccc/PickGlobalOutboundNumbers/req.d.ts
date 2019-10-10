interface PickGlobalOutboundNumbersRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "CalleeNumber": string;
    "SkillGroupId": string[];
    "Count"?: number;
    "IsVirtual"?: boolean;
}
export { PickGlobalOutboundNumbersRequest };