export interface DescribeGtmInstanceAddressPoolsResponse {
    /**
     * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
     * @example `20`
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
     * @example `2`
     */
    TotalItems: number;
    AddrPools: {
        /**
         * 地址池列表。
         */
        AddrPool: {
            /**
             * 地址池类型：
             * - **IP**：IP地址
             * - **DOMAIN**：域名
             * @example `IP`
             */
            Type: string;
            /**
             * 地址池可用状态：
             * - **AVAILABLE**：可用
             * - **NOT_AVAILABLE**：不可用
             * @example `AVAILABLE`
             */
            Status: string;
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
             * 监控配置ID。
             * @example `100abc`
             */
            MonitorConfigId: string;
            /**
             * 最小可用地址数量。
             * @example `2`
             */
            MinAvailableAddrNum: number;
            /**
             * 更新时间（时间戳）。
             * @example `1527690629357`
             */
            UpdateTimestamp: number;
            /**
             * 监控状态。其中：
             * - **OPEN**：开启
             * - **CLOSE**：关闭
             * - **UNCONFIGURED**：未配置
             * @example `OPEN`
             */
            MonitorStatus: string;
            /**
             * 地址池ID。
             * @example `hrbpnf`
             */
            AddrPoolId: string;
            /**
             * 地址池名称。
             * @example `test`
             */
            Name: string;
            /**
             * 地址数量。
             * @example `2`
             */
            AddrCount: number;
            /**
             * 创建时间（时间戳）。
             * @example `1527690629357`
             */
            CreateTimestamp: number;
        }[];
    };
}
