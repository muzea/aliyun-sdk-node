export interface UpdateGatewayServiceTrafficPolicyRequest {
    /**
     * 网关ID。
     * @example `429`
     */
    "GatewayId"?: number;
    /**
     * 服务ID。
     * @example `411`
     */
    "ServiceId"?: number;
    /**
     * 网关流量控制策略。
     */
    "GatewayTrafficPolicy": any;
    /**
     * 网关唯一标识ID。
     * @example `gw-75c5036c083e4f89ba8ef9fafff2e902`
     */
    "GatewayUniqueId": string;
    /**
     * 返回值的语言，取值：
     * - **zh-CN**：中文，默认值。
     * - **en-US**：英文。
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
