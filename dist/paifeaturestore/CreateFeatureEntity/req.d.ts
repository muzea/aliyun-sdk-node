export interface CreateFeatureEntityRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 关联特征视图用的Join Id。
         * @example `user_id `
         */
        JoinId: string;
        /**
         * 特征实体名称。
         * @example `feature_entity_1`
         */
        Name: string;
        /**
         * 项目ID，可从接口ListInstances获取。
         * @example `3`
         */
        ProjectId: string;
    };
}
