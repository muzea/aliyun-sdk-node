export interface GetQueueAttributesResponse {
    /**
     * 请求的ID。
     * @example `06273500-249F-5863-121D-74D51123****`
     */
    RequestId: string;
    /**
     * 响应code。
     * @example `200`
     */
    Code: number;
    /**
     * 响应的状态。
     * @example `Success`
     */
    Status: string;
    /**
     * 响应信息。
     * @example `operation success`
     */
    Message: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应数据。
     */
    Data: {
        /**
         * Queue的名称。
         * @example `demo-queue`
         */
        QueueName: string;
        /**
         * Queue的创建时间。
         * @example `1250700999`
         */
        CreateTime: number;
        /**
         * 修改Queue属性信息最近时间，从1970-01-01 00:00:00到现在的时间。
         * @example `1250700999`
         */
        LastModifyTime: number;
        /**
         * 发送到该Queue的所有消息的延迟时间，发送到队列的消息经过此参数设定的延时时间后，才能被消费，单位为秒。
         * @example `30`
         */
        DelaySeconds: number;
        /**
         * 发送到该Queue的消息体的最大长度，单位为Byte。
         * @example `65536`
         */
        MaximumMessageSize: number;
        /**
         * 消息在该Queue中最长的存活时间，从发送到该队列开始经过此参数指定的时间后，不论消息是否被取出过都将被删除，单位为秒。
         * @example `65536`
         */
        MessageRetentionPeriod: number;
        /**
         * 消息从该Queue中取出后从Active状态变成Inactive状态后的持续时间。
         * 取值范围：1~43200，单位为秒。
         * 默认值：30。
         * @example `60`
         */
        VisibilityTimeout: number;
        /**
         * 当Queue消息量为空时，针对该Queue的ReceiveMessage请求最长的等待时间，单位为秒。
         * @example `0`
         */
        PollingWaitSeconds: number;
        /**
         * 在该Queue中处于Active状态的消息总数，为近似值。
         * @example `20`
         */
        ActiveMessages: number;
        /**
         * 在该Queue中处于Inactive状态的消息总数，为近似值。
         * @example `0`
         */
        InactiveMessages: number;
        /**
         * 在该Queue中处于Delayed状态的消息总数，为近似值。
         * @example `0`
         */
        DelayMessages: number;
        /**
         * 是否开启日志管理功能。
         * - True：启用。
         * - False：停用。
         * @example `True`
         */
        LoggingEnabled: boolean;
        Tags: {
            TagKey: string;
            TagValue: string;
        }[];
    };
}
