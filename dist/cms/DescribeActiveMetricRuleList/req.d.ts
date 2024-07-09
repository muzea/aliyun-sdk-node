export interface DescribeActiveMetricRuleListRequest {
    /**
     * 支持一键报警规则的云产品名称缩写。
     * 关于如何获取云产品名称，请参见[DescribeProductsOfActiveMetricRule](~~114930~~)。
     * @example `ecs`
     */
    "Product": string;
}
