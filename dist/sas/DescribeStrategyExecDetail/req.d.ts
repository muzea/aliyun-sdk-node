export interface DescribeStrategyExecDetailRequest {
    /**
     * 访问源IP地址。
     * @example `1.2.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 基线检测策略ID。
     * @example `8437592`
     */
    "StrategyId": number;
    /**
     * 设置分页查询时，每页显示的基线检查结果的数量。默认值为**10**，表示每页显示10条基线检查结果。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
}
