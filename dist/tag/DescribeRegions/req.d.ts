export interface DescribeRegionsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 支持的语言。取值：
     * - zh-CN（默认值）：中文
     * - en-US：英文
     * - ja：日文
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
}
