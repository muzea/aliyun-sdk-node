interface DescribeElasticBandwidthSpecRequest {
    "RegionId"?: string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * 要查询的实例ID。单次请求只支持查询1个实例。
    * @example `ddoscoo-cn-XXXXX`
    */ "InstanceId": string;
}
export { DescribeElasticBandwidthSpecRequest };