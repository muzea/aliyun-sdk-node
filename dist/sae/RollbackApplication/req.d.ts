export interface RollbackApplicationRequest {
    /**
     * 应用ID。
     * @example `017f39b8-dfa4-4e16-a84b-1dcee4b1****`
     */
    "AppId": string;
    /**
     * 版本ID，需要调用[ListAppVersions](~~162054~~)接口查看。
     * @example `0026ff7f-2b57-4127-bdd0-9bf202bb9****`
     */
    "VersionId": string;
    /**
     * 分批等待时间，单位为秒。
     * @example `10`
     */
    "BatchWaitTime"?: number;
    /**
     * 最小存活实例数。取值说明如下：
     * - 如果设置为**0**，应用在升级过程中将会中断业务。
     * - 如果设置为**-1**，最小存活实例数将使用系统推荐值，即取现有实例数的25%。如果当前为5个实例，5×25%=1.25，向上取整后，最小存活实例数为2。
     * > 每次滚动部署最小存活的实例数建议≥1，保证业务不中断。
     * @example `1`
     */
    "MinReadyInstances"?: number;
    /**
     * 最小存活实例数百分比。取值说明如下：
     *  - **-1**：初始化值，表示不采用百分比。
     *  - **0~100**：单位为百分比，向上取整。例如设置为**50**%，如果当前为5个实例，则最小存活实例数为3。
     * > 当**MinReadyInstance**和**MinReadyInstanceRatio**同时传递时，且**MinReadyInstanceRatio**的取值非**-1**时，以**MinReadyInstanceRatio**参数为准。假设**MinReadyInstances**取值为**5**，**MinReadyInstanceRatio**取值为**50**，则会用**50**来计算最小存活实例数。
     * @example `-1`
     */
    "MinReadyInstanceRatio"?: number;
    /**
     * 部署策略。当最小存活实例数等于1时，**UpdateStrategy**字段的值为""。当最小存活实例数大于1时，示例如下：
     * - 灰度1台+后续分2批+自动分批+分批间隔1分钟。
     *
     *   `{"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":1},"grayUpdate":{"gray":1}}`
     * - 灰度1台+后续分2批+手动分批。
     *   `{"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"manual"},"grayUpdate":{"gray":1}}`
     *
     * - 分2批+自动分批+分批间隔0分钟。
     *   `{"type":"BatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":0}}`
     * 参数说明如下：
     * - **type**：发布策略类型，可选灰度发布**GrayBatchUpdate**或分批发布**BatchUpdate**。
     * - **batchUpdate**：分批发布策略。
     *     - **batch**：发布批次。
     *     - **releaseType**：分批间处理方式，可选自动**auto**或手动**manual**。
     *     - **batchWaitTime**：批次内部署间隔时间，单位为秒。
     * - **grayUpdate**：灰度后剩余批次，当**type**为**GrayBatchUpdate**时必填。
     * @example `{"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":1},"grayUpdate":{"gray":1}}`
     */
    "UpdateStrategy"?: string;
    /**
     * 是否自动启用应用弹性伸缩策略。取值说明如下：
     * - **true**：开启。
     * - **false**：关闭。
     * @example `true`
     */
    "AutoEnableApplicationScalingRule"?: string;
}
