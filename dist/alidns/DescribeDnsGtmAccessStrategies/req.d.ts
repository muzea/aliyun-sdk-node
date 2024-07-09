export interface DescribeDnsGtmAccessStrategiesRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 实例id。
     * @example `gtm-cn-wwo3a3hbz**`
     */
    "InstanceId": string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20。
     * @example `1`
     */
    "PageSize"?: number;
    /**
     * 访问策略类型：
     * - GEO：基于地理位置的访问策略
     * - LATENCY：基于访问延时的访问策略
     * @example `GEO`
     */
    "StrategyMode": string;
}
