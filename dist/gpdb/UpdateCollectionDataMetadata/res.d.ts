export interface UpdateCollectionDataMetadataResponse {
    /**
     * 请求ID。
     * @example `ABB39CC3-4488-4857-905D-2E4A051D0521`
     */
    RequestId: string;
    /**
     * 请求失败时的详细信息。
     * @example `failed to connect database, detailMsg: getConnection fail::SQL State: 28P01, Error Code: 0, Error Message: FATAL: password`
     */
    Message: string;
    /**
     * 状态，取值如下：
     * - **success**：成功。
     * - **fail**：失败。
     * @example `success`
     */
    Status: string;
    /**
     * 生效的条目。
     * @example `10`
     */
    AppliedRows: number;
}
