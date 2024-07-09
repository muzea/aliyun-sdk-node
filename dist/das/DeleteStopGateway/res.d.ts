export interface DeleteStopGatewayResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回消息。
     * > 请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * DBGateway元数据删除结果：
     * - **0**：执行成功。
     * - **-1**：系统错误。
     * - **-2**：DBGateway不存在。
     * - **-3**：DBGateway未停止，无法删除元数据。
     * - **-4**：删除元数据信息失败。
     * @example `0`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `FC6C0929-29E1-59FD-8DFE-70D9D41E****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
}
