export interface UpdateMetaTableIntroWikiRequest {
    /**
     * 表的唯一标识，格式为odps.{projectName}.{tableName}。
     * @example `odps.test.table1`
     */
    "TableGuid": string;
    /**
     * 表说明的详情。
     * @example `abc`
     */
    "Content": string;
}
