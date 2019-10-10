interface ModifyCabInstanceRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "InstanceName"?: string;
    "InstanceDescription"?: string;
    "MaxConcurrentConversation"?: number;
    "CallCenterInstanceId"?: string;
}
export { ModifyCabInstanceRequest };