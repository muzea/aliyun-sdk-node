export interface ListGatewayIntranetLinkedVpcRequest {
    /**
     * 私有网关所在地域。
     * @example `cn-hangzhou`
     */
    "ClusterId"?: string;
    /**
     * 私有网关ID。如何获取私有网关ID，请参见[ListResources](~~412133~~)接口返回结果中的private_gateway_id字段。
     * @example `gw-1uhcqmsc7x22******`
     */
    "GatewayId"?: string;
}
