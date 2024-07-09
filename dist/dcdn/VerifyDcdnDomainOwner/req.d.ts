export interface VerifyDcdnDomainOwnerRequest {
    /**
     * 待校验的域名，只支持传入单个域名。
     * @example `**example**.com`
     */
    "DomainName": string;
    /**
     * 校验方式，取值：
     * - **dnsCheck**：DNS验证。
     * - **fileCheck**：文件验证。
     * @example `dnsCheck`
     */
    "VerifyType": string;
}
