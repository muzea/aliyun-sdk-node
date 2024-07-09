export interface DescribeDcdnL2VipsResponse {
    /**
     * 加速域名信息。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 请求ID。
     * @example `820E7900-5CA9-4AEF-B0DD-20ED5F64BE55`
     */
    RequestId: string;
    /**
     * Vip列表。
     */
    Vips: string[];
}
