export interface DescribeDcdnL2VipsRequest {
    /**
     * 可指定单个域名，指定单个域名的情况下，仅查询该域名关联的白名单回源节点的回源IP段。若不指定域名，则查询所有白名单回源节点的回源IP段。
     * @example `example.com`
     */
    "DomainName"?: string;
}
