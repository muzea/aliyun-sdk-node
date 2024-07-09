export interface UpdateGatewayServiceTrafficPolicyResponse {
    /**
     * 请求ID
     * @example `11A61389-F896-5231-A4FB-074D9E2E0055`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 返回码。
     * @example `200`
     */
    Code: number;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据概览。
     * @example `{'GatewayUniqueId': 'gw-2b8ebd75dc554c37a4279ba9917379f2', 'Id': 417, 'GatewayTrafficPolicy': {'LoadBalancerSettings': {'LoadbalancerType': 'ROUND_ROBIN'}, 'TlsSetting': {'TlsMode': 'DISABLE'}}}`
     */
    Data: any;
}
