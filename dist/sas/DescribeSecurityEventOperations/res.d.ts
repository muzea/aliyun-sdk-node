export interface DescribeSecurityEventOperationsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `B7A2000F-497E-5DA0-B14D-615CD410DD7E`
     */
    RequestId: string;
    /**
     * 处理告警事件的处理方式的详细信息。
     */
    SecurityEventOperationsResponse: {
        /**
         * 告警事件处理方式子操作的配置。
         * > 除了**OperationCode**值为**kill_and_quara**和**block_ip**此参数必填外，**OperationCode**为其他值的情况下，该参数值可为空。
         * @example `{"expireTime":1641566807783}`
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
         * 当时的云安全中心版本是否支持您对此告警进行处理。取值：
         * - **true**：允许
         * - **false**：不允许
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
             * @example `gmtModified`
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
             * 该告警事件发生的服务器的UUID。
             * @example `3d6b4a75-c28f-447b-9142-38f6252c****`
             */
            Uuid: string;
            /**
             * 加入白名单方式包含的具体操作的信息。
             */
            SupportedMisType: string[];
        }[];
        /**
         * 加白名单操作可选择的配置类型的信息。
         */
        MarkFieldsSource: {
            /**
             * 可配置白名单规则的加白字段。
             * @example `gmtModified`
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
             * 加入白名单方式包含的具体操作的信息。
             */
            SupportedMisType: string[];
        }[];
    }[];
}
