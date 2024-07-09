export interface DeleteGatewayIntranetLinkedVpcResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `Successfully delete intranet linked vpc for gateway`
     */
    Message: string;
    /**
     * 私有网关ID。
     * @example `gw-1uhcqmsc7x22******`
     */
    GatewayId: string;
}
