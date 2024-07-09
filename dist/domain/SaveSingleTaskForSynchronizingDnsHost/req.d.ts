export interface SaveSingleTaskForSynchronizingDnsHostRequest {
    /**
     * 域名实例编号，可通过查询域名列表接口[QueryDomainList](~~67712~~)获得。
     * @example `ST2017120814571100001303`
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
     * 用户IP。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
}
