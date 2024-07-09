export interface SaveBatchTaskForModifyingDomainDnsRequest {
    /**
     * 用户IP，可以设置为**127.0.0.1**。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文；
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 是否修改为阿里云DNS。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `false`
     */
    "AliyunDns": boolean;
    /**
     * 域名。
     * @example `example.com`
     */
    "DomainName": string[];
    /**
     * DNS列表，**AliyunDns**值为**false**时此项必填。
     * @example `ns1.test.com`
     */
    "DomainNameServer"?: string[];
}
