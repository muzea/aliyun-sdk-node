export interface GenerateResourcePlanWithFlinkConfAsyncRequest {
    /**
     * 工作空间ID。
     * @example `a14bd5d90a****`
     */
    "workspace": string;
    /**
     * 项目空间名称。
     * @example `default-namespace`
     */
    "namespace": string;
    /**
     * deploymentId，deployment的唯一标识。
     * @example `737d0921-c5ac-47fc-9ba9-07a1e0b4****`
     */
    "deploymentId": string;
    /**
     * 生成resource plan需要的Flink configuration。
     */
    "body"?: any;
}
