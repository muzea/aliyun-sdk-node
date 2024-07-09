export interface ModifyActiveOperationTasksResponse {
    /**
     * 运维任务ID，多个ID间使用英文逗号（,）分隔。
     * @example `11111,22222`
     */
    Ids: string;
    /**
     * 请求ID。
     * @example `CAAE9DDA-65FD-584C-A378-F1F24676****`
     */
    RequestId: string;
}
