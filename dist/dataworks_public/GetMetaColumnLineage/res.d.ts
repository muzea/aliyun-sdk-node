export interface GetMetaColumnLineageResponse {
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
     * 请求ID。
     * @example `0bc1ec92159376`
     */
    RequestId: string;
    /**
     * 请求是否成功。
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
         * 请求的数据页数，用于翻页。
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
         * @example `20`
         */
        TotalCount: number;
        /**
         * 实例数据列表。
         */
        DataEntityList: {
            /**
             * 字段的唯一标识。
             * @example `odps.engine_name.table_name.1`
             */
            ColumnGuid: string;
            /**
             * 字段的名称。
             * @example `1`
             */
            ColumnName: string;
            /**
             * 表名
             * @example `abc`
             */
            TableName: string;
            /**
             * 数据库名称
             * @example `abc`
             */
            DatabaseName: string;
            /**
             * emr集群ID
             * @example `abc`
             */
            ClusterId: string;
        }[];
    };
}
