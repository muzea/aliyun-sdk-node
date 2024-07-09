export interface SetDomainDnssecStatusRequest {
    /**
     * 部分返回参数语言。默认值：en。取值范围：en、zh、ja。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * Dnssec状态：
     * - ON 开启
     * - OFF 关闭
     * @example `ON`
     */
    "Status": string;
}
