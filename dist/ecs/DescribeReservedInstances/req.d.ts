interface DescribeReservedInstancesRequest {
    "RegionId": string;
    "OwnerId"?: number;
    "PageNumber"?: number;
    "PageSize"?: number;
    "ZoneId"?: string;
    "ReservedInstanceId"?: string[];
    "ReservedInstanceName"?: string;
    "Status"?: string[];
    "LockReason"?: string;
    "InstanceType"?: string;
    "InstanceTypeFamily"?: string;
    "Scope"?: string;
    "OfferingType"?: string;
}
export { DescribeReservedInstancesRequest };