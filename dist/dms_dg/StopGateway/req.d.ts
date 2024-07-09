export interface StopGatewayRequest {
    /**
     * 网关ID。
     * @example `dg-nmz841r7b681****`
     */
    "GatewayId": string;
    /**
     * 网关节点实例ID。
     * @example `dg-node-hvsGB7qVCaaW****-v-0`
     */
    "GatewayInstanceId"?: string;
}
