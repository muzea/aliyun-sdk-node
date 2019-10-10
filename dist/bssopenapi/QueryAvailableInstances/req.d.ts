interface QueryAvailableInstancesRequest {
    "RegionId"?: string;
    "Region"?: string;
    "OwnerId"?: number;
    "PageNum"?: number;
    "PageSize"?: number;
    "ProductCode"?: string;
    "ProductType"?: string;
    "SubscriptionType"?: string;
    "InstanceIDs"?: string;
    "EndTimeStart"?: string;
    "EndTimeEnd"?: string;
    "CreateTimeStart"?: string;
    "CreateTimeEnd"?: string;
    "RenewStatus"?: string;
}
export { QueryAvailableInstancesRequest };