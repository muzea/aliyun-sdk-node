export interface OnsConsumerTimeSpanResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `A07E3902-B92E-44A6-B6C5-6AA111111****`
     */
    RequestId: string;
    /**
     * 查询结果。
     */
    Data: {
        /**
         * 整个Topic目前最早存储的消息的生产时间。
         * @example `1570761026804`
         */
        MaxTimeStamp: number;
        /**
         * 当前Group消费该Topic的最新时间。
         * @example `1570761026400`
         */
        ConsumeTimeStamp: number;
        /**
         * 需查询的Topic。
         * @example `test-mq_topic`
         */
        Topic: string;
        /**
         * 整个Topic目前最新存储的消息的生产时间。
         * @example `1570701231122`
         */
        MinTimeStamp: number;
        /**
         * 需查询的消费端Group ID所对应的实例ID。
         * @example `MQ_INST_111111111111_DOxxxxxx`
         */
        InstanceId: string;
    };
}
