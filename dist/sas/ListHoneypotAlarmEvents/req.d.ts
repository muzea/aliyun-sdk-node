export interface ListHoneypotAlarmEventsRequest {
    /**
     * 状态。取值：
     * - **y**：已处理
     * - **n**：未处理
     * - **a**：所有
     * @example `n`
     */
    "Dealed"?: string;
    /**
     * 源IP。
     * @example `101.132.XX.XX`
     */
    "SrcIp"?: string;
    /**
     * 目的IP。
     * @example `172.20.XX.XX`
     */
    "DstIp"?: string;
    /**
     * 风险等级。
     */
    "RiskLevelList"?: string[];
    /**
     * 分页查询时，当前页的页码。
     * @example `10`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，每页显示的检查结果的数量。默认值为**100**，表示每页显示**100**条告警结果。
     * @example `10`
     */
    "PageSize"?: number;
}
