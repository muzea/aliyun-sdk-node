export interface ListDashboardMetricsRequest {
    /**
     * 实例ID。
     * @example `airec-cn-o400whm78004`
     */
    "instanceId": string;
    /**
     * 起始时间，秒级时间戳
     * @example `1586673466`
     */
    "startTime": number;
    /**
     * 截止时间，秒级时间戳
     * @example `1586673466`
     */
    "endTime": number;
    /**
     * 指标类型
     * USER_ACTION_PV_COUNT 整体流量规模PV
     * USER_ACTION_UV_COUNT 整体流量规模UV
     * USER_ACTION_PV_RATIO 流量转化率
     * USER_ACTION_UV_RATIO 人均流量
     * @example `指标类型
    
    USERACTIONPV_COUNT`
     */
    "metricType"?: string;
    /**
     * 查询维度，配合metricQuery使用，默认值为USER, 枚举值如下；
     *  USER 用户维度,
     *  ITEM  物品维度
     * @example `ITEM`
     */
    "metricView"?: string;
    /**
     * 查询条件，格式 k1:v1;k2:v2
     * @example `dimension:ITEM_TYPE;behaviorType:expose`
     */
    "metricQuery"?: string;
}
