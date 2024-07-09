export interface GetMetaTableIntroWikiRequest {
    /**
     * 表的唯一标识。
     * @example `odps.engine_name.table_name`
     */
    "TableGuid": string;
    /**
     * 使用说明的版本。
     * @example `1`
     */
    "WikiVersion"?: number;
}
