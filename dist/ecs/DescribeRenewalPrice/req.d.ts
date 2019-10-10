interface DescribeRenewalPriceRequest {
    "RegionId": string;
    "ResourceId": string;
    "SourceRegionId"?: string;
    "OwnerId"?: number;
    "ResourceType"?: string;
    "Period"?: number;
    "PriceUnit"?: string;
}
export { DescribeRenewalPriceRequest };