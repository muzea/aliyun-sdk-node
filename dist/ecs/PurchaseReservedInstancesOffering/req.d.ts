interface PurchaseReservedInstancesOfferingRequest {
    "RegionId": string;
    "InstanceType": string;
    "OwnerId"?: number;
    "ResourceGroupId"?: string;
    "ZoneId"?: string;
    "ReservedInstanceName"?: string;
    "Scope"?: string;
    "InstanceAmount"?: number;
    "OfferingType"?: string;
    "Description"?: string;
    "Period"?: number;
    "PeriodUnit"?: string;
    "ClientToken"?: string;
}
export { PurchaseReservedInstancesOfferingRequest };