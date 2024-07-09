export interface GetMetaTableThemeLevelRequest {
    /**
     * 表的唯一ID，格式为odps.${projectName}.${tableName}。
     * @example `odps.project1.name1`
     */
    "TableGuid": string;
    /**
     * 数据类型，目前只支持odps。
     * @example `odps`
     */
    "DataSourceType": string;
}
