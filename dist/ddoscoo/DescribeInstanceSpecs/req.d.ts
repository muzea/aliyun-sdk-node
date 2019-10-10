interface DescribeInstanceSpecsRequest {
    /**
    * @example `cn`
    */ "RegionId"?: string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * 要查询的实例ID数组（JSON字符串）。
    * @example `["ddoscoo-cn-XXXXX"]`
    */ "InstanceIds": string;
}
export { DescribeInstanceSpecsRequest };