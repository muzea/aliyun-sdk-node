export interface DeleteFeatureEntityRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 特征实体ID，可从接口ListFeatureEntities获取。
     * @example `3`
     */
    "FeatureEntityId": string;
}
