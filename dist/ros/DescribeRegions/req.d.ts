interface DescribeRegionsRequest {
    "RegionId"?: string;
    /**
    * 根据汉语、英语和日语筛选返回结果。更多详情，请参见RFC7231。
    * 取值范围：zh-CN, en-US, ja。
    * 默认值：zh-CN。
    * @example `zh-CN`
    */ "AcceptLanguage"?: string;
}
export { DescribeRegionsRequest };