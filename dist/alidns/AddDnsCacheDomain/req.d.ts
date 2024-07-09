export interface AddDnsCacheDomainRequest {
    /**
     * 语言
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 域名名称
     * @example `dns.example.com`
     */
    "DomainName": string;
    /**
     * 权威代理域名实例ID
     * @example `dns-cn-j6666`
     */
    "InstanceId": string;
    /**
     * 回源缓存数据TTL(最小值)，取值范围为30 - 86400
     * @example `30`
     */
    "CacheTtlMin": number;
    /**
     * 回源缓存数据TTL(最大值)，取值范围为30 - 86400
     * @example `86400`
     */
    "CacheTtlMax": number;
    /**
     * 回源协议，TCP、UDP。默认值为UDP
     * @example `UDP`
     */
    "SourceProtocol": string;
    /**
     * 源站是否支持edns。NOT_SUPPORT：不支持，SUPPORT：支持
     * @example `SUPPORT`
     */
    "SourceEdns": string;
    /**
     * 备注
     * @example `test`
     */
    "Remark"?: string;
    /**
     * 源站DNS服务器列表，最多支持10条记录
     */
    "SourceDnsServer": {
        /**
         * 源站服务器的域名或IP地址
         * @example `192.0.0.0`
         */
        Host: string;
        /**
         * 源站DNS服务器端口
         * @example `53`
         */
        Port: string;
    }[];
}
