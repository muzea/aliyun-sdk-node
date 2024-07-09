export interface QueryMqSofamqMessageByTopicResponse {
    /**
     * 结果描述
     * @example `OK`
     */
    ResultMessage: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 请求ID
     * @example `861E6630-AEC0-4B2D-B214-6CB5E44B7F04`
     */
    RequestId: string;
    /**
     * 分页查询Message
     */
    Data: {
        /**
         * 页码
         * @example `1`
         */
        PageNum: number;
        /**
         * 每页显示条数
         * @example `10`
         */
        PageSize: number;
        /**
         * 总页数
         * @example `100`
         */
        Total: number;
        /**
         * 第一次新建查询时返回的查询任务 ID，用于后续获取消息。
         * @example `0BC1310300002A9F000021E4D7A48346`
         */
        TaskId: string;
        /**
         * 消息的详细信息
         */
        Content: {
            /**
             * 消息大小
             * @example `407`
             */
            StoreSize: number;
            /**
             *  消息重试消费的次数
             * @example `1`
             */
            ReconsumeTimes: number;
            /**
             * 被服务端存储的时间戳
             * @example `1570761026708`
             */
            StoreTimestamp: number;
            /**
             *  消息的 Topic
             * @example `test-mq_topic`
             */
            Topic: string;
            /**
             * 存储该消息的服务器实例
             * @example `11.220.***.***:10911`
             */
            StoreHost: string;
            /**
             *  生成时间戳
             * @example `1570761026630`
             */
            BornTimestamp: number;
            /**
             *  实例 ID
             * @example `MQ_INST_111111111111_DOxxxxxx`
             */
            InstanceId: string;
            /**
             * 消息体
             * @example `SGVsbG8gTVEg5raT7oWf5p6D5ai05ayt55iv`
             */
            Body: string;
            /**
             * 消息 ID，即 Message ID
             * @example `1E0578FE110F18B4AAC235C0C8460BA2`
             */
            MsgId: string;
            /**
             * 消息体 CRC 校验值
             * @example `914112295`
             */
            BodyCrc: number;
            /**
             * 生成该消息的客户端实例
             * @example `42.120.**.**:64646`
             */
            BornHost: string;
            /**
             * 消息属性列表
             */
            PropertyList: {
                /**
                 * Key 名
                 * @example `TAGS`
                 */
                Name: string;
                /**
                 * 值
                 * @example `TagA`
                 */
                Value: string;
            }[];
        }[];
    };
}
