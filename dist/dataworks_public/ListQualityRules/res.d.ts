export interface ListQualityRulesResponse {
    /**
     * HTTP返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID，用于后续错误排查使用。
     * @example `38cbdef0-f6cf-49****`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `You have no permission.`
     */
    ErrorMessage: string;
    /**
     * 调用是否成功，取值如下：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ConnectionNotExists`
     */
    ErrorCode: string;
    /**
     * 获取的规则列表。
     */
    Data: {
        /**
         * 页码数。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页显示的条数，默认为10条，最大为100条。
         * @example `20`
         */
        PageSize: number;
        /**
         * 返回数据总量。
         * @example `400`
         */
        TotalCount: number;
        /**
         * 校验规则的详情。
         */
        Rules: {
            /**
             * 校验规则的强弱。强弱表示规则的重要程度。取值如下：
             * - 1，表示强规则。
             * - 0，表示弱规则。
             * 您可以根据实际需求设置重要的规则为强规则。如果使用强规则并触发了红色告警，则会阻塞调度任务。
             * @example `0`
             */
            BlockType: number;
            /**
             * 配置校验规则的阿里云账号名称。
             * @example `test`
             */
            OnDutyAccountName: string;
            /**
             * 字段的名称。
             * @example `id`
             */
            Property: string;
            /**
             * 橙色告警阈值。表示与样本预期的偏离程度，您可以根据业务需求自定义该阈值。
             * @example `10`
             */
            WarningThreshold: string;
            /**
             * 表的名称。
             * @example `dual`
             */
            TableName: string;
            /**
             * 配置校验规则的账号ID。
             * @example `1912****`
             */
            OnDuty: string;
            /**
             * 规则的描述信息。
             * @example `校验表规则`
             */
            Comment: string;
            /**
             * 规则详情的内部关联ID。
             * @example `132323`
             */
            RuleCheckerRelationId: number;
            /**
             * 固定值校验。
             * @example `true`
             */
            FixCheck: boolean;
            /**
             * 采集样本数据方法的ID。
             * @example `21`
             */
            MethodId: number;
            /**
             * 使用的校验模板的名称。
             * @example `sql任务表行数，1、7、30天波动检测`
             */
            TemplateName: string;
            /**
             * 校验结果的趋势。
             * @example `abs`
             */
            Trend: string;
            /**
             * 历史橙色告警阈值。
             * @example `history max:40%,history min:10%`
             */
            HistoryWarningThreshold: string;
            /**
             * 规则的类型：
             * - 0表示系统创建。
             * - 1表示用户创建。
             * - 2表示项目级规则。
             * @example `0`
             */
            RuleType: number;
            /**
             * 分区表达式。
             * @example `dt=$[yyyymmdd]`
             */
            MatchExpression: string;
            /**
             * 引擎或者数据源的名称。
             * @example `autotest`
             */
            ProjectName: string;
            /**
             * 用于数据质量前端规则联动，可以忽略。
             * @example `table_count`
             */
            PropertyKey: string;
            /**
             * 红色告警阈值。表示与样本预期的偏离程度。您可以根据业务需求自定义该阈值。使用强规则并触发红色阈值，会阻塞调度任务。
             * @example `40`
             */
            CriticalThreshold: string;
            /**
             * 历史红色告警阈值。
             * @example `history max:80%,history min:50%`
             */
            HistoryCriticalThreshold: string;
            /**
             * 采集样本数据方法的名称。包括avg、count、sum、min、max、count_distinct、user_defined、table_count、table_size、table_dt_load_count、table_dt_refuseload_count、null_value、null_value/table_count、(table_count-count_distinct)/table_count、table_count-count_distinct等。
             * @example `count/table_count`
             */
            MethodName: string;
            /**
             * 校验器ID。
             * @example `7`
             */
            CheckerId: number;
            /**
             * 分区表达式的ID。
             * @example `1234`
             */
            EntityId: number;
            /**
             * 期望值。
             * @example `1000`
             */
            ExpectValue: string;
            /**
             * 使用的校验模板的ID。
             * @example `7`
             */
            TemplateId: number;
            /**
             * 规则的ID。
             * @example `1234`
             */
            Id: number;
            /**
             * 规则名称。
             * @example `test`
             */
            RuleName: string;
        }[];
    };
}
