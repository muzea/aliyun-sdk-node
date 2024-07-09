export interface DescribeGtmAccessStrategiesResponse {
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20。
     * @example `20`
     */
    PageSize: number;
    /**
     * 唯一请求识别码。
     * @example `0CCC9971-CEC9-4132-824B-4AE611C07623`
     */
    RequestId: string;
    /**
     * 当前页数，起始值为1，默认为1。
     * @example `1`
     */
    PageNumber: number;
    Strategies: {
        /**
         * 策略列表。
         */
        Strategy: {
            /**
             * 访问策略。其中：
             * - **AUTO**：自动切换
             * - **DEFAULT**：主地址池集合
             * - **FAILOVER**：备地址池集合
             * @example `AUTO`
             */
            AccessMode: string;
            /**
             * 策略名称。
             * @example `访问策略`
             */
            StrategyName: string;
            /**
             * 主地址池集合健康检查状态。其中：
             * - **OPEN**：开启
             * - **CLOSE**：关闭
             * - **UNCONFIGURED**：未配置
             * @example `OPEN`
             */
            DefaultAddrPoolMonitorStatus: string;
            /**
             * 访问策略类型：
             * - **GEO**：基于地理位置
             * - **LATENCY**：基于延时
             * @example `GEO`
             */
            StrategyMode: string;
            /**
             * 创建时间。
             * @example `2018-08-09T00:10Z`
             */
            CreateTime: string;
            /**
             * 主地址池集合可用状态。其中：
             * - **AVAILABLE**：可用
             * - **NOT_AVAILABLE**：不可用
             * @example `AVAILABLE`
             */
            DefaultAddrPoolStatus: string;
            /**
             * 关联实例ID。
             * @example `gtm-cn-wwo3a3hbz**`
             */
            InstanceId: string;
            Lines: {
                /**
                 * 解析请求来源列表。
                 */
                Line: {
                    /**
                     * 解析请求来源分组名称。
                     * @example `Global`
                     */
                    GroupName: string;
                    /**
                     * 解析请求来源编码。
                     * @example `default`
                     */
                    LineCode: string;
                    /**
                     * 解析请求来源名称。
                     * @example `Global`
                     */
                    LineName: string;
                    /**
                     * 解析请求来源分组编码。
                     * @example `DEFAULT`
                     */
                    GroupCode: string;
                }[];
            };
            /**
             * 备地址池集合ID。
             * @example `hra0i2`
             */
            FailoverAddrPoolId: string;
            /**
             * 主地址池集合ID。
             * @example `hra0i1`
             */
            DefaultAddrPoolId: string;
            /**
             * 访问策略ID。
             * @example `hra0hs`
             */
            StrategyId: string;
            /**
             * 备地址池集合可用状态。其中：
             * - ****AVAILABLE****：可用
             * - ****NOT_AVAILABLE****：不可用
             * @example `AVAILABLE`
             */
            FailoverAddrPoolStatus: string;
            /**
             * 访问状态。其中：
             * - **DEFAULT**：当前访问主地址池集合
             * - **FAILOVER**：当前访问备地址池集合
             * @example `DEFAULT`
             */
            AccessStatus: string;
            /**
             * 备地址池集合健康检查状态。其中：
             * - **OPEN**：开启
             * - **CLOSE**：关闭
             * - **UNCONFIGURED**：未配置
             * @example `OPEN`
             */
            FailoverAddrPoolMonitorStatus: string;
            /**
             * 主地址池集合名称。
             * @example `地址池1`
             */
            DefaultAddrPoolName: string;
            /**
             * 备地址池集合名称。
             * @example `地址池2`
             */
            FailoverAddrPoolName: string;
            /**
             * 创建时间（时间戳）。
             * @example `1533773400000`
             */
            CreateTimestamp: number;
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
