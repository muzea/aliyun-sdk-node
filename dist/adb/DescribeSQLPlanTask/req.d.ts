export interface DescribeSQLPlanTaskRequest {
    /**
     * 实例ID。
     * @example `am-bp1xxxxxxxx47`
     */
    "DBClusterId": string;
    /**
     * 查询任务ID。
     * @example `201907241445301720211111570315107****`
     */
    "ProcessId": string;
    /**
     * 任务所属阶段。
     * @example `1785135913****`
     */
    "StageId": string;
}
