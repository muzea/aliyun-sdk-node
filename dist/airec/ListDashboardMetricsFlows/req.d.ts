export interface ListDashboardMetricsFlowsRequest {
    /**
     * 实例ID。
     * @example `airec-cn-o400whm78004`
     */
    "instanceId": string;
    /**
     * 秒级时间戳
     * @example `1586673466`
     */
    "startTime": number;
    /**
     * 秒级时间戳
     * @example `1586673466`
     */
    "endTime": number;
    /**
     * 指标类型
     * USER_ACTION_PV_COUNT 整体流量规模PV
     * USER_ACTION_UV_COUNT 整体流量规模UV
     * USER_ACTION_PV_RATIO  流量转化率
     * USER_ACTION_UV_RATIO 人均流量
     * @example `USERACTIONPV_COUNT`
     */
    "metricType": string;
}
