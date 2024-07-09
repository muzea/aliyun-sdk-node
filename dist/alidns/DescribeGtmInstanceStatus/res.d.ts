export interface DescribeGtmInstanceStatusResponse {
    /**
     * 实例状态：
     * - ALLOW：允许操作
     * - DENY：不允许操作
     * @example `ALLOW`
     */
    Status: string;
    /**
     * 当前生效地址池不可用的访问策略个数。
     * @example `10`
     */
    StrategyNotAvailableNum: number;
    /**
     * 唯一请求识别码。
     * @example `389DFFA3-77A5-4A9E-BF3D-147C6F98A5BA`
     */
    RequestId: string;
    /**
     * 切换到备用地址池的访问策略个数。
     * @example `10`
     */
    SwitchToFailoverStrategyNum: number;
    /**
     * 实例状态原因列表
     * - INSTANCE_OPERATE_BLACK_LIST：黑名单
     * - BETA_INSTANCE：公测期实例
     * @example `["BETA_INSTANCE"]`
     */
    StatusReason: string;
    /**
     * 故障地址个数。
     * @example `10`
     */
    AddrNotAvailableNum: number;
    /**
     * 不可用地址池个数。
     * @example `10`
     */
    AddrPoolNotAvailableNum: number;
}
