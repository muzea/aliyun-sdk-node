export interface DescribeIspFlushCacheTaskResponse {
    RequestId: string;
    TaskId: string;
    DomainName: string;
    InstanceId: string;
    InstanceName: string;
    Isp: string;
    TaskStatus: string;
    CreateTime: string;
    CreateTimestamp: number;
    FlushCacheResults: {
        Province: string;
        DnsNodes: {
            NodeIp: string;
            Answers: {
                Name: string;
                Type: string;
                Record: string;
                Ttl: number;
            }[];
            SpName: string;
            Status: string;
        }[];
    }[];
}
