interface DescribeResourceUsageRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    "OwnerId"?: number;
    "ClientToken"?: string;
}
export { DescribeResourceUsageRequest };