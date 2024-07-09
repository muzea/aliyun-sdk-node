export interface DescribeCdnUserConfigsRequest {
    /**
     * 需要查询的配置，支持查询的配置如下：
     * - **domain_business_control**：用户配置。
     * - **waf**：WAF功能配置。
     * @example `domain_business_control`
     */
    "FunctionName": string;
}
