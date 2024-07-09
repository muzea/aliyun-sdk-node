export interface UpdateSmartAccessGatewayGlobalRouteProtocolResponse {
    /**
     * 响应码。200标识查询任务成功。
     * @example `200`
     */
    Code: string;
    /**
     * 修改是否成功。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `407E391C-7FB6-5552-AF39-DBB5CB062E3C`
     */
    RequestId: string;
    /**
     * 响应消息。Successful标识查询任务成功。
     * @example `Successful`
     */
    Message: string;
}
