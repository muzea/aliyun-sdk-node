export interface DeleteDomainCertificateRequest {
    /**
     * API分组 ID，系统生成，全局唯一
     * @example `927d50c0f2e54b359919923d908bb015`
     */
    "GroupId": string;
    /**
     * 自定义域名
     * @example `api.demo.com`
     */
    "DomainName": string;
    /**
     * SSL证书ID，系统自动生成的SSL证书的唯一标识
     * @example `c621720d1eb34843822b7fb5148e6926`
     */
    "CertificateId": string;
}
