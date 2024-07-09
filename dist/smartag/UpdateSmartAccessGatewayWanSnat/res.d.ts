export interface UpdateSmartAccessGatewayWanSnatResponse {
    /**
     * 响应码。200标识查询任务成功。
     * @example `200`
     */
    Code: string;
    /**
     * 修改是否成功。取值：
     *
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `FAD1E4CB-52A5-520B-BE14-A78F491FBD9C`
     */
    RequestId: string;
    /**
     * 响应消息。Successful标识查询任务成功。
     * @example `Successful`
     */
    Message: string;
}
