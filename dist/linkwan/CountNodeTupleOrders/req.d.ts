export interface CountNodeTupleOrdersRequest {
    /**
     * 工单状态过滤列表。若不使用此参数，则表示统计所有状态的工单。
     * 参考工单状态取值
     * @example `ACCEPTED`
     */
    "States"?: string[];
    /**
     * 判断是否是KPM所发起的工单，是否是安全产线发起的工单。
     * @example `true`
     */
    "IsKpm"?: boolean;
}
