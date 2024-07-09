export interface DescribeStrategyTargetRequest {
    /**
     * 访问源的IP地址。
     * @example `1.2.X.X`
     */
    "SourceIp"?: string;
    /**
     * 设置查询类型。此处为固定值：hc_strategy，表示查询基线策略。
     * @example `hc_strategy`
     */
    "Type": string;
    /**
     * 要查询的基线检查策略的ID。
     * @example `{"strategyId":8167126}`
     */
    "Config": string;
}
