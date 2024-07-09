export interface QueryMqSofamqConsumerTimespanResponse {
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
     * 查询结果
     */
    Data: {
        /**
         * 整个 Topic 目前存储的最早的消息的时间
         * @example `1570761026804`
         */
        MaxTimestamp: number;
        /**
         *  整个 Topic 目前存储的最新的消息的时间
         * @example `1570701231122`
         */
        MinTimestamp: number;
        /**
         * 需查询的消费端 Group ID 所对应的实例 ID
         * @example `MQ_INST_111111111111_DOxxxxxx`
         */
        InstanceId: string;
        /**
         *  当前 Group 消费该 Topic 的最新的时间
         * @example `1570761026400`
         */
        ConsumeTimestamp: number;
        /**
         * 需查询的 Topic 名称
         * @example `test-mq_topic`
         */
        Topic: string;
    };
}
