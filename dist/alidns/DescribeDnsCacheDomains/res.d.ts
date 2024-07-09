export interface DescribeDnsCacheDomainsResponse {
    /**
     * 本次获取的域名列表。
     */
    Domains: {
        /**
         * 回源协议，TCP、UDP。默认值为UDP
         * @example `UDP`
         */
        SourceProtocol: string;
        /**
         * 最后更新时间
         * @example `2023-05-22T03:40Z`
         */
        UpdateTime: string;
        /**
         * 备注
         * @example `remark`
         */
        Remark: string;
        /**
         * 实例过期时间
         * @example `2022-12-02T16:00Z`
         */
        ExpireTime: string;
        /**
         * 添加时间
         * @example `2022-10-17T06:13Z`
         */
        CreateTime: string;
        /**
         * 权威代理域名实例ID
         * @example `i-7bg`
         */
        InstanceId: string;
        /**
         * 源站是否支持edns。NOT_SUPPORT：不支持，SUPPORT：支持
         * @example `SUPPORT`
         */
        SourceEdns: string;
        /**
         * 权威代理域名名称
         * @example `dns-example.top`
         */
        DomainName: string;
        /**
         * 权威代理域名ID
         * @example `00efd71a-770e-4255-b54e-6fe5659baffe`
         */
        DomainId: string;
        /**
         * 最后更新时间（时间戳）
         * @example `1671690491000`
         */
        UpdateTimestamp: number;
        /**
         * 实例过期时间（时间戳）
         * @example `1692374400000`
         */
        ExpireTimestamp: number;
        /**
         * 回源缓存数据TTL(最大值)，取值范围为30 - 86400
         * @example `86400`
         */
        CacheTtlMax: number;
        /**
         * 回源缓存数据TTL(最小值)，取值范围为30 - 86400
         * @example `30`
         */
        CacheTtlMin: number;
        /**
         * 云解析版本Code
         * @example `ultimate`
         */
        VersionCode: string;
        /**
         * 源站DNS服务器列表
         */
        SourceDnsServers: {
            /**
             * 源站服务器的域名或IP地址
             * @example `ns8.alidns.com`
             */
            Host: string;
            /**
             * 源站DNS服务器端口
             * @example `53`
             */
            Port: string;
        }[];
        /**
         * 添加时间（时间戳）
         * @example `1660546144000`
         */
        CreateTimestamp: number;
    }[];
    /**
     * 域名列表总数
     * @example `3`
     */
    TotalCount: number;
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20
     * @example `20`
     */
    PageSize: number;
    /**
     * 唯一请求识别码
     * @example `57121A9C-CDCF-541F-AD39-275D89099420`
     */
    RequestId: string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    PageNumber: number;
}
