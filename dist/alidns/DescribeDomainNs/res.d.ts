export interface DescribeDomainNsResponse {
    /**
     * 是否全部为阿里云解析DNS。
     * @example `true`
     */
    AllAliDns: boolean;
    /**
     * 唯一请求识别码。
     * @example `16C7DC7A-2FA7-4D14-8B12-88A2BB6373DB`
     */
    RequestId: string;
    ExpectDnsServers: {
        /**
         * 云解析DNS分配的域名DNS服务器名称。
         */
        ExpectDnsServer: string[];
    };
    DnsServers: {
        /**
         * 域名当前设置的DNS服务器名称。
         */
        DnsServer: string[];
    };
    /**
     * 是否包含阿里云解析DNS。
     * @example `true`
     */
    IncludeAliDns: boolean;
    /**
     * 检测失败原因编码。
     * @example `DnsCheck.Failed`
     */
    DetectFailedReasonCode: string;
}
