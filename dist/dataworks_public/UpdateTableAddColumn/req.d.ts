export interface UpdateTableAddColumnRequest {
    /**
     * MaxCompute表的唯一标识。格式为odps.projectName.tableName。
     * @example `odps.engine_name.table_name`
     */
    "TableGuid": string;
    /**
     * 字段列表
     */
    "Column": {
        /**
         * 字段的中文名称。
         * @example `中文`
         */
        ColumnNameCn: string;
        /**
         * 字段的名称。
         * @example `abc`
         */
        ColumnName: string;
        /**
         * 字段的备注信息。
         * @example `备注`
         */
        Comment: string;
        /**
         * 字段的类型，请参见MaxCompute支持的字段类型。
         * @example `string`
         */
        ColumnType: string;
    }[];
}
