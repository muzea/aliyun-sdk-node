export interface ListColumnsResponse {
    /**
     * 请求ID。
     * @example `0AD9AC55-5873-474A-9F33-4285806A3619`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    ColumnList: {
        /**
         * 列信息详情。
         */
        Column: {
            /**
             * 字段类型。
             * @example `varchar`
             */
            ColumnType: string;
            /**
             * 当前字段是否自增。返回值如下：
             * - true：自增。
             * - false：不自增。
             * @example `false`
             */
            AutoIncrement: boolean;
            /**
             * 字段ID。
             * @example `62589****`
             */
            ColumnId: string;
            /**
             * 字段默认值。
             * @example `def_value`
             */
            DefaultValue: string;
            /**
             * 是否敏感字段，返回值如下：
             * - **true**：敏感字段
             * - **false**：非敏感字段
             * @example `false`
             */
            Sensitive: boolean;
            /**
             * 字段名。
             * @example `name`
             */
            ColumnName: string;
            /**
             * 安全级别，返回值如下：
             * - INNER：内部（非敏感）
             * - SENSITIVE：敏感
             * - CONFIDENTIAL：机密
             * > 更多信息，请参见[字段安全等级](~~66091~~)。
             * @example `INNER`
             */
            SecurityLevel: string;
            /**
             * 字段描述。
             * @example `test`
             */
            Description: string;
            /**
             * 字段的有效数字位数。
             * @example `0`
             */
            DataPrecision: number;
            /**
             * 字段的小数位数。
             * @example `0`
             */
            DataScale: number;
            /**
             * 字段遮掩算法类型，返回值如下：
             * - null：无遮掩
             * - DEFAULT：全遮掩
             * - FIX_POS：固定位置遮掩
             * - FIX_CHAR：固定字符替换
             * @example `DEFAULT`
             */
            FunctionType: string;
            /**
             * 字段是否可空，返回值如下：
             * - **true**：可空
             * - **false**：不可空
             * @example `false`
             */
            Nullable: boolean;
            /**
             * 字段长度。
             * @example `4`
             */
            DataLength: number;
        }[];
    };
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
