export interface FetchAccessTokenRequest {
    /**
     * 客户端扩展 JSON 参数，使用 Base64 编码 JSON 字符串后的值
     * @example `eyJhdHRhY2htZW50IjoicGxhdGZvcm0iLCJ1c2VyVmVyaWZpY2F0aW9uIjoicmVxdWlyZWQifQ==`
     */
    "MobileExtendParamsJson": string;
    /**
     * 使用应用秘钥签名 MobileExtendParamsJson 后的值，签名方式为 HmacSHA256 + Hex
     * @example `a3984bc27776bb6f65f82276f75d6a12d56e1b41e98ed6975d852b14309b8a20`
     */
    "MobileExtendParamsJsonSign": string;
    /**
     * 服务端扩展 JSON 参数，使用 Base64 编码 JSON 字符串后的值
     * @example `eyJhdHRhY2htZW50IjoicGxhdGZvcm0iLCJ1c2VyVmVyaWZpY2F0aW9uIjoicmVxdWlyZWQifQ==`
     */
    "ServerExtendParamsJson"?: string;
    /**
     * 应用外部Id
     * @example `secAuthApp`
     */
    "ApplicationExternalId": string;
    /**
     * 客户端ip
     * @example `124.127.214.94`
     */
    "XClientIp"?: string;
    /**
     * 用户标志
     * @example `6ba923abf6749536b7fd31c6a31360fboOFZQ8WbzmG`
     */
    "UserId"?: string;
}
