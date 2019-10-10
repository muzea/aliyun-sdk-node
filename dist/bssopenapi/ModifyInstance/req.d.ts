interface ModifyInstanceRequest {
    "RegionId"?: string;
    "ProductCode": string;
    "SubscriptionType": string;
    "ModifyType": string;
    "OwnerId"?: number;
    "ProductType"?: string;
    "InstanceId"?: string;
    "Parameter"?: string[];
    "ClientToken"?: string;
}
export { ModifyInstanceRequest };