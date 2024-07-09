export interface VerifyVodDomainOwnerRequest {
    /**
     * 校验的域名。仅支持单域名校验。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 域名归属权验证方式，取值：
     * - **dnsCheck**：DNS解析验证。
     * - **fileCheck**：文件验证。
     * @example `dnsCheck`
     */
    "VerifyType": string;
}
