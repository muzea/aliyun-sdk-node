export interface ScaleWithAdjustmentResponse {
    /**
     * 伸缩活动的ID。
     * @example `asa-bp175o6f6ego3r2j****`
     */
    ScalingActivityId: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 伸缩活动的类型。
     * 当`ActivityType为CapacityChange`时，表示返回值`ScalingActivityId`对应伸缩活动仅修改伸缩组期望实例数，没有立刻执行扩缩。
     * 适用范围：期望实例数类型伸缩组。
     * @example `CapacityChange`
     */
    ActivityType: string;
}
