export interface GetAppRequest {
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
     * 应用版本号
     * @example `0`
     */
    "Revision"?: string;
    /**
     * 应用版本唯一标签
     * @example `TestTag`
     */
    "RevisionTag"?: string;
}
