export interface ListCalculationJobsRequest {
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页大小。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 实例ID，可通过接口[ListInstances](~~2411819~~)获取。
     * @example `pairec-cn-test1`
     */
    "InstanceId": string;
    /**
     * 场景ID，可通过[ListScenes](~~2402581~~)接口获取。
     * @example `1`
     */
    "SceneId": string;
    /**
     * 状态。
     * - Success-成功
     * - Failure-失败
     * - Initializing-初始化中
     * - Running-运行中
     * @example `Success`
     */
    "Status"?: string;
}
