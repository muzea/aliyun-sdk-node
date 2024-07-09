export interface SaveSingleTaskForCreatingDnsHostRequest {
    /**
     * 域名实例编号，可通过查询域名列表接口[QueryDomainList](~~67712~~)获得。
     *
     * @example `S1234567890`
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
     * 用户IP，可以设置为**127.0.0.1**。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * IP地址列表，最多可填写13个，多个IP时使用**list**方式传入。
     * @example `218.xx.xx.236`
     */
    "Ip": string[];
}
