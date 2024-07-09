export interface ListModelFeatureAvailableFeaturesResponse {
    /**
     * 请求ID。
     * @example `ED4DEA2F-F216-57F0-AE28-08D791233280`
     */
    requestId: string;
    /**
     * 总个数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 可选的特征列表。
     */
    AvaliableFeatures: {
        /**
         * 特征名。
         * @example `age`
         */
        Name: string;
        /**
         * 特征值类型。
         * - INTEGER
         * - DOUBLE
         * - STRING
         * @example `STRING`
         */
        Type: string;
        /**
         * 特征来源
         * - FeatureView-特征视图
         * - LabelTable-Label表
         * @example `FeatureView`
         */
        SourceType: string;
        /**
         * 特征来源名称
         * @example `user_fea`
         */
        SourceName: string;
    }[];
}
