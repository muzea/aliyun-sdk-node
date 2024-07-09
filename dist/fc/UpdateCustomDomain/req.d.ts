export interface UpdateCustomDomainRequest {
    /**
     * 域名
     * @example `foo.bar.com`
     */
    "domainName": string;
    /**
     * 自定义域名信息
     */
    "body": any;
}
