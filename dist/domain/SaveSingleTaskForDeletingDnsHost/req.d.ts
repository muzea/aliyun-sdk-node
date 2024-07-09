export interface SaveSingleTaskForDeletingDnsHostRequest {
    /**
     * 实例ID。
     * @example `S2019270W570xxxx`
     */
    "InstanceId": string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文；
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
}
