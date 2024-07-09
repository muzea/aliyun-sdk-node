export interface ListDatasourcesResponse {
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
     * 数据源列表。
     */
    Datasources: {
        /**
         * 数据源ID。
         * @example `3`
         */
        DatasourceId: string;
        /**
         * 数据源名称。
         * @example `datasource1`
         */
        Name: string;
        /**
         * 数据源类型。
         * ● Hologres
         * ● Redis
         * ● GraphCompute
         * ● MaxCompute
         * @example `Hologres`
         */
        Type: string;
        /**
         * 资源地址。
         * @example `igraph_instance1`
         */
        Uri: string;
        /**
         * 资源配置。
         * @example `{"address": ""}`
         */
        Config: string;
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
         * 工作空间ID。
         * @example `32324`
         */
        WorkspaceId: string;
    }[];
}
