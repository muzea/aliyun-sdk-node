interface DescribeRegionsRequest {
    "RegionId"?: string;
    /**
    * 根据汉语、英语筛选返回结果。取值范围：
    * - zh-CN：中文
    * - en-US：英文
    * 默认值：zh-CN。
    * @example `zh-CN`
    */ "AcceptLanguage"?: string;
}
export { DescribeRegionsRequest };