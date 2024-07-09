export interface CreateDomainResponse {
    /**
     * WAF为域名分配的CNAME地址。
     * > 仅当域名使用CNAME接入方式（请求参数**AccessType**取值为**waf-cloud-dns**）时，返回该参数。
     * @example `mmspx7qhfvnfzggheh1g2wnbhog66vcv.****.com`
     */
    Cname: string;
    /**
     * 本次请求的ID。
     * @example `D7861F61-5B61-46CE-A47C-6B19****5EB0`
     */
    RequestId: string;
}
