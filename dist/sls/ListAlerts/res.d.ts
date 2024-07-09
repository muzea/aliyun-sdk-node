export interface ListAlertsResponse {
    /**
     * Project下告警总数量
     * @example `80`
     */
    total: number;
    /**
     * 当前返回的告警数量
     * @example `10`
     */
    count: number;
    /**
     * 告警配置结果列表
     */
    results: any[];
}
