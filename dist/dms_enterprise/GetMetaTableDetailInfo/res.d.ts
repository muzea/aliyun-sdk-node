export interface GetMetaTableDetailInfoResponse {
    /**
     * 请求ID。
     * @example `E881CB2F-DE42-42E5-90EB-8B3173DCB9B9`
     */
    RequestId: string;
    /**
     * 表详情。
     */
    DetailInfo: {
        /**
         * 索引列表。
         */
        IndexList: {
            /**
             * 索引字段列表。
             */
            IndexColumns: string[];
            /**
             * 索引名。
             * @example `PRIMARY`
             */
            IndexName: string;
            /**
             * 是否为唯一索引。取值：
             * - true：是唯一索引。
             * - false：不是唯一索引。
             * @example `false`
             */
            Unique: boolean;
            /**
             * 索引类型。例如：Primary、Unique、Normal。
             * @example `Primary`
             */
            IndexType: string;
            /**
             * 索引ID。
             * @example `123`
             */
            IndexId: string;
        }[];
        /**
         * 字段列表。
         */
        ColumnList: {
            /**
             * 字段名。
             * @example `id`
             */
            ColumnName: string;
            /**
             * 字段描述。
             * @example `test`
             */
            Description: string;
            /**
             * 该字段小数后的位数。
             * @example `0`
             */
            DataScale: number;
            /**
             * 字段精度。
             * @example `0`
             */
            DataPrecision: number;
            /**
             * 字段的数据类型。例如：Bigint 、Int、Varchar。
             * @example `bigint(20) unsigned`
             */
            ColumnType: string;
            /**
             * 当前字段是否自增。取值：
             * - true：自增。
             * - false：不自增。
             * @example `true`
             */
            AutoIncrement: boolean;
            /**
             * 字段在表中的顺序。
             * @example `1`
             */
            Position: string;
            /**
             * 是否可空。取值：
             * - true：允许为空。
             * - false：不允许为空。
             * @example `false`
             */
            Nullable: boolean;
            /**
             * 字段ID。
             * @example `191234849`
             */
            ColumnId: string;
            /**
             * 字段长度。
             * @example `0`
             */
            DataLength: number;
        }[];
    };
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
