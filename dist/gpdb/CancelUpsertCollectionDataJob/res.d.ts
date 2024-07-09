export interface CancelUpsertCollectionDataJobResponse {
    /**
     * 请求ID。
     * @example `ABB39CC3-4488-4857-905D-2E4A051D0521`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `Successful`
     */
    Message: string;
    /**
     * 取消调用的状态，取值说明：
     * - **success**：成功
     * - **fail**：失败
     * @example `success`
     */
    Status: string;
}
