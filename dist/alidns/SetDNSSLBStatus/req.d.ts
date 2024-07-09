export interface SetDNSSLBStatusRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 用户IP。
     * @example `192.0.2.0`
     */
    "UserClientIp"?: string;
    /**
     * 需要权重配置的子域名，其中example.com为错误参数，请使用@.example.com
     * @example `www.example.com`
     */
    "SubDomain": string;
    /**
     * 是否开启权重配置。取值：
     * - **true**（默认）：开启
     * - **false**：关闭
     * @example `true`
     */
    "Open"?: boolean;
    /**
     * 域名名称。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 记录类型，取值范围：A、AAAA，默认为A。
     * @example `A`
     */
    "Type"?: string;
    /**
     * 解析线路：例如默认、电信、移动等
     * @example `telecom`
     */
    "Line"?: string;
}
