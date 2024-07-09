export interface UpdateSmartAccessGatewayPortRouteProtocolResponse {
    /**
     * 响应码。200标识查询任务成功。
     * @example `200`
     */
    Code: string;
    /**
     * 修改是否成功。取值：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `A7DB1241-17CB-5457-83A9-638162A514C6`
     */
    RequestId: string;
    /**
     * 响应消息。Successful标识查询任务成功。
     * @example `Successful`
     */
    Message: string;
}
