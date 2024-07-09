export interface TriggerProcessTaskRequest {
    /**
     * 处置任务的唯一标识。
     * >调用[DescribeProcessTasks](~~DescribeProcessTasks~~)接口可以获取该参数。
     * @example `15355xxxxxx82894882`
     */
    "TaskId": string;
    /**
     * 处置动作的类型，取值如下：
     * - **remove**：表示解除封禁或隔离
     * - **retry**：表示重新提交任务
     * @example `remove`
     */
    "ActionType": string;
}
