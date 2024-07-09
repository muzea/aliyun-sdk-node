export interface ListGatewayAuthConsumerRequest {
    /**
     * 网关唯一标识ID。
     * @example `gw-0fe488252dc44d55a9dd57875193****`
     */
    "GatewayUniqueId": string;
    /**
     * 鉴权消费者名称。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 鉴权类型：
     * - JWT
     * @example `JWT`
     */
    "Type"?: string;
    /**
     * 鉴权消费者状态：
     * - true：启用
     * - false：停用
     * @example `true`
     */
    "ConsumerStatus"?: boolean;
    /**
     * 当前页数值。
     * @example `1`
     */
    "PageNum": string;
    /**
     * 当前页的大小。
     * @example `10`
     */
    "PageSize": string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
