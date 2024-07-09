export interface ListQualityResultsByEntityResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `You have no permission.`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `CBA58543-00D4-41****`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `401`
     */
    ErrorCode: string;
    /**
     * 校验结果的顶层结构体。
     */
    Data: {
        /**
         * 页码数。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页显示的条数，默认为10条，最大100条。
         * @example `10`
         */
        PageSize: number;
        /**
         * 数据的总记录数。
         * @example `50`
         */
        TotalCount: number;
        /**
         * 校验结果的列表。
         */
        RuleChecks: {
            /**
             * 校验规则的强弱。强弱表示规则的重要程度。取值如下：
             * - 1，表示强规则。
             * - 0，表示弱规则。
             * 您可以根据实际需求设置重要的规则为强规则。如果使用强规则并触发了红色告警，则会阻塞调度任务。
             * @example `0`
             */
            BlockType: number;
            /**
             * 橙色阈值。表示与样本预期的偏离程度，您可以根据业务需求自定义该阈值。
             * @example `0.1`
             */
            WarningThreshold: number;
            /**
             * 规则属性的字段，即被校验数据源表的column名称。
             * @example `type`
             */
            Property: string;
            /**
             * 进行校验的表名称。
             * @example `dual`
             */
            TableName: string;
            /**
             * 校验规则的描述。
             * @example `规则的描述信息。`
             */
            Comment: string;
            /**
             * 校验结果状态参数与产品界面中的状态信息一致，取值有以下几种：
             * - 0：正常
             * - 1：橙色告警
             * - 2：红色告警
             * @example `0`
             */
            CheckResultStatus: number;
            /**
             * 使用的校验模板的名称。
             * @example `字段唯一值个数期望值校验`
             */
            TemplateName: string;
            /**
             * 校验器的名称。
             * @example `fulx`
             */
            CheckerName: string;
            /**
             * 规则ID。
             * @example `123123232`
             */
            RuleId: number;
            /**
             * 是否为固定值校验。取值如下：
             * - true：是固定值校验。
             * - false：非固定值校验。
             * @example `false`
             */
            FixedCheck: boolean;
            /**
             * 比较符。
             * @example `>`
             */
            Op: string;
            /**
             * 预测上限。设置阈值后自动生成。
             * @example `25555`
             */
            UpperValue: number;
            /**
             * 被校验的数据源表的实际分区。
             * @example `ds=20200912`
             */
            ActualExpression: string;
            /**
             * 调度任务的节点ID。
             * @example `1112323123`
             */
            ExternalId: string;
            /**
             * 执行校验任务花费的时间，单位为秒。
             * @example `202`
             */
            TimeCost: string;
            /**
             * 校验结果的趋势。
             * @example `abs`
             */
            Trend: string;
            /**
             * 调度系统的类型。目前仅支持CWF。
             * @example `CWF2`
             */
            ExternalType: string;
            /**
             * 业务日期。如果被校验的业务主体为离线数据，则业务日期通常为执行校验操作的前一天。
             * @example `1600704000000`
             */
            BizDate: number;
            /**
             * 校验结果参数的结果通常与CheckResultStatus一致，取值有以下几种：
             * - 0：正常
             * - 1：橙色告警
             * - 2：红色告警
             * @example `0`
             */
            CheckResult: number;
            /**
             * 校验结果的字符串形式。
             * @example `test`
             */
            ResultString: string;
            /**
             * 分区表达式。
             * @example `ds=$[yyyymmdd]`
             */
            MatchExpression: string;
            /**
             * 校验类型。取值如下：
             * - 0，固定值
             * - 1，波动校验
             * - 2，动态阈值
             * @example `1`
             */
            CheckerType: number;
            /**
             * 需要进行数据质量校验的引擎或者数据源名称。
             * @example `autotest`
             */
            ProjectName: string;
            /**
             * 执行校验操作的开始时间。
             * @example `1600704000000`
             */
            BeginTime: number;
            /**
             * 调度周期的类型。通常为YMD，即年任务、月任务、天任务。
             * @example `YMD`
             */
            DateType: string;
            /**
             * 红色阈值。表示与样本预期的偏离程度。您可以根据业务需求自定义该阈值。使用强规则并触发红色阈值，会阻塞调度任务。
             * @example `0.5`
             */
            CriticalThreshold: number;
            /**
             * 是否为预测的结果。取值如下：
             * - true：是预测的结果。
             * - false：不是预测的结果。
             * @example `true`
             */
            IsPrediction: boolean;
            /**
             * 规则的名称。
             * @example `规则的名称。`
             */
            RuleName: string;
            /**
             * 校验器的ID。
             * @example `7`
             */
            CheckerId: number;
            /**
             * 是否为离散校验。取值如下：
             * - true：是离散校验。
             * - false：非离散校验。
             * @example `true`
             */
            DiscreteCheck: boolean;
            /**
             * 查询校验结果的截止时间。
             * @example `1600704000000`
             */
            EndTime: number;
            /**
             * 采集样本数据的方法。包括avg、count、sum、min、max、count_distinct、user_defined、table_count、table_size、table_dt_load_count、table_dt_refuseload_count、null_value、null_value/table_count、(table_count-count_distinct)/table_count、table_count-count_distinct等。
             * @example `count_distinct`
             */
            MethodName: string;
            /**
             * 预测结果的下限。根据您设置的阈值自动生成。
             * @example `2344`
             */
            LowerValue: number;
            /**
             * 分区表达式ID。
             * @example `15432322`
             */
            EntityId: number;
            /**
             * 校验任务使用的规则过滤条件。
             * @example `id>0`
             */
            WhereCondition: string;
            /**
             * 期望值。
             * @example `200`
             */
            ExpectValue: number;
            /**
             * 使用的校验模板的ID。
             * @example `5`
             */
            TemplateId: number;
            /**
             * 校验任务的ID。
             * @example `16008552981681a0d6****`
             */
            TaskId: string;
            /**
             * 主键ID。
             * @example `121212121`
             */
            Id: number;
            /**
             * 历史样本值。
             */
            ReferenceValue: {
                /**
                 * 通过group by分组后的样本字段取值。例如group by性别字段，则DiscreteProperty为男生、女生和null。
                 * @example `0`
                 */
                DiscreteProperty: string;
                /**
                 * 校验值。
                 * @example `19`
                 */
                Value: number;
                /**
                 * 业务日期。如果被校验的业务主体为离线数据，则业务日期通常为执行校验操作的前一天。
                 * @example `2020-12-03`
                 */
                BizDate: string;
                /**
                 * 校验结果。
                 * @example `0`
                 */
                SingleCheckResult: number;
                /**
                 * 阈值。
                 * @example `0.5`
                 */
                Threshold: number;
            }[];
            /**
             * 当前使用的样本。
             */
            SampleValue: {
                /**
                 * 通过group by分组后的样本字段取值。例如group by性别字段，则DiscreteProperty为男生、女生和null。
                 * @example `0`
                 */
                DiscreteProperty: string;
                /**
                 * 业务日期。如果被校验的业务主体为离线数据，则业务日期通常为执行校验操作的前一天。
                 * @example `2020-12-03`
                 */
                BizDate: string;
                /**
                 * 当前样本值。
                 * @example `19`
                 */
                Value: number;
            }[];
        }[];
    };
}
