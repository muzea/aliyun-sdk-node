export interface ChangeCdnDomainToDcdnResponse {
    /**
     * 请求ID。
     * @example `E6172599-7DA7-5471-9D22-359A4E0C9B86`
     */
    RequestId: string;
    /**
     * 迁移说明。
     * @example `{
            "目标账号域名配额达到上限": true,
            "域名开启节点架构2.0": true,
            "融合渠道客户的域名禁止迁移": true,
            "受保护客户的域名禁止迁移": true,
            "内部客户的域名禁止迁移": true,
            "被保护的域名禁止迁移": true,
            "通过TopDomain接入的域名禁止迁移": true
        }`
     */
    Content: any;
}
