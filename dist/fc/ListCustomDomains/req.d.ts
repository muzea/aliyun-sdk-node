export interface ListCustomDomainsRequest {
    /**
     * 域名前缀
     * @example `foo`
     */
    "prefix"?: string;
    /**
     * 分页起始标记
     * @example `MTIzNCNhYmM=`
     */
    "nextToken"?: string;
    /**
     * 返回的自定义域名数量
     * @example `10`
     */
    "limit"?: number;
}
