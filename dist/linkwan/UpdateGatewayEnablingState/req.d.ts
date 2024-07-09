export interface UpdateGatewayEnablingStateRequest {
    "IotInstanceId"?: string;
    /**
     * 网关唯一标识。
     * @example `0000000000000000`
     */
    "GwEui": string;
    /**
     * 是否开启网关。
     * - **true**：表示启用该网关。
     * - **false**：表示关闭该网关。
     * @example `true`
     */
    "Enabled": boolean;
}
