export interface DescribeRegionsRequest {
    /**
     * 支持的语言。取值：
     * - **zh-CN**：中文
     * - **en-US**：英文
     * - **ja**：日文
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
