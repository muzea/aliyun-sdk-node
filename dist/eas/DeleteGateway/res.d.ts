export interface DeleteGatewayResponse {
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
     * 请求返回消息。
     * @example `Gateway gw-w8cy1dlhughc**** is deleted`
     */
    Message: string;
}
