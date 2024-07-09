export interface SaveSingleTaskForAssociatingEnsRequest {
    /**
     * 用户IP。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 域名。
     * @example `test.luxe`
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
     * Ens地址。
     * @example `0x1234567890123456789012345678901234567890`
     */
    "Address": string;
}
