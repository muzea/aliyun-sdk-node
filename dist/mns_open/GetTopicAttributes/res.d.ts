export interface GetTopicAttributesResponse {
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
         * 主题的创建时间，从1970-01-01 00:00:00到现在的时间。
         * @example `1449554277`
         */
        CreateTime: number;
        /**
         * 修改主题属性信息的最近时间，从1970-01-01 00:00:00到现在的时间。
         * @example `1449554460`
         */
        LastModifyTime: number;
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
