export interface ModifyActiveOperationTasksResponse {
    /**
     * 请求ID。
     * @example `8C9CC90A-9532-4752-B59F-580112C5A45B`
     */
    RequestId: string;
    /**
     * 运维事件ID列表， 以英文逗号隔开。
     * @example `1`
     */
    Ids: string;
}
