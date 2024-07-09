export interface UpdateGatewayAuthConsumerStatusRequest {
    /**
     * 网关唯一ID。
     * @example `gw-685f661467b54f48b7b7a76605ce****`
     */
    "GatewayUniqueId": string;
    /**
     * 鉴权消费者ID。
     * @example `1`
     */
    "Id": number;
    /**
     * 鉴权消费者状态：
     * - true：启用
     * - false：停用
     * @example `true`
     */
    "ConsumerStatus": boolean;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
