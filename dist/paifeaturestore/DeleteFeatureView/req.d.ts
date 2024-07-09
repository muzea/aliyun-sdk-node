export interface DeleteFeatureViewRequest {
    /**
     * 实例ID，可通过接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 特征视图ID，可通过接口ListFeatureViews获取。
     * @example `3`
     */
    "FeatureViewId": string;
}
