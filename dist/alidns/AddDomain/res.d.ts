export interface AddDomainResponse {
    /**
     * 域名分组名称。
     * @example `MyGroup`
     */
    GroupName: string;
    /**
     * 域名ID。
     * @example `00efd71a-770e-4255-b54e-6fe5659baffe`
     */
    DomainId: string;
    /**
     * 请求ID。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    /**
     * 域名名称。
     * @example `dns-example.top`
     */
    DomainName: string;
    /**
     * 只针对中文域名返回punycode码。
     * @example `xn--fsq270a.com`
     */
    PunyCode: string;
    DnsServers: {
        /**
         * 域名在解析系统中的DNS列表。
         */
        DnsServer: string[];
    };
    /**
     * 域名分组ID。
     * @example `2223`
     */
    GroupId: string;
}
