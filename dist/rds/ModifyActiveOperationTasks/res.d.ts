export interface ModifyActiveOperationTasksResponse {
    /**
     * 运维任务ID，多个ID间使用英文逗号（,）分隔。
     * @example `11111,22222`
     */
    Ids: string;
    /**
     * 请求ID。
     * @example `E9ADB6BE-1598-57FC-B86D-D7F4C69B****`
     */
    RequestId: string;
}
