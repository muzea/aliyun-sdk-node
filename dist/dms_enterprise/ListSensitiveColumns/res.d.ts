export interface ListSensitiveColumnsResponse {
    /**
     * 数据总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `09D82FD7-F87F-59EF-AA82-AEF71B09E306`
     */
    RequestId: string;
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
    SensitiveColumnList: {
        /**
         * 敏感字段列表。
         */
        SensitiveColumn: {
            /**
             * 字段名。
             * @example `test_column`
             */
            ColumnName: string;
            /**
             * 表名。
             * @example `test_table`
             */
            TableName: string;
            /**
             * 字段敏感等级，返回值如下：
             * - SENSITIVE： 敏感
             * - CONFIDENTIAL： 机密
             * @example `SENSITIVE`
             */
            SecurityLevel: string;
            /**
             * 敏感字段个数。
             * @example `1`
             */
            ColumnCount: number;
            /**
             * 数据库名。
             * @example `test_schema`
             */
            SchemaName: string;
            /**
             * 脱敏算法类型，返回值如下：
             * - DEFAULT：全遮掩（默认）
             * - FIX_POS：固定位置
             * - FIX_CHAR：固定字符
             * @example `DEFAULT`
             */
            FunctionType: string;
        }[];
    };
    /**
     * 请求是否成功，返回值如下：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
