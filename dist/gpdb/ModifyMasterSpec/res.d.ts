export interface ModifyMasterSpecResponse {
    /**
     * 请求ID。
     * @example `ABB39CC3-4488-4857-905D-2E4A051D0521`
     */
    RequestId: string;
    /**
     * 错误信息。
     * 只会在API执行失败时返回该参数。
     * @example `******`
     */
    ErrorMessage: string;
    /**
     * 实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    DbInstanceId: string;
    /**
     * API执行状态，取值如下：
     * - **false**：执行失败。
     * - **true**：执行成功。
     * @example `true`
     */
    Status: boolean;
}
