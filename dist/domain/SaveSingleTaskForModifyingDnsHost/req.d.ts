export interface SaveSingleTaskForModifyingDnsHostRequest {
    /**
     * 域名实例编号，可通过查询域名列表接口（QueryDomainList）获得。
     *
     * @example `S123456789`
     */
    "InstanceId": string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * DNS名称。
     * @example `dns1`
     */
    "DnsName": string;
    /**
     * 用户IP。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * IP地址列表。
     * @example `218.xx.xx.236`
     */
    "Ip": string[];
}
