export interface ListProjectFeatureViewOwnersRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 项目ID，可从接口ListProjects获取。
     * @example `3`
     */
    "ProjectId": string;
}
