interface DescribeRiskCheckSummaryRequest {
    "RegionId"?: string;
    /**
    * 请求源IP。
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * 调用接口返回的内容的语种类型，支持中文和英文。
    * @example `cn`
    */ "Lang"?: string;
}
export { DescribeRiskCheckSummaryRequest };