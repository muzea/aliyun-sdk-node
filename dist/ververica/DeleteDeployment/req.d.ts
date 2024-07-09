export interface DeleteDeploymentRequest {
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
     * 作业ID。
     * @example `5737ef81-d2f1-49cf-8752-30910809****`
     */
    "deploymentId": string;
}
