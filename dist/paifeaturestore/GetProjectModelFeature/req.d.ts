export interface GetProjectModelFeatureRequest {
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
    /**
     * 特征视图名称。
     * @example `model_feature_1`
     */
    "ModelFeatureName": string;
}
