export interface DeleteAppRequest {
    /**
     * 工作空间名称
     * @example `TestWorkspace`
     */
    "Workspace": string;
    /**
     * 应用名称
     * @example `TestApp`
     */
    "AppName": string;
    /**
     * 应用版本
     * @example `1`
     */
    "Revision"?: string;
}
