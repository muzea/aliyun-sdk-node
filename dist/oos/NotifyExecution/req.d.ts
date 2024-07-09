export interface NotifyExecutionRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 执行ID
     * @example `exec-xxx`
     */
    "ExecutionId": string;
    /**
     * 通知类型。取值范围：
     * - **ExecuteTask** - 指定某个任务执行的开始，适用于Debug模式。可能需配合Parameters参数。
     * - **CancelTask** - 取消当前的任务执行，适用于Debug模式。
     * - **CompleteExecution** - 手动终止一个Debug模式下的执行。可配合**ExecutionStatus**参数指定被终止执行的状态。
     * - **Approve**- 同意，适用于批准待审批的执行。如已知晓高危操作的任务执行风险，并准许其执行。
     * - **Reject** - 拒绝，适用于驳回待审批的执行。如不准许高危操作的任务执行。
     * - **RetryTask**- 失重试已经执行失败的任务，适用于失败暂停模式。
     * - **SkipTask** - 跳过已经执行失败的任务，适用于失败暂停模式。
     * @example `Approve`
     */
    "NotifyType": string;
    /**
     * 用于说明的message
     * @example `说明`
     */
    "NotifyNote"?: string;
    /**
     * 下一步要执行的Task Name
     * @example `describeInstance`
     */
    "TaskName"?: string;
    /**
     * 任务执行ID
     * @example `task-exec-xxx`
     */
    "TaskExecutionId"?: string;
    /**
     * 适用于CompleteExecution
     * @example `Success`
     */
    "ExecutionStatus"?: string;
    /**
     * 适用于ExecuteTask
     * @example `{}	`
     */
    "Parameters"?: string;
    /**
     * Loop子节点对应Item数据
     * @example `i-xxx`
     */
    "LoopItem"?: string;
    /**
     * 任务执行的ID列表。
     * @example `["exec-79c321c11003a97c","exec-79c321c11003aqw97cz"]`
     */
    "TaskExecutionIds"?: string;
}
