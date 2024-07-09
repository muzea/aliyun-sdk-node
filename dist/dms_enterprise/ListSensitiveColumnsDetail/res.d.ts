export interface ListSensitiveColumnsDetailResponse {
    /**
     * 请求ID。
     * @example `7629888F-C9FB-4D16-A7D3-B443FE06FBD4`
     */
    RequestId: string;
    SensitiveColumnsDetailList: {
        /**
         * 敏感字段详情列表。
         */
        SensitiveColumnsDetail: {
            /**
             * 数据库ID。
             * @example `1860****`
             */
            DbId: number;
            /**
             * 字段名。
             * @example `ColumnName_test`
             */
            ColumnName: string;
            /**
             * 字段描述。
             * @example `test`
             */
            ColumnDescription: string;
            /**
             * 表名。
             * @example `test`
             */
            TableName: string;
            /**
             * 数据库类型。
             * @example `mysql`
             */
            DbType: string;
            /**
             * 字段类型。
             * @example `varchar(32)`
             */
            ColumnType: string;
            /**
             * 是否为逻辑库，返回值如下：
             * - **true**：是
             * - **false**：否
             * @example `false`
             */
            Logic: boolean;
            /**
             * 数据库名。
             * @example `SchemaName_test`
             */
            SchemaName: string;
            /**
             * 数据库搜索名。
             * @example `test@xxx:3306`
             */
            SearchName: string;
            /**
             * 环境类型。
             * @example `product`
             */
            EnvType: string;
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
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
}
