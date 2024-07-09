export interface DescribeDnsGtmInstanceStatusResponse {
    /**
     * 当前生效地址池集合不可用的访问策略个数。
     * @example `1`
     */
    StrategyNotAvailableNum: number;
    /**
     * 正常地址个数。
     * @example `1`
     */
    AddrAvailableNum: number;
    /**
     * 唯一请求识别码。
     * @example `389DFFA3-77A5-4A9E-BF3D-147C6F98A5BA`
     */
    RequestId: string;
    /**
     * 切换到备用地址池集合的访问策略个数。
     * @example `1`
     */
    SwitchToFailoverStrategyNum: number;
    /**
     * 故障地址个数。
     * @example `1`
     */
    AddrNotAvailableNum: number;
    /**
     * 不可用地址池集合个数。
     * @example `1`
     */
    AddrPoolGroupNotAvailableNum: number;
}
