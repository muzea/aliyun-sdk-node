export interface DescribeDnsGtmInstanceAddressPoolsResponse {
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20。
     * @example `1`
     */
    PageSize: number;
    /**
     * 唯一请求识别码。
     * @example `6856BCF6-11D6-4D7E-AC53-FD579933522B`
     */
    RequestId: string;
    /**
     * 当前页数，起始值为1，默认为1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总页数。
     * @example `1`
     */
    TotalPages: number;
    /**
     * 总个数。
     * @example `1`
     */
    TotalItems: number;
    AddrPools: {
        /**
         * 地址池列表。
         */
        AddrPool: {
            /**
             * 地址池类型：
             * - IPV4：ip地址
             * - IPV6: ipv6地址
             * - DOMAIN：域名
             * @example `IPV4`
             */
            Type: string;
            /**
             * 更新时间（时间戳）。
             * @example `1527690629357`
             */
            UpdateTimestamp: number;
            /**
             * 监控状态：
             * - OPEN：开启
             * - CLOSE：关闭
             * - UNCONFIGURED：未配置
             * @example `OPEN`
             */
            MonitorStatus: string;
            /**
             * 更新时间。
             * @example `2017-12-28T13:08Z`
             */
            UpdateTime: string;
            /**
             * 创建时间。
             * @example `2017-12-28T13:08Z`
             */
            CreateTime: string;
            /**
             * 地址池id。
             * @example `hrbpne`
             */
            AddrPoolId: string;
            /**
             * 负载均衡策略
             * - ALL_RR: 返回全部地址
             * - RATIO：按权重返回地址
             * @example `ALL_RR`
             */
            LbaStrategy: string;
            /**
             * 地址池名称。
             * @example `testpool`
             */
            Name: string;
            /**
             * 地址数量。
             * @example `1`
             */
            AddrCount: number;
            /**
             * 监控配置id。
             * @example `abc123`
             */
            MonitorConfigId: string;
            /**
             * 创建时间（时间戳）。
             * @example `1527690629357`
             */
            CreateTimestamp: number;
        }[];
    };
}
