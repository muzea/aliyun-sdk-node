export interface DeleteGatewayAuthConsumerResourceRequest {
    /**
     * 网关唯一标识ID。
     * @example `gw-ubuwqygbq4783gqb2y3f87q****
    `
     */
    "GatewayUniqueId": string;
    /**
     * 网关鉴权消费者ID。
     * @example `2`
     */
    "ConsumerId": number;
    /**
     * 用户删除指定的授权ID列表。
     * @example `1,2,3,4`
     */
    "IdList": string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
