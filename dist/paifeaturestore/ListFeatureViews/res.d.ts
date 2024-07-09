export interface ListFeatureViewsResponse {
    /**
     * 请求ID。
     * @example `C03B2680-AC9C-59CD-93C5-8142B92537FA`
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
         * 特征视图ID。
         * @example `3`
         */
        FeatureViewId: string;
        /**
         * 项目ID。
         * @example `3`
         */
        ProjectId: string;
        /**
         * 项目名称。
         * @example `project1`
         */
        ProjectName: string;
        /**
         * 特征实体名称。
         * @example `featureEntity1`
         */
        FeatureEntityName: string;
        /**
         * 特征视图名称。
         * @example `featureView1`
         */
        Name: string;
        /**
         * 创建人的阿里云账号ID。
         * @example `12321421412****`
         */
        Owner: string;
        /**
         * 类型，可选值如下：
         * ● Batch-离线特征
         * ● Stream-实时特征
         * @example `Batch`
         */
        Type: string;
        /**
         * 是否写入在线托管存储。
         * @example `false`
         */
        WriteToFeatureDB: boolean;
        /**
         * 创建时间。
         * @example `2021-12-15T23:24:33.132+08:00`
         */
        GmtCreateTime: string;
        /**
         * 更新时间。
         * @example `2021-12-15T23:24:33.132+08:00`
         */
        GmtModifiedTime: string;
        /**
         * 注册表名称。
         * @example `table1`
         */
        RegisterTable: string;
        /**
         * 注册表所在数据源。
         * @example `datasource1`
         */
        RegisterDatasourceName: string;
        /**
         * 特征生命周期（秒）。
         * @example `90`
         */
        TTL: number;
        /**
         * 注册表所在数据源ID。
         * @example `4`
         */
        RegisterDatasourceId: string;
    }[];
}
