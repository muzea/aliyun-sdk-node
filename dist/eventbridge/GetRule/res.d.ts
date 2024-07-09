export interface GetRuleResponse {
    /**
     * 错误信息。
     * @example `The event rule not existed!`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `2BC1857D-E633-5E79-B2C2-43EF5F7730D8`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 规则的状态。取值说明如下：
         * ENABLE：规则已启用。规则默认状态。
         * DISABLE：规则已禁用。
         * @example `ENABLE`
         */
        Status: string;
        /**
         * 事件总线的名称。
         * @example `Housekeeping-Bus`
         */
        EventBusName: string;
        /**
         * 规则ARN。
         * @example `acs:eventbridge:cn-hangzhou:123456789098****:eventbus/default/rule/myRule3`
         */
        RuleARN: string;
        /**
         * 规则说明。
         * @example `test`
         */
        Description: string;
        /**
         * 事件目标列表。
         */
        Targets: {
            /**
             * 详细信息
             */
            DetailMap: any;
            /**
             * 事件目标类型。更多信息，请参见[事件目标参数](~~185887~~)。
             * @example `acs.mns.queue`
             */
            Type: string;
            /**
             * 投递端点链接。
             * @example `acs:mns:cn-hangzhou:123456789098****:queues/myqueue`
             */
            Endpoint: string;
            /**
             * 事件目标的参数列表。
             */
            ParamList: {
                /**
                 * 事件目标参数的值。
                 * @example `{\"key\"=\"value\"}`
                 */
                Value: string;
                /**
                 * 事件目标参数模板样式。
                 * @example `The value of ${key} is ${value}!`
                 */
                Template: string;
                /**
                 * 事件目标参数的格式。更多信息，请参见[使用限制](~~163289~~)。
                 * @example `TEMPLATE`
                 */
                Form: string;
                /**
                 * 事件目标的资源参数。更多信息，请参见[使用限制](~~163289~~)。
                 * @example `body`
                 */
                ResourceKey: string;
            }[];
            /**
             * 发布选择器
             * @example `PARAM_TRANSFORMER`
             */
            PushSelector: string;
            /**
             * 自定义事件目标Id。
             * @example `Mlm123456JHd2RsRoKw
            `
             */
            Id: string;
            /**
             * 死信队列
             */
            DeadLetterQueue: {
                /**
                 * 查询到的死信队列在阿里云上的统一资源标识（ARN）。
                 * @example `acs:eventbridge:cn-hangzhou:164901546557****:eventbus/my-event-bus/eventsource/myRocketMQ.source`
                 */
                Arn: string;
            };
            /**
             * 推送重试策略。取值说明如下：
             * BACKOFF_RETRY：退避重试策略。重试3次，每次重试的间隔时间是10秒到20秒之间的随机值。
             * EXPONENTIAL_DECAY_RETRY：指数衰减重试。重试176次，每次重试的间隔时间指数递增至512秒，总计重试时间为1天；每次重试的具体间隔为：1，2，4，8，16，32，64，128，256，512，512...512秒（共167个512）。
             * @example `BACKOFF_RETRY`
             */
            PushRetryStrategy: string;
            ConcurrentConfig: {
                Concurrency: number;
            };
            /**
             * 容错策略。取值说明如下： ALL：允许容错。允许异常容错，当异常发生时不会阻塞执行，超过重试策略后会根据配置将消息投递至死信队列或直接丢弃。 NONE：禁止容错。不允许容错，当异常发生并超过重试策略配置时会阻塞执行。
             * @example `ALL`
             */
            ErrorsTolerance: string;
        }[];
        /**
         * 事件模式，JSON格式。取值说明如下：
         * stringEqual模式。
         * stringExpression模式 。
         * 每个field最多5个expression（map结构）。
         * 每个field最多5个expression（map结构）。
         * @example `{\"source\":[\"acs.oss\"],\"type\":[\"oss:BucketQueried:GetBucketStat\"]}`
         */
        FilterPattern: string;
        /**
         * 创建时间（时间戳）
         * @example `1607071602000`
         */
        CreatedTimestamp: number;
        /**
         * 规则名称。
         * @example `ramrolechange-fc`
         */
        RuleName: string;
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
