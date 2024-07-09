export interface ModifyActiveOperationTasksResponse {
    /**
     * 运维任务 ID，多个 ID 间使用英文逗号（,）分隔。
     * @example `11111,22222`
     */
    Ids: string;
    /**
     * 请求ID。
     * @example `E278D833-BB4B-50BF-8646-7BC1BAB2373B`
     */
    RequestId: string;
}
