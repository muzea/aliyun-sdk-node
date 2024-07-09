export interface OnsConsumerAccumulateResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `CE817BFF-B389-43CD-9419-95011AC9****`
     */
    RequestId: string;
    /**
     * 指定Consumer的消费堆积情况。
     */
    Data: {
        /**
         * 该Group ID下消费者实例群组接收消息的总TPS。
         * @example `10`
         */
        ConsumeTps: number;
        /**
         * Group ID消费消息的最大延迟时间。取值为该Group ID订阅的所有Topic中，消费延迟时间最长的Topic的值。
         * 单位：毫秒。
         * @example `10000`
         */
        DelayTime: number;
        /**
         * 该Group ID下消费者实例群组中最近消费的某条消息的生产时间。
         * 单位：毫秒级的Unix时间戳。
         * @example `1566231000000`
         */
        LastTimestamp: number;
        /**
         * 该Group ID订阅的所有Topic的消费堆积数量。
         * @example `100`
         */
        TotalDiff: number;
        /**
         * 该Group ID下是否有消费者实例在线；只要有一个消费者实例在线，该Group ID状态即为在线。取值说明如下：
         * - **true**：状态为在线
         * - **false**：状态为不在线
         * @example `true`
         */
        Online: boolean;
        DetailInTopicList: {
            /**
             * 各个Topic具体情况。如果请求参数**Detail**取值为**fasle**，则该返回参数的返回值为空。
             */
            DetailInTopicDo: {
                /**
                 * 该Topic中消息消费的最大延迟时间。即Topic中最早一条未消费消息的就绪时间和当前的时间差。
                 * 单位：毫秒。
                 * @example `10000`
                 */
                DelayTime: number;
                /**
                 * 该Topic的消费堆积数量。
                 * @example `100`
                 */
                TotalDiff: number;
                /**
                 * 该Topic中最近消费的某条消息的生产时间。
                 * 单位：毫秒级的Unix时间戳。
                 * @example `1566231000000`
                 */
                LastTimestamp: number;
                /**
                 * Topic名称。
                 * @example `test-mq-topic`
                 */
                Topic: string;
            }[];
        };
    };
}
