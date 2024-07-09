export interface ListProjectFeatureViewsResponse {
    /**
     * 请求ID。
     * @example `AE2AF33E-0C0D-51A8-B89B-C5F1DF261D92`
     */
    RequestId: string;
    /**
     * 总个数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 特征视图列表。
     */
    FeatureViews: {
        /**
         * 特征视图名称。
         * @example `feature_view1`
         */
        Name: string;
        /**
         * 特征视图ID。
         * @example `3`
         */
        FeatureViewId: string;
        /**
         * 特征列表。
         */
        Features: {
            /**
             * 特征名称。
             * @example `f1`
             */
            Name: string;
            /**
             * 特征类型，包括：
             * - INT32
             * - INT64
             * - FLOAT
             * - DOUBLE
             * - STRING
             * - BOOLEAN
             * - TIMESTAMP
             * @example `INT32`
             */
            Type: string;
            /**
             * 字段属性列表，可选值包括：
             * - Partition-分区字段
             * - PrimaryKey-主键
             * - EventTime-事件时间
             */
            Attributes: string[];
        }[];
        /**
         * 特征视图类型。
         * - Batch-离线
         * - Stream-实时
         * - Sequence-行为序列
         * @example `Batch`
         */
        Type: string;
    }[];
}
