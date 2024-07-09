export interface DescribeEventRuleListResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `User not authorized to operate on the specified resource.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `D0E6D82B-16B5-422A-8136-EE5BDC01E415`
     */
    RequestId: string;
    /**
     * 总记录条数。
     * @example `21`
     */
    Total: number;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    EventRules: {
        /**
         * 事件报警规则。
         */
        EventRule: {
            /**
             * 事件报警类型。取值：
             * - SYSTEM：系统事件。
             * - CUSTOM：自定义事件。
             * @example `SYSTEM`
             */
            EventType: string;
            /**
             * 事件报警规则的描述信息。
             * @example `Default group event rule.`
             */
            Description: string;
            /**
             * 应用分组ID。
             * @example `7378****`
             */
            GroupId: string;
            /**
             * 事件报警规则名称。
             * @example `test_DefaultEventRule_7378****`
             */
            Name: string;
            /**
             * 事件报警规则状态。取值：
             * - ENABLED：启用。
             * - DISABLED：禁用。
             * @example `ENABLED`
             */
            State: string;
            EventPattern: {
                /**
                 * 事件报警规则的模式。
                 */
                EventPattern: {
                    /**
                     * 云服务名称的缩写。
                     * @example `CloudMonitor`
                     */
                    Product: string;
                    LevelList: {
                        /**
                         * 事件的等级列表。
                         */
                        LevelList: string[];
                    };
                    EventTypeList: {
                        /**
                         * 事件报警规则的类型列表。
                         */
                        EventTypeList: string[];
                    };
                    NameList: {
                        /**
                         * 事件名称列表。
                         */
                        NameList: string[];
                    };
                    /**
                     * 自定义过滤条件。
                     * @example `ECS123`
                     */
                    CustomFilters: string;
                    /**
                     * 过滤关键词。
                     */
                    KeywordFilter: {
                        Keywords: {
                            /**
                             * 事件匹配的关键字列表。
                             */
                            Keywords: string[];
                        };
                        /**
                         * 多个关键字的条件。取值：
                         * - OR： 多个关键字之前是或的关系。
                         * - NOT：不包含关键字。表示匹配非关键字列表中的所有事件。
                         * @example `OR`
                         */
                        Relation: string;
                    };
                    /**
                     * 按照SQL过滤日志。如果符合条件，则触发报警。
                     * @example `ycccluster1 and (i-23ij0o82612 or Executed1) or Asimulated not 222`
                     */
                    SQLFilter: string;
                }[];
            };
            /**
             * 通道沉默周期。
             * @example `86400`
             */
            SilenceTime: number;
        }[];
    };
}
