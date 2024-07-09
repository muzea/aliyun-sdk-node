export interface DescribeGtmAccessStrategyResponse {
    /**
     * 唯一请求识别码。
     * @example `BA1608CA-834C-4E63-8682-8AF0B11ED72D`
     */
    RequestId: string;
    /**
     * 关联的GTM实例ID。
     * @example `gtm-cn-wwo3a3hbz**`
     */
    InstanceId: string;
    /**
     * 策略ID。
     * @example `hra0hs`
     */
    StrategyId: string;
    /**
     * 主地址池集合可用状态。其中：
     * - **AVAILABLE**：可用
     * - **NOT_AVAILABLE**：不可用
     * @example `AVAILABLE`
     */
    DefaultAddrPoolStatus: string;
    /**
     * 备地址池集合ID。
     * 若未设置备地址池集合，传值**EMPTY**。
     * @example `hra0i2`
     */
    FailoverAddrPoolId: string;
    /**
     * 访问状态。其中：
     * - **DEFAULT**：访问主地址池集合，表示正常
     * - **FAILOVER**：访问备地址池集合，表示异常
     * @example `DEFAULT`
     */
    AccessStatus: string;
    /**
     * 主地址池集合健康检查状态。其中：
     * - **OPEN**：开启
     * - **CLOSE**：关闭
     * - **UNCONFIGURED**：未配置
     * @example `OPEN`
     */
    DefaultAddrPoolMonitorStatus: string;
    /**
     * 主地址池集合名称。
     * @example `地址池1`
     */
    DefaultAddrPoolName: string;
    /**
     * 备地址池集合ID。
     * @example `hra0i1`
     */
    DefultAddrPoolId: string;
    /**
     * 访问策略名称。
     * @example `全局`
     */
    StrategyName: string;
    /**
     * 备地址池集合可用状态。其中：
     * - **AVAILABLE**：可用
     * - **NOT_AVAILABLE**：不可用
     * @example `AVAILABLE`
     */
    FailoverAddrPoolStatus: string;
    /**
     * 地址池集合切换策略：
     * - **AUTO**：自动切换
     * - **DEFAULT**：主地址池集合
     * - **FAILOVER**： 备地址池集合
     * @example `AUTO`
     */
    AccessMode: string;
    /**
     * 策略模式
     * SELF_DEFINED 自定义。
     * @example `SELF_DEFINED`
     */
    StrategyMode: string;
    /**
     * 备地址池集合健康检查状态。其中：
     * - **OPEN**：开启
     * - **CLOSE**：关闭
     * - **UNCONFIGURED**：未配置
     * @example `OPEN`
     */
    FailoverAddrPoolMonitorStatus: string;
    /**
     * 备地址池集合名称。
     * @example `地址池2`
     */
    FailoverAddrPoolName: string;
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
}
