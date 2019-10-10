interface DescribeCustomMetricListRequest {
    "RegionId"?: string;
    /**
    * 应用分组ID。
    * @example `12345`
    */ "GroupId": string;
    /**
    * 监控项名称。
    * @example `cpu`
    */ "MetricName"?: string;
    /**
    * 维度map，key-value都为字符串, 支持字母、数字、连接符“_-./\”，键值对数量最大为10，key长度最大64字节，value长度最大64字节，超过64字节时截取前64字节。
    * @example `xx`
    */ "Dimension"?: string;
    /**
    * Md5校验码。
    * @example `97c25982d9745a231276bff27469fbc8`
    */ "Md5"?: string;
    /**
    * 当前页码。
    * @example `1`
    */ "PageNumber"?: string;
    /**
    * 每页显示记录条数。
    * @example `10`
    */ "PageSize"?: string;
}
export { DescribeCustomMetricListRequest };