export interface DescribeClientConfSetupRequest {
    /**
     * 指定要查询的客户端资源标签。
     * @example `machineResource`
     */
    "StrategyTag": string;
    /**
     * 设置的策略值。
     * 有以下三种类型：
     * - major
     * - advanced
     * - basic
     * @example `major`
     */
    "StrategyTagValue": string;
}
