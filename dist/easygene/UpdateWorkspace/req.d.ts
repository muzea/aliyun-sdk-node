export interface UpdateWorkspaceRequest {
    /**
     * 工作空间名称
     * @example `MyTestWorkspace`
     */
    "Workspace": string;
    /**
     * 工作空间描述
     * @example `This is a test workspace`
     */
    "Description"?: string;
    /**
     * 工作空间内任务生命周期
     * @example `30`
     */
    "JobLifecycle"?: number;
    /**
     * 工作空间内Ram角色
     * @example `MyTestRamRole`
     */
    "Role"?: string;
    /**
     * 工作空间标签
     * @example `{"env":"test"}`
     */
    "Labels"?: string;
}
