export interface DescribeRegionsRequest {
    /**
     * 产品类型，默认值为**VPC**。
     * @example `VPC`
     */
    "ProductType"?: string;
    /**
     * 返回值语言，取值：
     *
     * - **zh-CN**（默认值）：中文。
     * - **en-US**：英文。
     *
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
}
