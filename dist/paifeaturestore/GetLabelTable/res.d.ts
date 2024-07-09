export interface GetLabelTableResponse {
    /**
     * 请求ID。
     * @example `728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77`
     */
    RequestId: string;
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
     * @example `1`
     */
    DatasourceId: string;
    /**
     * Label表名称。
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
     * @example `12321312*****`
     */
    Owner: string;
    /**
     * 关联模型特征名称列表。
     */
    RelatedModelFeatures: string[];
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
     * 字段列表。
     */
    Fields: {
        /**
         * 字段名称。
         * @example `field1`
         */
        Name: string;
        /**
         * 字段类型。
         * @example `INT32`
         */
        Type: string;
        /**
         * 字段属性列表。
         */
        Attributes: string[];
    }[];
}
