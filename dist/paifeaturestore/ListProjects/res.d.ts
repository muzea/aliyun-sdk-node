export interface ListProjectsResponse {
    /**
     * 请求ID。
     * @example `44933189-493B-5C43-A5C6-11EEC2A43520`
     */
    RequestId: string;
    /**
     * 总个数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 项目列表。
     */
    Projects: {
        /**
         * 项目ID。
         * @example `3`
         */
        ProjectId: string;
        /**
         * 项目名称。
         * @example `project1`
         */
        Name: string;
        /**
         * 项目描述。
         * @example `This is a test.`
         */
        Description: string;
        /**
         * 离线数据源类型。
         * @example `MaxCompute`
         */
        OfflineDatasourceType: string;
        /**
         * 离线数据源ID。
         * @example `4`
         */
        OfflineDatasourceId: string;
        /**
         * 离线数据源名称。
         * @example `datasource1`
         */
        OfflineDatasourceName: string;
        /**
         * 在线数据源类型。
         * @example `Hologres`
         */
        OnlineDatasourceType: string;
        /**
         * 在线数据源ID。
         * @example `5`
         */
        OnlineDatasourceId: string;
        /**
         * 在线数据源名称。
         * @example `datasource2`
         */
        OnlineDatasourceName: string;
        /**
         * 离线数据生命周期（天）。
         * @example `10`
         */
        OfflineLifecycle: number;
        /**
         * 项目所含特征实体个数。
         * @example `10`
         */
        FeatureEntityCount: number;
        /**
         * 项目所含特征视图个数。
         * @example `10`
         */
        FeatureViewCount: number;
        /**
         * 项目所含模型特征个数。
         * @example `5`
         */
        ModelCount: number;
        /**
         * 项目所有者。
         * @example `1232132543543****`
         */
        Owner: string;
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
    }[];
}
