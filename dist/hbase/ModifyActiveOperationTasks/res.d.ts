export interface ModifyActiveOperationTasksResponse {
    /**
     * 运维任务ID，多个ID间使用英文逗号（,）分隔。
     * @example `1111,2222`
     */
    Ids: string;
    /**
     * 请求ID。
     * @example `8C9CC46A-9532-4752-B59F-580112C5A45B`
     */
    RequestId: string;
}
