export interface ListTopicResponse {
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
         * 分页页码，查询第几页的返回结果。
         * @example `1`
         */
        PageNum: number;
        /**
         * 分页大小，每页最多显示的返回结果数量。
         * @example `50`
         */
        PageSize: number;
        /**
         * 总结果数。
         * @example `130`
         */
        Total: number;
        /**
         * 当前页返回结果。
         */
        PageData: {
            /**
             * 主题的名称。
             * @example `demo-topic`
             */
            TopicName: string;
            /**
             * 当前该主题中消息数目。
             * @example `0`
             */
            MessageCount: number;
            /**
             * 发送到该主题的消息体最大长度，单位为Byte。
             * @example `65536`
             */
            MaxMessageSize: number;
            /**
             * 消息在主题中最长存活时间，从发送到该主题开始经过此参数指定的时间后，不论消息是否被成功推送给用户都将被删除，单位为秒。
             * @example `86400`
             */
            MessageRetentionPeriod: number;
            /**
             * Subscription的创建时间，从1970-01-01 00:00:00到现在的。
             * @example `1449554962`
             */
            CreateTime: number;
            /**
             * 最近一次修改Subscription属性信息的时间，从1970-01-01 00:00:00到现在的秒值。
             * @example `1449554962`
             */
            LastModifyTime: number;
            /**
             * 是否开启日志管理功能。
             * - True：启用。
             * - False：停用。
             * @example `True`
             */
            LoggingEnabled: boolean;
            TopicUrl: string;
            TopicInnerUrl: string;
            Tags: {
                TagKey: string;
                TagValue: string;
            }[];
        }[];
    };
}
