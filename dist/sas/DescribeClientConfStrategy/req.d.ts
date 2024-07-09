export interface DescribeClientConfStrategyRequest {
    /**
     * 指定要查询的客户端资源标签。
     * @example `machineResource`
     */
    "Tag": string;
    /**
     * 资产的标签值。
     * - major
     * - advanced
     * - basic
     * @example `major`
     */
    "TagValue": string;
}
