export interface UpdateGatewayAuthConsumerResourceStatusRequest {
    /**
     * 网关唯一标识ID。
     * @example `gw-2a99625886d54722be94d92e9a69****`
     */
    "GatewayUniqueId": string;
    /**
     * 网关鉴权消费者ID。
     * @example `2`
     */
    "ConsumerId": number;
    /**
     * 用户更新指定的授权ID列表。
     * @example `1,2,3,4`
     */
    "IdList": string;
    /**
     * 资源状态：
     * - true：启用
     * - false：停用
     * @example `true`
     */
    "ResourceStatus": boolean;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
