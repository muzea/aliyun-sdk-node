export interface CancelActiveOperationTasksRequest {
    /**
     * 运维任务ID，多个ID间使用英文逗号（,）分隔。
     * > 您可以调用[DescribeActiveOperationTasks](~~414458~~)获取运维任务ID。
     * @example `11111,22222`
     */
    "Ids": string;
}
