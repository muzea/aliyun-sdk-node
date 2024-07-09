export interface QueryMqSofamqConsumerAccumulateResponse {
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
     * 指定 Consumer 的消费堆积情况
     */
    Data: {
        /**
         * 该 Group ID 下消费者实例群组接收消息的总 TPS，单位：条/秒。
         * @example `10`
         */
        ConsumeTps: string;
        /**
         * 该 Topic 的消费堆积数量
         * @example `100`
         */
        TotalDiff: number;
        /**
         * 该 Topic 中最近一条被消费的信息的生产时间，单位：毫秒。
         * @example `1566231000000`
         */
        LastTimestamp: number;
        /**
         * 该 Topic 所发消息的最大消费延迟时间，单位：毫秒。
         * @example `10000`
         */
        DelayTime: number;
        /**
         * 该 Group ID 下是否有消费者实例在线；只要有一个消费者实例在线，该 Group ID 状态即为在线。取值说明如下：
         * - true：状态为在线。
         * - false：状态为不在线。
         * @example `true`
         */
        Online: boolean;
        /**
         * 各个 Topic 具体情况
         */
        DetailInTopicList: {
            /**
             * 该 Topic 消费总堆积数
             * @example `0`
             */
            TotalDiff: number;
            /**
             * 延迟时间，单位：毫秒。
             * @example `0`
             */
            DelayTime: number;
            /**
             * 最后更新时间，单位：毫秒。
             * @example `1570701259403`
             */
            LastTimestamp: number;
            /**
             * Topic 名称
             * @example `test-mq_topic`
             */
            Topic: string;
        }[];
    };
}
