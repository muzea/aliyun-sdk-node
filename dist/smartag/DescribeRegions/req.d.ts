interface DescribeRegionsRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 返回值语言。取值：
    * - zh-CN（默认值）：中文
    *
    * - en-US：英文
    * @example `zh-CN`
    */ "AcceptLanguage"?: string;
}
export { DescribeRegionsRequest };