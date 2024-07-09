export interface GetMetaTableColumnResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `The connection does not exist.`
     */
    ErrorMessage: string;
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `0bc1ec92159376`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ConnectionNotExists`
     */
    ErrorCode: string;
    /**
     * 业务数据。
     */
    Data: {
        /**
         * 请求获取的数据页码数，用于翻页。
         * @example `1`
         */
        PageNum: number;
        /**
         * 每页显示的条数，默认为10条，最大100条。
         * @example `10`
         */
        PageSize: number;
        /**
         * 字段的总数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 字段的信息。
         */
        ColumnList: {
            /**
             * 字段的唯一标识。
             * @example `odps.engine_name.table_name.name`
             */
            ColumnGuid: string;
            /**
             * 字段的名称。
             * @example `name`
             */
            ColumnName: string;
            /**
             * 字段是否为分区字段，取值如下：
             * - true，是分区字段。
             * - false，不是分区字段。
             * @example `false`
             */
            IsPartitionColumn: boolean;
            /**
             * 字段的备注。
             * @example `comment `
             */
            Comment: string;
            /**
             * 字段的类型。
             * @example `string`
             */
            ColumnType: string;
            /**
             * 字段是否为主键，取值如下：
             * - true，是主键。
             * - false，不是主键。
             * @example `false`
             */
            IsPrimaryKey: boolean;
            /**
             * 字段的排序。
             * @example `1`
             */
            Position: number;
            /**
             * 字段的描述。
             * @example `data column`
             */
            Caption: string;
            /**
             * 字段是否为外键，取值如下：
             * - true，是外键。
             * - false，不是外键。
             * @example `true`
             */
            IsForeignKey: boolean;
            /**
             * 字段热度。
             * @example `2`
             */
            RelationCount: number;
        }[];
    };
}
