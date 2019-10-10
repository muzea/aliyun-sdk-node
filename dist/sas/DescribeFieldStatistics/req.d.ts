interface DescribeFieldStatisticsRequest {
    "RegionId"?: string;
    "SourceIp"?: string;
    /**
    * 指定待检索的资产类型。
    * @example `ecs`
    */ "MachineTypes"?: string;
}
export { DescribeFieldStatisticsRequest };