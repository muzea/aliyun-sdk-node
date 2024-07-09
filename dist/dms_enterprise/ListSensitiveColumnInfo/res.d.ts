export interface ListSensitiveColumnInfoResponse {
    /**
     * 请求 ID，用于定位日志，排查问题。
     * @example `0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931`
     */
    RequestId: string;
    /**
     * 错误码，请求异常时返回。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    SensitiveColumnList: {
        /**
         * 敏感字段详情列表。
         */
        SensitiveColumn: {
            /**
             * 实例ID。
             * @example `183****`
             */
            InstanceId: number;
            /**
             * 数据库名。
             * @example `test_schema`
             */
            SchemaName: string;
            /**
             * 表名。
             * @example `test_table`
             */
            TableName: string;
            /**
             * 字段名。
             * @example `test_column`
             */
            ColumnName: string;
            /**
             * 分类名称。
             * @example `默认分类`
             */
            CategoryName: string;
            /**
             * 标注该敏感序列的字段是否以明文展示。
             * @example `False`
             */
            IsPlain: boolean;
            /**
             * 字段敏感等级，返回值如下：
             * - 低
             * - 中
             * - 高
             * @example `低`
             */
            SecurityLevel: string;
            /**
             * 用户定义的敏感等级。
             * @example `S1`
             */
            UserSensitivityLevel: string;
            /**
             * 抽样数据。
             * @example `西安市`
             */
            SampleData: string;
            /**
             * 默认的脱敏算法信息。
             */
            DefaultDesensitizationRule: {
                /**
                 * 脱敏算法ID。
                 * @example `101**`
                 */
                RuleId: number;
                /**
                 * 脱敏算法名称。
                 * @example `test`
                 */
                RuleName: string;
            };
            SemiDesensitizationRuleList: {
                /**
                 * 半脱敏算法列表。
                 */
                SemiDesensitizationRule: {
                    /**
                     * 半脱敏算法ID。
                     * @example `10***`
                     */
                    RuleId: number;
                    /**
                     * 半脱敏算法名称。
                     * @example `test01`
                     */
                    RuleName: string;
                }[];
            };
        }[];
    };
    /**
     * 请求是否成功。返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据总数。
     * @example `1`
     */
    TotalCount: number;
}
