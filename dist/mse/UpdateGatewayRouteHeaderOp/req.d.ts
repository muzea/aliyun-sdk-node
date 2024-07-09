export interface UpdateGatewayRouteHeaderOpRequest {
    /**
     * 记录ID。
     * @example `411`
     */
    "Id": number;
    /**
     * 网关ID。
     * @example `324`
     */
    "GatewayId"?: number;
    /**
     * 用户header设置描述。
     * @example `{"status":"on","headerOpItems":[{"directionType":"Request","opType":"Update","key":"hosts","value":"test.com"}]}`
     */
    "HeaderOpJSON"?: string;
    /**
     * 网关唯一标识ID。
     * @example `gw-6bdc977deda44bf589c49d063b4c2d1d`
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
