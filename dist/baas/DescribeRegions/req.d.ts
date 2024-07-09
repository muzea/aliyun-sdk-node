export interface DescribeRegionsRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 返回值的语言，取值：
     * - **zh-CN**：中文，默认值。
     * - **en-US**：英文。
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
}
