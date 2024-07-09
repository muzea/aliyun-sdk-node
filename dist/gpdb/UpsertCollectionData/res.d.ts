export interface UpsertCollectionDataResponse {
    /**
     * 请求ID。
     * @example `ABB39CC3-4488-4857-905D-2E4A051D0521`
     */
    RequestId: string;
    /**
     * 信息
     * @example `success`
     */
    Message: string;
    /**
     * 上传状态，取值说明：
     * - **success**：成功
     * - **fail**：失败
     * @example `success`
     */
    Status: string;
}
