export interface DescribeGtmInstancesResponse {
    /**
     * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
     * @example `20`
     */
    PageSize: number;
    /**
     * 唯一请求识别码。
     * @example `193B0163-7F93-42DF-AB05-ACEEB7D22707`
     */
    RequestId: string;
    /**
     * 当前页数，起始值为1，默认为1。
     * @example `1`
     */
    PageNumber: number;
    GtmInstances: {
        /**
         * GTM实例列表。
         */
        GtmInstance: {
            /**
             * 实例到期时间。
             * @example `2018-06-06T11:34Z`
             */
            ExpireTime: string;
            /**
             * 访问策略个数。
             * @example `5`
             */
            AccessStrategyNum: number;
            /**
             * 实例创建时间。
             * @example `2018-06-06T11:34Z`
             */
            CreateTime: string;
            /**
             * 当前接入方式。其中：
             * - **SYSTEM_ASSIGN**：系统分配
             * - **CUSTOM**：自定义
             * @example `CUSTOM`
             */
            CnameMode: string;
            /**
             * 实例ID。
             * @example `gtm-cn-wwo3a3hbz**`
             */
            InstanceId: string;
            /**
             * 实例到期时间（时间戳）。
             * @example `1528284856000`
             */
            ExpireTimestamp: number;
            /**
             * 全局TTL。
             * @example `60`
             */
            Ttl: number;
            /**
             * 报警组。
             * @example `[\"研发组\"]`
             */
            AlertGroup: string;
            /**
             * 地址池个数。
             * @example `5`
             */
            AddressPoolNum: number;
            /**
             * 实例名称。
             * @example `test`
             */
            InstanceName: string;
            /**
             * 负载均衡策略。
             * - **ALL_RR**: 负载均摊
             * - **RATIO**: 加权轮询
             * @example `RATIO`
             */
            LbaStrategy: string;
            /**
             * CNAME接入域名。
             * @example `gtm-cn-wwo3a3hbz**.dns-example.top
            `
             */
            Cname: string;
            /**
             * 版本Code。
             * @example `biaozhun`
             */
            VersionCode: string;
            /**
             * 用户域名。
             * @example `dns-example.top`
             */
            UserDomainName: string;
            /**
             * 创建时间（时间戳）。
             * @example `1528284856000`
             */
            CreateTimestamp: number;
            /**
             * 资源组ID。
             * @example `rg-acfm2q2jqpjh***`
             */
            ResourceGroupId: string;
        }[];
    };
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
}
