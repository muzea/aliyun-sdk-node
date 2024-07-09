export interface ListModelFeaturesResponse {
    /**
     * 请求ID。
     * @example `2CA11923-2A3D-5E5A-8314-E699D2DD15DE`
     */
    RequestId: string;
    /**
     * 总个数。
     * @example `4`
     */
    TotalCount: number;
    /**
     * 模型特征列表。
     */
    ModelFeatures: {
        /**
         * 模型特征ID。
         * @example `3`
         */
        ModelFeatureId: string;
        /**
         * 项目ID。
         * @example `5`
         */
        ProjectId: string;
        /**
         * 项目名称。
         * @example `project1`
         */
        ProjectName: string;
        /**
         * 模型特征名称。
         * @example `model_feature1`
         */
        Name: string;
        /**
         * 创建人的阿里云账号ID。
         * @example `1231243253****`
         */
        Owner: string;
        /**
         * 创建时间。
         * @example `2023-07-04T14:46:22.227+08:00`
         */
        GmtCreateTime: string;
        /**
         * 更新时间。
         * @example `2023-07-04T14:46:22.227+08:00`
         */
        GmtModifiedTime: string;
        /**
         * Label表名称。
         * @example `label_table_1`
         */
        LabelTableName: string;
    }[];
}
