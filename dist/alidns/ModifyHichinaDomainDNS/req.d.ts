export interface ModifyHichinaDomainDNSRequest {
    /**
     * 用户语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 用户端IP。
     * @example `192.0.2.0`
     */
    "UserClientIp"?: string;
    /**
     * 域名名称。
     * @example `dns-example.top`
     */
    "DomainName": string;
}
