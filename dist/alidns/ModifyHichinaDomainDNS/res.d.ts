export interface ModifyHichinaDomainDNSResponse {
    /**
     * 唯一请求识别码。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    NewDnsServers: {
        /**
         * 域名修改后的DNS服务器列表。
         */
        DnsServer: string[];
    };
    OriginalDnsServers: {
        /**
         * 域名修改前的DNS服务器列表。
         */
        DnsServer: string[];
    };
}
