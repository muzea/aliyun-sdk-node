export interface DescribeDomainListResponse {
    /**
     * 查询到的域名的数量。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 本次请求的ID。
     * @example `592E866F-6C05-4E7C-81DE-B4D8E86B91EF`
     */
    RequestId: string;
    /**
     * 查询到的域名列表。
     */
    DomainNames: string[];
}
