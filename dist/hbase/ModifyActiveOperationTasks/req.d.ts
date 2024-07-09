export interface ModifyActiveOperationTasksRequest {
    /**
     * 运维任务ID，多个ID间使用英文逗号（,）分隔。
     * > 您可以调用[DescribeActiveOperationTasks](~~414458~~)获取运维任务ID。
     * @example `1111,2222`
     */
    "Ids": string;
    /**
     * 要设置的计划切换时间，格式为_yyyy-MM-ddTHH:mm:ssZ_（UTC时间）。
     * > 不能晚于最晚操作时间，您可以调用[DescribeActiveOperationTasks](~~414458~~)，通过返回参数**Deadline**的值来获取最晚操作时间。
     * @example `2022-02-17T18:50:00Z`
     */
    "SwitchTime": string;
    /**
     * 是否立即执行运维任务，取值：
     * - **1**：立即执行。
     * - **0**：指定时间执行。
     * @example `1`
     */
    "ImmediateStart"?: number;
}
