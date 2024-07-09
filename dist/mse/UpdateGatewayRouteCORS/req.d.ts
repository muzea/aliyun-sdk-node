export interface UpdateGatewayRouteCORSRequest {
    /**
     * 关联记录ID。
     * @example `55`
     */
    "Id": number;
    /**
     * 网关ID。
     * @example `85`
     */
    "GatewayId"?: number;
    /**
     * 跨域信息。
     */
    "CorsJSON"?: {
        /**
         * 开启状态。
         * @example `off`
         */
        Status: string;
        /**
         * 允许的域。
         * @example `https://api.aliyun-inc.com/`
         */
        AllowOrigins: string;
        /**
         * 允许的方法。
         * @example `GET,POST`
         */
        AllowMethods: string;
        /**
         * 允许的Header。
         * @example `content-type`
         */
        AllowHeaders: string;
        /**
         * 允许的响应头部。
         * @example `*`
         */
        ExposeHeaders: string;
        /**
         * 时间单位。
         * @example `h`
         */
        TimeUnit: string;
        /**
         * 时间数。
         * @example `24`
         */
        UnitNum: number;
        /**
         * 允许携带凭证。
         * @example `true`
         */
        AllowCredentials: boolean;
    };
    /**
     * 网关唯一标识ID。
     * @example `gw-f70a6ddf2f0941a2bb997b2d16028f37`
     */
    "GatewayUniqueId": string;
    /**
     * 参照国际标准 [RFC7231](https://tools.ietf.org/html/rfc7231)，后端服务需要按用户语言要求返回结果
     * * 默认值：无
     * * 中文：zh-CN
     * * 英文：en-US
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
