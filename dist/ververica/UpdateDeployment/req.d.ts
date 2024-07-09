export interface UpdateDeploymentRequest {
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
     * @example `58718c99-3b29-4c5e-93bb-c9fc4ec6****`
     */
    "deploymentId": string;
    /**
     * 需要更新的作业内容。
     */
    "body": any;
}
