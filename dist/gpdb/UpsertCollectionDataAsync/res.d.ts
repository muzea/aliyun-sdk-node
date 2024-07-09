export interface UpsertCollectionDataAsyncResponse {
    /**
     * 请求ID。
     * @example `ABB39CC3-4488-4857-905D-2E4A051D0521`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * API执行状态，取值如下：
     * - **success**：执行成功。
     * - **fail**：执行失败。
     * @example `success`
     */
    Status: string;
    /**
     * 任务ID，用于后续查看任务状态或者取消任务。
     * @example `231460f8-75dc-405e-a669-0c5204887e91`
     */
    JobId: string;
}
