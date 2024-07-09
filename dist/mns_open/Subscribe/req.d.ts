export interface SubscribeRequest {
    /**
     * 主题的名称。
     * @example `topic****1`
     */
    "TopicName": string;
    /**
     * 订阅名称。
     * @example `testSubscription	`
     */
    "SubscriptionName": string;
    /**
     * 终端类型。
     * - http：HTTP推送类型。
     * - queue：队列推送类型。
     * - mpush：移动推送类型。
     * - alisms：阿里短信推送类型。
     * - email：邮箱推送类型。
     * @example `queue`
     */
    "PushType": string;
    /**
     * 此次订阅中接收消息的终端地址，不同终端类型的格式如下：
     * - HTTP格式为： `http(s)://{实际url地址}`
     * - 队列格式为： `{QueueName}`
     * - 移动推送格式为： `{AppKey}`
     * - 阿里短信格式为： `{phoneNumber}`
     * - 邮箱格式为： `{emailAddress}`
     * @example `http://*****.com/uri1/xxx`
     */
    "Endpoint": string;
    /**
     * 向Endpoint推送消息错误时的重试策略。取值说明如下：
     * - BACKOFF_RETRY：退避重试。
     * - EXPONENTIAL_DECAY_RETRY：指数衰减重试。
     * @example `BACKOFF_RETRY`
     */
    "NotifyStrategy"?: string;
    /**
     * 用于定义向Endpoint推送的消息格式。
     * 取值说明如下：
     * - XML
     * - JSON
     * - SIMPLIFIED
     * @example `XML`
     */
    "NotifyContentFormat"?: string;
    /**
     * 该订阅中消息过滤的标签（标签一致的消息才会被推送）。
     * 取值范围：不超过16个字符的字符串。
     * 默认不进行消息过滤。
     * @example `important`
     */
    "MessageTag"?: string;
}
