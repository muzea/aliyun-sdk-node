export interface DescribeDnsGtmAccessStrategyAvailableConfigRequest {
    /**
     * 部分返回参数语言。默认值：en。取值范围：en、zh、ja。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 实例id。
     * @example `gtm-cn-wwo3a3hbz**`
     */
    "InstanceId": string;
    /**
     * 调度模式：
     * - GEO：基于地理位置
     * - LATENCY：基于延时
     * @example `GEO`
     */
    "StrategyMode": string;
}
