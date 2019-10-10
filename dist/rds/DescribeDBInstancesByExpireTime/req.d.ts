interface DescribeDBInstancesByExpireTimeRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    "proxyId"?: string;
    "ExpirePeriod"?: number;
    "Expired"?: boolean;
    "PageSize"?: number;
    "PageNumber"?: number;
    "Tags"?: string;
}
export { DescribeDBInstancesByExpireTimeRequest };