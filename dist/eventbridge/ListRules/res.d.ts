export interface ListRulesResponse {
    /**
     * 错误信息。
     * @example `Specified parameter Limit is not valid.`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `C7043799-F4DA-5290-9249-97C35987****`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 如果还有多余的返回值则会返回NextToken。
         * @example `1000`
         */
        NextToken: string;
        /**
         * 总条数。
         * @example `6`
         */
        Total: number;
        /**
         * 规则列表。
         */
        Rules: {
            /**
             * 详细信息。
             */
            DetailMap: any;
            /**
             * 规则的状态。取值说明如下：
             * - ENABLE：规则已启用。规则默认状态。
             * - DISABLE：规则已禁用。
             * @example `ENABLE`
             */
            Status: string;
            /**
             * 事件总线的名称。
             * @example `demo`
             */
            EventBusName: string;
            /**
             * 规则ARN。
             * @example `acs:eventbridge:cn-hangzhou:123456789098****:eventbus/default/rule/myRule3`
             */
            RuleARN: string;
            /**
             * 规则描述。
             * @example `demo`
             */
            Description: string;
            /**
             * 事件目标列表。
             */
            Targets: {
                /**
                 * 事件目标类型。更多信息，请参见[事件目标参数](~~185887~~)。
                 * @example `acs.mns.queue
                `
                 */
                Type: string;
                /**
                 * 投递端点链接。
                 * @example `acs:mns:cn-hangzhou:123456789098****:queues/myqueue`
                 */
                Endpoint: string;
                /**
                 * 自定义事件目标Id。
                 * @example `Mlm123456JHd2Rs****`
                 */
                Id: string;
                /**
                 * 发布选择器
                 * @example `PARAM_TRANSFORMER`
                 */
                PushSelector: string;
                /**
                 * 容错策略。取值说明如下： ALL：允许容错。允许异常容错，当异常发生时不会阻塞执行，超过重试策略后会根据配置将消息投递至死信队列或直接丢弃。 NONE：禁止容错。不允许容错，当异常发生并超过重试策略配置时会阻塞执行。
                 * @example `ALL`
                 */
                ErrorsTolerance: string;
            }[];
            /**
             * 事件模式，JSON格式。取值说明如下：
             * - stringEqual模式：每个field最多5个expression（map结构）。
             * - stringExpression模式：每个field最多5个expression（map结构）。
             * @example `{\"source\":[\"acs.oss\"],\"type\":[\"oss:BucketQueried:GetBucketStat\"]}
            `
             */
            FilterPattern: string;
            /**
             * 创建时间戳。
             * @example `1607071602000`
             */
            CreatedTimestamp: number;
            /**
             * 事件规则的名称
             * @example `tf-testacc-rule`
             */
            RuleName: string;
        }[];
    };
    /**
     * 接口返回码：Success：表示成功。                                 其它：表示错误码。错误码详情，请参见错误码。
     * @example `Success`
     */
    Code: string;
    /**
     * 操作成功返回true。
     * @example `true`
     */
    Success: boolean;
}
