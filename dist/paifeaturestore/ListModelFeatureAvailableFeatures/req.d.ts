export interface ListModelFeatureAvailableFeaturesRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 模型特征ID，可从接口ListModelFeatures获取。
     * @example `3`
     */
    "ModelFeatureId": string;
    /**
     * 特征名称过滤。
     * @example `f1`
     */
    "FeatureName"?: string;
}
