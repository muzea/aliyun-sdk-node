export interface VerifyVsDomainOwnerRequest {
    /**
     * 视图计算域名名称
     * @example `example.aliyundoc.com`
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
