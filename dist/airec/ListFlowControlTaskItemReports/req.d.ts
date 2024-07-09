export interface ListFlowControlTaskItemReportsRequest {
    /**
     * 实例ID。
     * @example `airec-cn-****`
     */
    "instanceId"?: string;
    /**
     * 流量调控任务ID。
     * @example `1666854493104`
     */
    "taskId"?: string;
    /**
     * 查询时间段，如果selectType=invalidItem，则只支持yesterDay。
     * 取值：
     * - **yesterDay**：昨天。
     * - **lastSevenDays**：最近7天。
     * - **lastFifteenDays**：最近15天。
     * @example `yesterDay`
     */
    "selectTimeType"?: string;
    /**
     * 查询数据类型。
     * 取值：
     * - **topExposeItem**：曝光排名物品。
     * - **invalidItem**：失效物品。
     * @example `invalidItem`
     */
    "selectType"?: string;
    /**
     * 当selectType="topItem"，count 代表查询TOP前xx个物品，默认10
     * 当selectType="invalidItem"，count 代表查询失效物品个数，默认10个。
     * @example `5`
     */
    "count"?: string;
}
