export interface ListFlowControlTaskRequest {
    /**
     * 实例ID。
     * @example `airec-cn-****`
     */
    "instanceId"?: string;
    /**
     * 流量调控任务ID。
     * @example `1661506482`
     */
    "taskId"?: string;
    /**
     * 任务状态。
     * 取值：
     * - **DRAFT**：草稿。
     * - **READY**：待生效。
     * - **RUNNING**：运行中。
     * - **ENDED**：结束。
     * @example `DRAFT`
     */
    "status"?: string;
    /**
     * 分页页数。
     * @example `1`
     */
    "page"?: number;
    /**
     * 指定每页展示条数，默认为10，限制:[1-50]。
     * @example `10`
     */
    "size"?: number;
}
