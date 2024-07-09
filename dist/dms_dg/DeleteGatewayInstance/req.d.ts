export interface DeleteGatewayInstanceRequest {
    /**
     * 网关ID。
     * @example `dg-nmz841r7b681****`
     */
    "GatewayId": string;
    /**
     * 网关节点ID。
     * @example `dg-node-QeH6VfT8GRnPrYWX****`
     */
    "GatewayInstanceId": string;
    /**
     * 网关所在地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
