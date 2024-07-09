export interface DescribeEventRuleAttributeResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The alert does not exist.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9AA3F210-C03D-4C86-8DB6-21C84FF692A1`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 事件报警规则详情。
     */
    Result: {
        /**
         * 事件类型。取值：
         * - SYSTEM：系统事件。
         * - CUSTOM：自定义事件。
         * @example `SYSTEM`
         */
        EventType: string;
        /**
         * 应用分组ID。
         * @example `3607****`
         */
        GroupId: string;
        /**
         * 事件报警规则的名称。
         * @example `test_DefaultEventRule_7378****`
         */
        Name: string;
        /**
         * 事件报警规则的描述信息。
         * @example `Default group event rule.`
         */
        Description: string;
        /**
         * 事件报警规则的状态。取值：
         * - ENABLED：启用。
         * - DISABLED：禁用。
         * @example `ENABLED`
         */
        State: string;
        /**
         * 事件模式。用于描述事件的触发条件。
         */
        EventPattern: {
            /**
             * 云产品名称。
             * @example `CloudMonitor`
             */
            Product: string;
            LevelList: {
                LevelList: string[];
            };
            StatusList: {
                StatusList: string[];
            };
            NameList: {
                NameList: string[];
            };
            EventTypeList: {
                /**
                 * 事件报警规则的类型列表。
                 */
                EventTypeList: string[];
            };
            /**
             * 按照SQL过滤日志。如果符合条件，则触发报警。
             * @example `ycccluster1 and (i-23ij0o82612 or Executed1) or Asimulated not 222`
             */
            SQLFilter: string;
            /**
             * 过滤关键词。
             */
            KeywordFilterObj: {
                Keywords: {
                    /**
                     * 事件匹配的关键字列表。
                     */
                    keyword: string[];
                };
                /**
                 * 多个关键字的条件。取值：
                 * - OR： 多个关键字之间或的关系。
                 * - NOT：不包含关键字。表示匹配非关键字列表中的所有事件。
                 * @example `OR`
                 */
                Relation: string;
            };
        };
    };
}
