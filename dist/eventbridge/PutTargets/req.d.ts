export interface PutTargetsRequest {
    /**
     * 事件总线的名称。
     * @example `eventTest`
     */
    "EventBusName": string;
    /**
     * 事件规则的名称。
     * @example `ssr-send-to-vendor-test01
    `
     */
    "RuleName": string;
    /**
     * 需要新增或更新的事件目标列表。更多信息，请参见[使用限制](~~163289~~)。
     */
    "Targets": {
        /**
         * 自定义事件目标Id。
         * @example `Mlm123456JHd2RsRoKw`
         */
        Id: string;
        /**
         * 事件目标类型。更多信息，请参见[事件目标参数](~~185887~~)。
         * @example `acs.fc.function	`
         */
        Type: string;
        /**
         * 投递端点链接。
         * @example `acs:fc:cn-hangzhou:123456789098****:services/guide.LATEST/functions/HelloFC	`
         */
        Endpoint: string;
        /**
         * 推送重试策略。取值说明如下：
         * - **BACKOFF_RETRY**：退避重试策略。重试3次，每次重试的间隔时间是10秒到20秒之间的随机值。
         * - **EXPONENTIAL_DECAY_RETRY**：指数衰减重试。重试176次，每次重试的间隔时间指数递增至512秒，总计重试时间为1天；每次重试的具体间隔为：1，2，4，8，16，32，64，128，256，512，512...512秒（共167个512）。
         * @example `BACKOFFRETRY`
         */
        PushRetryStrategy: string;
        /**
         * 死信队列。未处理或者超过重试次数的事件会被写入死信队列。当前死信队列支持的队列类型有消息队列RocketMQ版、消息服务MNS、消息队列Kafka版和EventBridge事件总线。
         */
        DeadLetterQueue: {
            /**
             * 死信队列的Arn，未处理或超过重试次数的事件会被写入死信队列。
             * @example `acs:mns:cn-hangzhou:123456789098****:/queues/deadletterqueue
            或
            acs:mq:cn-hangzhou:123456789098****:/instances/MQ_INST_123456789098****_BX8QbBPL/topic/deadlettertopic
            或
            acs:alikafka:cn-hangzhou:123456789098****:instance/alikafka_post-cn-123456/topic/deadlettertopic
            或
            acs:eventbridge:cn-hangzhou:123456789098****:eventbus/deadletterbus`
             */
            Arn: string;
        };
        /**
         * 容错策略。取值说明如下：
         * - **ALL**：允许容错。允许异常容错，当异常发生时不会阻塞执行，超过重试策略后会根据配置将消息投递至死信队列或直接丢弃。
         * - **NONE**：禁止容错。不允许容错，当异常发生并超过重试策略配置时会阻塞执行。
         * @example `ALL`
         */
        ErrorsTolerance: string;
        /**
         * 事件目标的参数。
         */
        ParamList: {
            /**
             * 事件目标的资源参数。更多信息，请参见[事件目标参数](~~185887~~)。
             * @example `body`
             */
            ResourceKey: string;
            /**
             * 事件目标参数的格式。更多信息，请参见[事件目标参数](~~185887~~)。
             * @example `TEMPLATE`
             */
            Form: string;
            /**
             * 事件目标参数的值。
             * @example `{\"key\"=\"value\"}`
             */
            Value: string;
            /**
             * 事件目标参数模板样式。
             * @example `The value of ${key} is ${value}!	`
             */
            Template: string;
        }[];
    }[];
}
