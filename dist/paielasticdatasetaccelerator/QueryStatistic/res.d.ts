export interface QueryStatisticResponse {
    /**
     * 请求ID。
     * @example `A731A84D-55C9-44F7-99BB-E1CF0CF19197`
     */
    RequestId: string;
    /**
     * 每个数据集加速实例类别所对应的总容量占比，Map中的Key包含所有数据集加速实例的类别。
     */
    InstanceCapacityEachType: any;
    /**
     * 每个数据集加速实例类别的数量，Map中的Key包含所有数据集加速实例的类别。
     */
    InstanceNumEachType: any;
    /**
     * 每个数据集加速槽类别的数量，Map中的Key包含所有数据集加速槽的类别。
     */
    SlotNumEachType: any;
}
