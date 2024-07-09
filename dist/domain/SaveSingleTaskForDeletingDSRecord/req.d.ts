export interface SaveSingleTaskForDeletingDSRecordRequest {
    /**
     * 域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文；
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 关键标签，用于标识DNSSEC记录，为小于65536的整数值。
     * @example `1`
     */
    "KeyTag": number;
    /**
     * 用户IP。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
}
