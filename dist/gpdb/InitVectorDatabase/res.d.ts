export interface InitVectorDatabaseResponse {
    /**
     * 请求ID。
     * @example `ABB39CC3-4488-4857-905D-2E4A051D0521`
     */
    RequestId: string;
    /**
     * 失败信息详情。
     * @example `failed to connect database, detailMsg: getConnection fail::SQL State: 28P01, Error Code: 0, Error Message: FATAL: password`
     */
    Message: string;
    /**
     * API执行状态，取值如下：
     * - **success**：执行成功。
     * - **fail**：执行失败。
     * @example `success`
     */
    Status: string;
}
