export interface UpdateGatewayRouteRetryRequest {
    /**
     * 关联记录ID。
     * @example `508`
     */
    "Id": number;
    /**
     * 网关ID。
     * @example `501`
     */
    "GatewayId"?: number;
    /**
     * 重试。
     */
    "RetryJSON": {
        /**
         * 重试次数
         * @example `2`
         */
        Attempts: number;
        /**
         * 重试触发条件
         */
        RetryOn: string[];
        /**
         * HTTP状态码。
         */
        HttpCodes: string[];
        /**
         * 开启状态
         * @example `off`
         */
        Status: string;
    };
    /**
     * 网关唯一标识ID。
     * @example `gw-3f97e2989c344f35ab3fd62b19f1d10a`
     */
    "GatewayUniqueId": string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
