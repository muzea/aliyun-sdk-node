export interface CreateWorkspaceRequest {
    /**
     * 工作空间名称
     * @example `TestWorkspace`
     */
    "Workspace": string;
    /**
     * 工作空间描述
     * @example `This is a test workspace`
     */
    "Description"?: string;
    /**
     * 幂等Token
     * @example `TestToken`
     */
    "ClientToken"?: string;
    /**
     * 工作空间内OSS上的工作路径
     * @example `oss://gstor-default-workspace-cn-shanghai-bae3193d/`
     */
    "Storage": string;
    /**
     * 工作空间任务生命周期
     * @example `30`
     */
    "JobLifecycle"?: number;
    /**
     * 工作空间内的ram角色
     * @example `TestRole`
     */
    "Role"?: string;
    /**
     * 工作空间标签
     * @example `{"key":"value"}`
     */
    "Labels"?: string;
}
