export interface ListLabelTablesResponse {
    /**
     * 请求ID。
     * @example `728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77`
     */
    RequestId: string;
    /**
     * 总个数。
     * @example `21`
     */
    TotalCount: number;
    /**
     * Label表列表。
     */
    LabelTables: {
        /**
         * Label表ID。
         * @example `3`
         */
        LabelTableId: string;
        /**
         * 项目ID。
         * @example `1`
         */
        ProjectId: string;
        /**
         * 项目名称。
         * @example `project1`
         */
        ProjectName: string;
        /**
         * 数据源ID。
         * @example `3`
         */
        DatasourceId: string;
        /**
         * label表名称。
         * @example `label_table1`
         */
        Name: string;
        /**
         * 数据源名称。
         * @example `datasource1`
         */
        DatasourceName: string;
        /**
         * 创建人的阿里云账号ID。
         * @example `123214213214`
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
