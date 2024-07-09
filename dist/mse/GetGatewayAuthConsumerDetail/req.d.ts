export interface GetGatewayAuthConsumerDetailRequest {
    /**
     * 网关唯一标识ID。
     * @example `gw-1a4ab101d5924b6f92c5ec98a84*****`
     */
    "GatewayUniqueId": string;
    /**
     * 鉴权消费者ID。
     * @example `120`
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
