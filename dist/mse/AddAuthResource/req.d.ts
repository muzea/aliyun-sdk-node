export interface AddAuthResourceRequest {
    /**
     * 授权ID。
     * @example `13`
     */
    "AuthId"?: number;
    /**
     * 域名ID。
     * @example `128`
     */
    "DomainId"?: number;
    /**
     * 路径。
     * @example `/abc`
     */
    "Path"?: string;
    /**
     * 网关唯一标识ID。
     * @example `gw-86575c0bc9f04ecfbacb92b8e392****`
     */
    "GatewayUniqueId": string;
    /**
     * 匹配类型。
     * - 精确匹配：EQUAL
     * - 前缀匹配：PRE
     * - 正则匹配：ERGULAR
     * @example `PRE`
     */
    "MatchType"?: string;
    /**
     * 是否忽略大小写。（默认为true）
     * @example `true`
     */
    "IgnoreCase"?: boolean;
    /**
     * 鉴权资源头列表
     */
    "AuthResourceHeaderList"?: {
        /**
         * HTTP头参数。
         * @example `Access-Control-Allow-Origin`
         */
        HeaderKey: string;
        /**
         * Header匹配方式。
         * @example `EQUAL`
         */
        HeaderMethod: string;
        /**
         * HTTP头参数的取值。
         * @example `*`
         */
        HeaderValue: string;
    }[];
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
