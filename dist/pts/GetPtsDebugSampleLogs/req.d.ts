export interface GetPtsDebugSampleLogsRequest {
    /**
     * 调试任务ID
     * @example ` NJJBH8B`
     */
    "PlanId"?: string;
    /**
     * 页码
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示记录条数。
     * @example `10`
     */
    "PageSize"?: number;
}
