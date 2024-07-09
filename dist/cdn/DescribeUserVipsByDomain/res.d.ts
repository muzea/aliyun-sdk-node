export interface DescribeUserVipsByDomainResponse {
    /**
     * 域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 请求ID。
     * @example `820E7900-5CA9-4AEF-B0DD-20ED5F64BE55`
     */
    RequestId: string;
    Vips: {
        /**
         * VIP地址列表。
         */
        Vip: string[];
    };
}
