export interface DescribeEipAddressesRequest {
    "RegionId": string;
    "Status"?: string;
    "EipAddress"?: string;
    "AllocationId"?: string;
    "ISP"?: string;
    "PageNumber"?: number;
    "PageSize"?: number;
    "Filter.1.Key"?: string;
    "Filter.2.Key"?: string;
    "Filter.1.Value"?: string;
    "Filter.2.Value"?: string;
    "LockReason"?: string;
    "AssociatedInstanceType"?: string;
    "AssociatedInstanceId"?: string;
    "ChargeType"?: string;
}
