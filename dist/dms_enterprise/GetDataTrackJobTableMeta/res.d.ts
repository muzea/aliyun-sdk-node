export interface GetDataTrackJobTableMetaResponse {
    /**
     * 请求ID。
     * @example `0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 表元数据信息列表。
     */
    TableMetaList: {
        /**
         * 数据库名称。
         * @example `DB165`
         */
        SchemaName: string;
        /**
         * 表名。
         * @example `live_stat`
         */
        TableName: string;
        /**
         * 字段信息列表。
         */
        Columns: {
            /**
             * 字段名。
             * @example `claimantno`
             */
            ColumnName: string;
            /**
             * 字段的位置。
             * @example `1`
             */
            ColumnPosition: number;
            /**
             * 字段的数据类型。例如：BIGINT 、INT、VARCHAR。
             * @example `BIGINT`
             */
            ColumnType: string;
            /**
             * 字段是否是虚拟列。取值：
             * - **true**
             * - **false**
             * @example `false`
             */
            Fictive: boolean;
            /**
             * 字符集名称。
             * @example `utf8mb4`
             */
            Charset: string;
        }[];
    }[];
}
