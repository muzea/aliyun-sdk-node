export interface GetProjectRequest {
    /**
     * 项目名称。
     * @example `odps_project`
     */
    "projectName": string;
    /**
     * 是否带有附加信息
     * @example `true`
     */
    "verbose"?: boolean;
}
