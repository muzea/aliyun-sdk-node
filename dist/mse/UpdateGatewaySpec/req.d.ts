export interface UpdateGatewaySpecRequest {
    /**
     * 网关ID。
     * @example `gw-c70622ff52fe49beb29bea9a6f52****`
     */
    "GatewayUniqueId": string;
    /**
     * 节点规格。
     * @example `MSE_GTW_4_8_200_c`
     */
    "Spec": string;
    /**
     * 节点数量。
     * @example `3`
     */
    "Replica": number;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
