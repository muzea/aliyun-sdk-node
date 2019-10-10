interface DescribeInstanceStatisticsRequest {
    /**
    * @example `cn`
    */ "RegionId"?: string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * 要查询的实例ID数组（JSON字符串）。
    * @example `[{"InstanceId":"ddoscoo-cn-XXXXX","InstanceId":"ddoscoo-cn-YYYYY"}]`
    */ "InstanceIds": string;
}
export { DescribeInstanceStatisticsRequest };