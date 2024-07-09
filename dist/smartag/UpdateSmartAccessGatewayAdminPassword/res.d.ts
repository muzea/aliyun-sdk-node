export interface UpdateSmartAccessGatewayAdminPasswordResponse {
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
     * @example `EC8487CD-9338-5FCF-896A-B6D1BB1646A7`
     */
    RequestId: string;
    /**
     * 响应消息。Successful标识查询任务成功。
     * @example `Successful`
     */
    Message: string;
}
