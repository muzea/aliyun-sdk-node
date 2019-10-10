interface DescribeOrderInstanceListRequest {
    "RegionId"?: string;
    /**
    * 开始索引号。指定从该索引号开始查询证书订单实例信息。
    * @example `1`
    */ "StartIndex": number;
    /**
    * 指定访问源IP地址。
    * @example `1.2.3.4`
    */ "SourceIp"?: string;
    /**
    * 请求字段的语言种类。
    * @example `zh`
    */ "Lang"?: string;
}
export { DescribeOrderInstanceListRequest };