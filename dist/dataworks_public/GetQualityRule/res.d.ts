export interface GetQualityRuleResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `576b9457-2cf5-4****`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `You have no permission.`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `401`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 获取的规则信息。
     */
    Data: {
        /**
         * 校验规则的强弱。强弱表示规则的重要程度。取值如下：
         * - 1，表示强规则。
         * - 0，表示弱规则。
         * 您可以根据实际需求设置重要的规则为强规则。如果使用强规则并触发了红色告警，则会阻塞调度任务。
         * @example `1`
         */
        BlockType: number;
        /**
         * 配置校验规则的阿里云账号名称。
         * @example `test`
         */
        OnDutyAccountName: string;
        /**
         * 橙色告警阈值。表示与样本预期的偏离程度，您可以根据业务需求自定义该阈值。
         * @example `10`
         */
        WarningThreshold: string;
        /**
         * 规则属性的字段，即被校验数据源表的column名称。
         * @example `id`
         */
        Property: string;
        /**
         * 规则的类型。
         * @example `0`
         */
        RuleType: number;
        /**
         * 校验规则的描述信息。
         * @example `校验主键唯一`
         */
        Comment: string;
        /**
         * 配置校验规则的账号ID。
         * @example `1822931****`
         */
        OnDuty: string;
        /**
         * 校验器ID。该字段对应前端的ID标识，需要由pkId转换。
         * @example `9`
         */
        Checker: number;
        /**
         * 固定值校验。
         * @example `true`
         */
        FixCheck: boolean;
        /**
         * 采集样本数据方法的ID。
         * @example `8`
         */
        MethodId: number;
        /**
         * 红色告警阈值。表示与样本预期的偏离程度。您可以根据业务需求自定义该阈值。使用强规则并触发红色阈值，会阻塞调度任务。
         * @example `20`
         */
        CriticalThreshold: string;
        /**
         * 是否为动态阈值：
         * - 0表示非动态阈值。
         * - 1表示动态阈值规则。
         * @example `0`
         */
        PredictType: number;
        /**
         * 使用的校验模板的名称。
         * @example `SQL task table rows, 1,7, 30 days fluctuation test`
         */
        TemplateName: string;
        /**
         * 校验器的名称。
         * @example `compared with a fixed value`
         */
        CheckerName: string;
        /**
         * 规则的名称。
         * @example `查看表波动`
         */
        RuleName: string;
        /**
         * 采集样本数据方法的名称。包括avg、count、sum、min、max、count_distinct、user_defined、table_count、table_size、table_dt_load_count、table_dt_refuseload_count、null_value、null_value/table_count、(table_count-count_distinct)/table_count、table_count-count_distinct等。
         * @example `table_count`
         */
        MethodName: string;
        /**
         * 分区表达式的ID。
         * @example `165523`
         */
        EntityId: number;
        /**
         * 校验任务使用的过滤条件或自定义SQL语句。
         * @example `id>10`
         */
        WhereCondition: string;
        /**
         * 操作符。
         * @example `>=`
         */
        Operator: string;
        /**
         * 期望值。
         * @example `30`
         */
        ExpectValue: string;
        /**
         * 校验结果的趋势。
         * @example `abs`
         */
        Trend: string;
        /**
         * 使用的校验模板的ID。
         * @example `7`
         */
        TemplateId: number;
        /**
         * 规则的ID。
         * @example `123232`
         */
        Id: number;
        /**
         * 规则是否开启
         * @example `true`
         */
        OpenSwitch: boolean;
        TaskSetting: string;
    };
}
