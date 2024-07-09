export interface ModifyDBInstanceConfigResponse {
    /**
     * 请求ID。
     * @example `34B32A0A-08EF-4A87-B6BE-CDD9F56FC3AD`
     */
    RequestId: string;
    /**
     * 错误信息，仅调用失败时返回。
     * @example `'error message'`
     */
    ErrorMessage: string;
    /**
     * 实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    DbInstanceId: string;
    /**
     * 修改状态，返回信息如下：
     * - **0**：修改失败。
     * - **1**：修改成功。
     * @example `1`
     */
    Status: boolean;
}
