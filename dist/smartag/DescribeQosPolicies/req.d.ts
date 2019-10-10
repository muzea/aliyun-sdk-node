interface DescribeQosPoliciesRequest {
    "RegionId": string;
    "QosId": string;
    "OwnerId"?: number;
    "QosPolicyId"?: string;
    "Description"?: string;
    "PageSize"?: number;
    "PageNumber"?: number;
    "Priority"?: number;
}
export { DescribeQosPoliciesRequest };