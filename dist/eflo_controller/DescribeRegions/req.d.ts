export interface DescribeRegionsRequest {
    /**
     * 根据汉语、英语和日语筛选返回结果。更多信息，请参见RFC7231。取值范围：
     * zh-CN
     * en-US
     * 默认值：zh-CN
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
}
