export interface CancelActiveOperationTasksResponse {
    /**
     * 请求ID。
     * @example `AE4F6C34-065F-45AA-B5DC-4B8D816F6305`
     */
    RequestId: string;
    /**
     * 事件ID集合， 以英文逗号隔开。
     * @example `111,1223`
     */
    Ids: string;
}
