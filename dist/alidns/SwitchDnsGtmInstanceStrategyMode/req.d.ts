export interface SwitchDnsGtmInstanceStrategyModeRequest {
    /**
     * 部分返回参数语言。默认值：en。取值范围：en、zh、ja。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 实例id。
     * @example `gtm-cn-cs02xyk4a**`
     */
    "InstanceId": string;
    /**
     * 访问策略模式：
     * - GEO：基于地理位置
     * - LATENCY：基于延时
     * @example `GEO`
     */
    "StrategyMode": string;
}
