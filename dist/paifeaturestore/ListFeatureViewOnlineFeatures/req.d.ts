export interface ListFeatureViewOnlineFeaturesRequest {
    /**
     * 实例ID，可通过接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 特征视图ID，可通过接口ListFeatureViews获取。
     * @example `1`
     */
    "FeatureViewId": string;
    /**
     * 查询的JoinId列表。
     */
    "JoinIds": string[];
}
