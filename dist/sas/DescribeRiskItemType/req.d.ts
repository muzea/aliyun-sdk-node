interface DescribeRiskItemTypeRequest {
    "RegionId"?: string;
    /**
    * 请求源IP。
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * 调用该接口返回的内容的语言种类。支持中文（CN）和英文（EN）。
    * @example `cn`
    */ "Lang"?: string;
}
export { DescribeRiskItemTypeRequest };