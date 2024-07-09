export interface ListFeatureViewFieldRelationshipsResponse {
    /**
     * 请求ID。
     * @example `BF349686-C932-55B5-9B31-DAFA395C0E06`
     */
    RequestId: string;
    /**
     * 血缘关系列表。
     */
    Relationships: {
        /**
         * 特征视图名称。
         * @example `featureView1`
         */
        FeatureName: string;
        /**
         * 在线表名称。
         * @example `table1`
         */
        OnlineTableName: string;
        /**
         * 离线表名称。
         * @example `table2`
         */
        OfflineTableName: string;
        /**
         * 模型列表。
         */
        Models: {
            /**
             * 模型ID。
             * @example `3`
             */
            ModelId: string;
            /**
             * 模型名称。
             * @example `dbmtl`
             */
            ModelName: string;
        }[];
    }[];
}
