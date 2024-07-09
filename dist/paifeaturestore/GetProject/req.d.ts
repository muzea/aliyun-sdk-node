export interface GetProjectRequest {
    /**
     * 实例ID，可通过接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 项目ID，可通过接口ListProjects获取。
     * @example `4`
     */
    "ProjectId": string;
}
