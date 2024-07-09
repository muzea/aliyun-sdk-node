export interface DescribeIspFlushCacheTasksResponse {
    PageSize: number;
    RequestId: string;
    PageNumber: number;
    IspFlushCacheTasks: {
        TaskId: string;
        DomainName: string;
        InstanceId: string;
        InstanceName: string;
        Isp: string;
        TaskStatus: string;
        CreateTime: string;
        CreateTimestamp: number;
    }[];
    TotalPages: number;
    TotalItems: number;
}
