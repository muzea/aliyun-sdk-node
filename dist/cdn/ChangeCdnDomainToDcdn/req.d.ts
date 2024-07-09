export interface ChangeCdnDomainToDcdnRequest {
    /**
     * 待迁移域名，只支持单个查询。
     * @example `example.com
    `
     */
    "DomainName": string;
    /**
     * 操作类型，仅支持preCheck，只进行预校验，返回校验结果。
     * 检验没有问题，使用enforce执行转移。
     * @example `preCheck`
     */
    "Operation"?: string;
}
