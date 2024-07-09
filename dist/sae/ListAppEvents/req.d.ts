export interface ListAppEventsRequest {
    /**
     * 当前页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时设置的每页行数。取值范围\[0,10000]。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 应用ID。
     * @example `f7730764-d88f-4b9a-8d8e-cd8efbfe****`
     */
    "AppId"?: string;
    /**
     * 对象类型。取值说明如下：
     * - **Deployment**：应用。
     * - **Pod**：应用实例。
     * - **Service**：SLB。
     * - **HorizontalPodAutoscaler**：自动弹性。
     * - **CloneSet**：应用。
     * @example `Pod`
     */
    "ObjectKind"?: string;
    /**
     * 对象名。支持前缀模糊搜索。
     * @example `errew-b86bf540-b4dc-47d8-a42f-b4997c14bd8f-5595cbddd6-x****`
     */
    "ObjectName"?: string;
    /**
     * 事件类型。取值说明如下：
     * - **Warning**：告警。
     * - **Normal**：正常。
     * @example `Warning`
     */
    "EventType"?: string;
    /**
     * 事件原因。支持前缀模糊搜索。
     * @example `Started`
     */
    "Reason"?: string;
    /**
     * 命名空间ID。
     * @example `cn-beijing`
     */
    "Namespace": string;
}
