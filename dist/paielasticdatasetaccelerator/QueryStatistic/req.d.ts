export interface QueryStatisticRequest {
    /**
     * 需要查询的统计信息类型，以半角逗号（,）分隔。
     * - InstanceCapacityEachType：每个数据集加速实例类别所对应的总容量占比。
     * - InstanceNumEachType：每个数据集加速实例类别的数量。
     * - SlotNumEachType：每个数据集加速槽类别的数量。
     * @example `InstanceCapacityEachType`
     */
    "Fields"?: string;
    /**
     * 起始时间，默认是1小时前。
     * @example `2020-11-08T15:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 截止时间，默认是当前时间。
     * @example `2020-11-08T16:00:00Z`
     */
    "EndTime"?: string;
}
