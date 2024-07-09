export interface ModifyGatewayRequest {
    /**
     * 网关名称。
     * @example `测试`
     */
    "GatewayName": string;
    /**
     * 网关描述。
     * @example `测试DG网关`
     */
    "GatewayDesc"?: string;
    /**
     * 网关ID。
     * @example `dg-nmz841r7b681****`
     */
    "GatewayId": string;
}
