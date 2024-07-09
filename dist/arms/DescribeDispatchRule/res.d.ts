export interface DescribeDispatchRuleResponse {
    /**
     * 请求ID。
     * @example `34ED024E-9E31-434A-9E4E-D9D15C3****`
     */
    RequestId: string;
    /**
     * 返回结构体。
     */
    DispatchRule: {
        /**
         * 分派策略名称。
         * @example `Prometheus Alert`
         */
        Name: string;
        /**
         * 是否发送恢复的告警。
         * - `true`：发送
         * - `false`：不发送
         * @example `true`
         */
        IsRecover: boolean;
        /**
         * 告警处理方式。
         * - CREATE_ALERT：生成报警。
         * - DISCARD_ALERT：丢弃报警事件，即不告警。
         * @example `CREATE_ALERT`
         */
        DispatchType: string;
        /**
         * 是否启用该分派策略。
         * - `true`：启用
         * - `false`：关闭
         * @example `true`
         */
        State: string;
        /**
         * 分派规则ID。
         * @example `10282`
         */
        RuleId: number;
        /**
         * 事件分组。
         */
        GroupRules: {
            /**
             * 重复告警静默时间。所有告警会以设置的时间间隔循环发送告警信息直至告警消失，单位为秒。
             * @example `20`
             */
            RepeatInterval: number;
            /**
             * 分组ID。
             * @example `1`
             */
            GroupId: number;
            /**
             * 分组等待时间。
             * @example `10`
             */
            GroupWaitTime: number;
            /**
             * 分组间隔时间。
             * @example `15`
             */
            GroupInterval: number;
            /**
             * 分组字段列表。
             */
            GroupingFields: string[];
        }[];
        /**
         * 通知方式集合。
         */
        NotifyRules: {
            /**
             * 通知对象集合。
             */
            NotifyObjects: {
                /**
                 * 联系人或联系人组的ID。
                 * @example `1`
                 */
                NotifyObjectId: string;
                /**
                 * 通知对象类型：
                 * - `CONTACT`：联系人
                 * - `CONTACT_GROUP`：联系人组
                 * @example `CONTACT`
                 */
                NotifyType: string;
                /**
                 * 联系人或联系人组的名称。
                 * @example `JohnDoe`
                 */
                Name: string;
            }[];
            /**
             * 通知方式列表。
             */
            NotifyChannels: string[];
        }[];
        /**
         * 分派规则。
         */
        LabelMatchExpressionGrid: {
            /**
             * 分派条件集合。
             */
            LabelMatchExpressionGroups: {
                /**
                 * 分派规则的条件。
                 */
                LabelMatchExpressions: {
                    /**
                     * 分派条件标签：
                     * - `_aliyun_arms_userid` ：用户ID
                     * -  `_aliyun_arms_involvedObject_kind`：关联对象类型
                     * -  `_aliyun_arms_involvedObject_id`：关联对象ID
                     * - `_aliyun_arms_involvedObject_name`：关联对象名称
                     * - `_aliyun_arms_alert_name`：告警名称
                     * - `_aliyun_arms_alert_rule_id`：告警规则对应的ID
                     * - `_aliyun_arms_alert_type`：告警类型
                     * - `_aliyun_arms_alert_level`：告警等级
                     * @example `_aliyun_arms_involvedObject_kind`
                     */
                    Key: string;
                    /**
                     * 标签取值。
                     * @example `app`
                     */
                    Value: string;
                    /**
                     * 选项：
                     * - `eq`：等于
                     * - `re`：匹配正则
                     * @example `eq`
                     */
                    Operator: string;
                }[];
            }[];
        };
    };
}
