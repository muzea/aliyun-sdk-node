export interface DescribeRegionsRequest {
    /**
     * 设置返回结果的语言类型。取值范围：
     * - **zh-CN**（默认值）：中文
     * - **en-US**：英文
     * - **ja**：日文
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
    /**
     * 地域ID。
     * @example `cn-shenzhen`
     */
    "RegionId"?: string;
}
