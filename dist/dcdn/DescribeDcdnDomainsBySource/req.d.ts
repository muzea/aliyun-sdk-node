export interface DescribeDcdnDomainsBySourceRequest {
    /**
     * 源站列表，多个用半角逗号（,）分隔，最多20个，不支持模糊匹配。
     * @example `example.org`
     */
    "Sources": string;
}
