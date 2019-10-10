interface DescribeInstancesByExpireTimeRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    "ExpirePeriod": number;
    "HasExpiredRes"?: boolean;
    "PageNumber"?: number;
    "PageSize"?: number;
    "InstanceType"?: string;
}
export { DescribeInstancesByExpireTimeRequest };