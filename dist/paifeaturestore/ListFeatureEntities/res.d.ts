export interface ListFeatureEntitiesResponse {
    /**
     * 请求ID。
     * @example `37D19490-AB69-567D-A852-407C94E510E9`
     */
    RequestId: string;
    /**
     * 总个数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 特征实体列表。
     */
    FeatureEntities: {
        /**
         * 特征实体ID。
         * @example `3`
         */
        FeatureEntityId: string;
        /**
         * 创建时间。
         * @example `2021-12-15T23:24:33.132+08:00`
         */
        GmtCreateTime: string;
        /**
         * 关联特征视图用的Join ID。
         * @example `user_id`
         */
        JoinId: string;
        /**
         * 特征实体名称。
         * @example `feature_entity_1`
         */
        Name: string;
        /**
         * 创建者的阿里云账号ID。
         * @example `123456789****`
         */
        Owner: string;
        /**
         * 项目ID。
         * @example `3`
         */
        ProjectId: string;
        /**
         * 项目名称。
         * @example `project_1`
         */
        ProjectName: string;
    }[];
}
