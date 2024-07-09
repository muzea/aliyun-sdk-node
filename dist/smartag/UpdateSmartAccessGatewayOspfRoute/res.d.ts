export interface UpdateSmartAccessGatewayOspfRouteResponse {
    /**
     * 响应码。200标识查询任务成功。
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `9CF52A9E-FC3C-5CC8-B5EB-90DC03E9A531`
     */
    RequestId: string;
    /**
     * 响应消息。
     * @example `successful`
     */
    Message: string;
}
