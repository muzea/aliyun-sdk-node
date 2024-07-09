export interface PauseInstanceResponse {
    /**
     * 请求ID。
     * @example `34b32a0a-08ef-4a87-b6be-cdd9********`
     */
    RequestId: string;
    /**
     * API执行状态，取值如下：
     * - **false**：执行失败。
     * - **true**：执行成功。
     * @example `true`
     */
    Status: boolean;
    /**
     * 错误信息。
     * 只会在**Status**参数返回值为**false**时返回该参数。
     * @example `*******`
     */
    ErrorMessage: string;
    /**
     * 实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    DBInstanceId: string;
}
