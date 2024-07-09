export interface OnsMessageTraceResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `EAE5BE23-37A1-4354-94D6-E44AE17E****`
     */
    RequestId: string;
    Data: {
        /**
         * 查询结果。
         */
        MessageTrack: {
            /**
             * 当前状态。取值说明如下：
             * - **CONSUMED**：已消费。
             * - **CONSUMED_BUT_FILTERED**：不符合Group ID的订阅条件，消息已被过滤，未消费。
             * - **NOT_CONSUME_YET**：暂未消费。
             * - **NOT_ONLINE**：客户端不在线。
             * - **UNKNOWN**：其他问题。
             * @example `CONSUMED`
             */
            TrackType: string;
            /**
             * 订阅该Topic的消费者所对应的Group ID。
             * @example `GID_test_group_id`
             */
            ConsumerGroup: string;
            /**
             * 需查询的消息所对应的实例ID。
             * @example `MQ_INST_111111111111_DOxxxxxx`
             */
            InstanceId: string;
        }[];
    };
}
