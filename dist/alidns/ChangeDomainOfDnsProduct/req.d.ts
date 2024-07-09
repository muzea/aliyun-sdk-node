export interface ChangeDomainOfDnsProductRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 用户端IP。
     * @example `1.1.XX.XX`
     */
    "UserClientIp"?: string;
    /**
     * 云解析产品ID。
     * @example `i-7sb`
     */
    "InstanceId": string;
    /**
     * 目标绑定域名，如不填写，则为解绑。
     * @example `dns-example.top`
     */
    "NewDomain"?: string;
    /**
     * 是否强制绑定。
     * @example `false`
     */
    "Force"?: boolean;
}
