export interface DeleteGatewayAuthConsumerRequest {
    /**
     * 网关唯一标识ID。
     * @example `gw-c70622ff52fe49beb29bea9a6f52****`
     */
    "GatewayUniqueId": string;
    /**
     * 网关鉴权消费者ID。
     * @example `33ff74b6-d21e-4f9b-91a8-bc1ea4ef****`
     */
    "Id": number;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
