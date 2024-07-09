export interface DescribeIspFlushCacheInstancesResponse {
    PageSize: number;
    RequestId: string;
    PageNumber: number;
    IspFlushCacheInstances: {
        Isp: string;
        ExpireTime: string;
        InstanceId: string;
        QuotaInfo: {
            InstanceQuota: number;
            InstanceQuotaUsed: number;
        };
        ExpireTimestamp: number;
        InstanceName: string;
        VersionCode: string;
        Status: string;
    }[];
    TotalPages: number;
    TotalItems: number;
}
