export interface CreateGatewayResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 私有网关ID。
     * @example `gw-1uhcqmsc7x22******`
     */
    GatewayId: string;
    /**
     * 私有网关所在地域。
     * @example `cn-wulanchabu`
     */
    ClusterId: string;
    /**
     * 请求返回信息。
     * @example `Successfully create gateway for user-managed resource`
     */
    Message: string;
}
