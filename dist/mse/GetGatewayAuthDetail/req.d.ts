export interface GetGatewayAuthDetailRequest {
    /**
     * 鉴权ID
     * @example `1100`
     */
    "Id"?: number;
    /**
     * 网关ID（和网关唯一ID二选一）
     * @example `2274`
     */
    "GatewayId"?: number;
    /**
     * 网关唯一ID（和网关ID二选一，网关唯一ID不为空时优先使用网关唯一ID查询）
     * @example `gw-6f0dbd108a0249d2b675b3ef50b*****`
     */
    "GatewayUniqueId"?: string;
    /**
     * 返回结果显示的语言。取值：
     * * zh（默认值）：中文
     * * en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
