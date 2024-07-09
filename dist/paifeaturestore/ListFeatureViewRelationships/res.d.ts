export interface ListFeatureViewRelationshipsResponse {
    /**
     * 请求ID。
     * @example `0FBBE454-9BD1-5D8F-9129-D14DB7FAFE0B`
     */
    RequestId: string;
    /**
     * 血缘关系列表。
     */
    Relationships: {
        /**
         * 特征视图名称。
         * @example `fv1`
         */
        FeatureViewName: string;
        /**
         * 项目名称。
         * @example `project1`
         */
        ProjectName: string;
        /**
         * 模型特征列表。
         */
        Models: {
            /**
             * 模型特征ID。
             * @example `3`
             */
            ModelId: string;
            /**
             * 模型特征名称。
             * @example `dbmtl`
             */
            ModelName: string;
        }[];
    }[];
}
