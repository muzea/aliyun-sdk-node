export interface ModifyActiveOperationTaskRequest {
    /**
     * 运维任务ID，多个ID间使用英文逗号（,）分隔。
     * > 您可以调用[DescribeActiveOperationTask](~~197387~~)获取运维任务ID。
     * @example `11111,22222`
     */
    "Ids": string;
    /**
     * 要设置的计划切换时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > 不能晚于最晚操作时间，您可以调用[DescribeActiveOperationTask](~~197387~~)，通过返回参数**Deadline**的值来获取最晚操作时间。
     * @example `2019-10-17T18:50:00Z`
     */
    "SwitchTime": string;
}
