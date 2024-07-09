export interface CreateQueueRequest {
    /**
     * 队列名称。
     * @example `06273500-249F-5863-121D-74D51123****`
     */
    "QueueName": string;
    /**
     * 发送到该Queue的消息体的最大长度。
     * 取值范围：1024~65536，单位为Byte。
     * 默认值：65536。
     * @example `65536`
     */
    "MaximumMessageSize"?: number;
    /**
     * 消息在该Queue中最长的存活时间，从发送到该队列开始经过此参数指定的时间后，不论消息是否被取出过都将被删除。
     * 取值范围：60~604800，单位为秒。
     * 默认值：345600。
     * @example `345600`
     */
    "MessageRetentionPeriod"?: number;
    /**
     * 消息从该Queue中取出后从Active状态变成Inactive状态后的持续时间。
     * 取值范围：1~43200，单位为秒。
     * 默认值：30。
     * @example `60`
     */
    "VisibilityTimeout"?: number;
    /**
     * 当Queue中没有消息时，针对该Queue的ReceiveMessage请求最长的等待时间。
     * 取值范围：0~30，单位为秒。
     * 默认值：0。
     * @example `0`
     */
    "PollingWaitSeconds"?: number;
    /**
     * 是否开启日志管理功能。取值说明如下：
     * - True：启用。
     * - False：停用。
     * 默认值：False。
     * @example `true`
     */
    "EnableLogging"?: boolean;
    /**
     * 发送到该Queue的所有消息的延迟时间，发送到队列的消息经过此参数设定的延时时间后，才能被消费。
     * 取值范围：0~604800，单位为秒。
     * 默认值：0。
     * @example `0`
     */
    "DelaySeconds"?: number;
    "Tag"?: {
        Key: string;
        Value: string;
    }[];
}
