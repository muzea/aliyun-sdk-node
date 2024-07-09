export interface CreateGatewayRequest {
    /**
     * 网关名称。
     * @example `DG网关`
     */
    "GatewayName": string;
    /**
     * 描述创建该网关的用途等。
     * @example `测试DG网关`
     */
    "GatewayDesc"?: string;
    /**
     * 新建的网关所在地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
