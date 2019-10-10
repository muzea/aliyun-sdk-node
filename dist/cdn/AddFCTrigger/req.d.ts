interface AddFCTriggerRequest {
    "RegionId"?: string;
    "TriggerARN": string;
    "EventMetaName": string;
    "EventMetaVersion": string;
    "SourceARN": string;
    "RoleARN": string;
    "Notes": string;
    "OwnerId"?: number;
    "FunctionARN"?: string;
}
export { AddFCTriggerRequest };