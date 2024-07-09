export interface GetTableMetaResponse {
    /**
     * 请求ID。
     * @example `28C5E01-ABF6-5AA8-B9FC-B3BA05DECC77`
     */
    RequestId: string;
    /**
     * 数据表名称。
     * @example `test_table`
     */
    Name: string;
    /**
     * 数据表描述。
     * @example `this is a test table`
     */
    Description: string;
    /**
     * 资源ID。
     * @example `reso-wkgo***`
     */
    ResourceId: string;
    /**
     * 数据库中的表名.
     * @example `table_mysql`
     */
    TableName: string;
    /**
     * 数据表类型。
     * - MaxCompute
     * - Hologres
     * @example `MaxCompute`
     */
    Type: string;
    /**
     * 数据表模块。
     * - ABTest-实验数据表。
     * - ExperimentTool-实验工具表。
     * - DataDiagnosis-数据诊断
     * @example `ABTest`
     */
    Module: string;
    /**
     * 是否可以删除，如果表在其他地方正在被引用，则返回 false。
     * @example `false`
     */
    CanDelete: boolean;
    /**
     * 创建时间。
     * @example `2021-12-15:24:33`
     */
    GmtCreateTime: string;
    /**
     * 更新时间。
     * @example `2021-12-15:24:33`
     */
    GmtModifiedTime: string;
    /**
     * 表的字段列表。
     */
    Fields: {
        /**
         * 字段名称。
         * @example `gender`
         */
        Name: string;
        /**
         * 字段含义。
         * @example `the gender of people`
         */
        Meaning: string;
        /**
         * 字段类型。
         * @example `BIGINT`
         */
        Type: string;
        /**
         * 是否是维度字段。
         * @example `false`
         */
        IsDimensionField: boolean;
    }[];
    /**
     * 如果是MaxCompute表，此字段为数据地图的表的链接，否则为空。
     * @example `https://dmc-xxx.com/dm/table/xxx
    `
     */
    Url: string;
    /**
     * 数据表ID。
     * @example `3`
     */
    TableMetaId: string;
    /**
     * 字段导入时间。
     * @example `2021-12-15T23:24:33.132+08:00`
     */
    GmtImportedTime: string;
    /**
     * 数据表的一些额外的配置。
     * @example `{"table_type":"item"}`
     */
    Config: string;
}
