export interface DescribeSyncReportOutliersRequest {
    /**
     * 实例ID。
     * @example `airec-cn-test`
     */
    "instanceId": string;
    /**
     * 开始时间秒级时间戳
     * @example `1586673466`
     */
    "startTime": number;
    /**
     * itemBhv
     * 实时行为中，商品ID是否存在于商品库中
     * userBhv
     * 实时行为中，用户ID是否存在于用户库中
     * bhvTypeBhv
     * 实时行为中，bhv_type是否合法
     * traceIdBhv
     * 实时行为中，trace_id是否合法
     * traceInfoBhv
     * 实时行为中，trace_info是否合法
     * itemItem
     * 修改记录物品ID是否合法
     * userUser
     * 修改记录用户ID是否合法
     * @example `itemBhv`
     */
    "key": string;
    /**
     * 数据表名(behavior/item/user)
     * @example `hehavoir`
     */
    "type": string;
    /**
     * 结束时间秒级时间戳
     * @example `1586673466`
     */
    "endTime": number;
    /**
     * 异常级别(error/warn/info)
     * @example `error`
     */
    "levelType": string;
}
