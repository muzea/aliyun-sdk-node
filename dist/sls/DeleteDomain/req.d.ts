export interface DeleteDomainRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * 要删除的域名。
     * @example `example.com`
     */
    "domainName": string;
}
