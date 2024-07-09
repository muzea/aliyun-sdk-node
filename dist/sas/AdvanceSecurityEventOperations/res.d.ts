export interface AdvanceSecurityEventOperationsResponse {
    /**
     * 结果的请求id。
     * @example `A4EB8B1C-1DEC-5E18-BCD0-XXXXXXXXX`
     */
    RequestId: string;
    /**
     * 处理告警事件的操作类型。
     */
    SecurityEventOperationsResponse: {
        /**
         * 告警事件处理方式子操作的配置。
         * @example `{\"subOperation\":\"killByMd5andPath\"}`
         */
        OperationParams: string;
        /**
         * 告警的处理方式。取值：
         * - **block_ip**：阻断
         * - **advance\_mark\_mis_info**：加白名单
         * - **ignore**：忽略
         * - **manual_handled**：我已手工处理
         * - **kill_process**：结束进程
         * - **cleanup**：深度查杀
         * - **kill\_and_quara**：病毒查杀
         * - **disable\_malicious_defense**：关闭恶意行为防御
         * - **client\_problem_check**：问题排查
         * - **quara**：隔离
         * @example `advance_mark_mis_info`
         */
        OperationCode: string;
        /**
         * 是否可操作。
         * - **true** : 可操作。
         * - **false** : 不可操作。
         * @example `false`
         */
        UserCanOperate: boolean;
        /**
         * 当处理方式为**advance\_mark\_mis_info**时的配置信息。
         */
        MarkField: {
            /**
             * 已配置的白名单规则中的通配符。取值：
             * - **contains**：包含
             * - **notContains**：不包含
             * - **regex**：正则
             * - **strEqual**：等于
             * - **strNotEqual**：不等于
             * @example `contains`
             */
            MarkMisType: string;
            /**
             * 已配置白名单规则的加白字段。
             * @example `filePath`
             */
            FiledName: string;
            /**
             * 已配置白名单规则的加白字段的名称。
             * @example `file path`
             */
            FiledAliasName: string;
            /**
             * 已配置白名单规则的规则值。
             * @example `2022-04-25 10:11:04`
             */
            MarkMisValue: string;
            /**
             * 已配置的白名单规则支持修改的通配符类型。取值：
             * - **contains**：包含
             * - **notContains**：不包含
             * - **regex**：正则
             * - **strEqual**：等于
             * - **strNotEqual**：不等于
             */
            SupportedMisType: string[];
        }[];
        /**
         * 高级加白返回的元数据配置信息。
         */
        MarkFieldsSource: {
            /**
             * 可配置白名单规则的加白字段。
             * @example `filePath`
             */
            FiledName: string;
            /**
             * 可配置白名单规则的加白字段的名称。
             * @example `file path`
             */
            FiledAliasName: string;
            /**
             * 配置白名单规则的规则值。
             * @example `contains`
             */
            MarkMisValue: string;
            /**
             * 白名单规则中支持的通配符。取值：
             * - **contains**：包含
             * - **notContains**：不包含
             * - **regex**：正则
             * - **strEqual**：等于
             * - **strNotEqual**：不等于
             */
            SupportedMisType: string[];
        }[];
    }[];
}
