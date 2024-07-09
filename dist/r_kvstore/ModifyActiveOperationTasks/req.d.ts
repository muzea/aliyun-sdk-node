export interface ModifyActiveOperationTasksRequest {
    /**
     * 运维任务 ID，多个 ID 间使用英文逗号（,）分隔。
     * @example `1111721,1111718`
     */
    "Ids": string;
    /**
     * 要设置的计划切换时间，格式为 yyyy-MM-ddTHH:mm:ssZ（UTC 时间）。
     * >
     * >  不能晚于最晚操作时间，您可以调用 DescribeActiveOperationTasks，通过返回参数 Deadline 的值来获取最晚操作时间。
     * @example `2019-10-17T18:50:00Z
    `
     */
    "SwitchTime": string;
    /**
     * 是否立即进入执行调度。
     * - 0：否（默认）
     * - 1：是
     * >
     * > 值为 0 时 switchTime 起作用；值为 1 时 switchTime 不起作用，任务开始时间将设置为当前时间，切换时间根据新的开始时间自动计算。
     * 立即进入执行调度并不是立即切换，而是立即进入准备中状态，准备完成后，进行切换。您可以调用 DescribeActiveOperationTasks，通过返回参数 PrepareInterval 的值来获取准备时间。
     * @example `0
    `
     */
    "ImmediateStart"?: number;
}
