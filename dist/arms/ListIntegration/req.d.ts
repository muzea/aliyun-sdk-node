export interface ListIntegrationRequest {
    /**
     * 告警集成名称。
     * @example `云监控集成`
     */
    "IntegrationName"?: string;
    /**
     * 集成产品类型：
     * - CLOUD_MONITOR：云监控
     * - LOG_SERVICE：日志服务
     * @example `CLOUD_MONITOR`
     */
    "IntegrationProductType": string;
    /**
     * 查询的页数。
     * @example `1`
     */
    "Page": number;
    /**
     * 每页展示的告警集成数。
     * @example `10`
     */
    "Size": number;
    /**
     * 是否展示集成详情：
     * - true
     * - false
     * @example `true`
     */
    "IsDetail"?: boolean;
}
