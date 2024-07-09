export interface DescribeL2VipsByDomainResponse {
    /**
     * 域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    Vips: {
        /**
         * VIP列表。
         */
        Vip: string[];
    };
}
