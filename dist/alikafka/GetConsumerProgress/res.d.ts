export interface GetConsumerProgressResponse {
    /**
     * 状态码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `operation success.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `252820E1-A2E6-45F2-B4C9-1056B8CE****`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 消费状态。
     */
    ConsumerProgress: {
        /**
         * 该 Group 所有消费位点所对应的消息数据的最大存储时间。
         * >
         * >- V3 版本所有 Topic 类型暂不支持、V2 版本的 Local 类型的 Topic 暂不支持。值统一返回 -1。
         * >- 只有 V2 版本的云存储类型的 Topic， 通过控制台或 OpenApi 创建的 Group提交消费位点后，才会返回正确时间戳。
         * @example `1566874931649`
         */
        LastTimestamp: number;
        /**
         * 所有Topic的未消费消息总量，即堆积量。
         * @example `0`
         */
        TotalDiff: number;
        TopicList: {
            /**
             * 此Group对应的每个Topic的消费进度列表。
             */
            TopicList: {
                /**
                 * 该Topic的未消费消息总量，即堆积量。
                 * @example `0`
                 */
                TotalDiff: number;
                /**
                 * 该 Group 所订阅 Topic 的所有消费位点所对应的消息数据的最大存储时间。
                 * >
                 * >- V3 版本所有 Topic 类型暂不支持、V2 版本的 Local 类型的 Topic 暂不支持。值统一返回 -1。
                 * >- 只有 V2 版本的云存储类型的 Topic， 通过控制台或 OpenApi 创建的 Group提交消费位点后，才会返回正确时间戳。
                 * @example `1566874931649`
                 */
                LastTimestamp: number;
                /**
                 * Topic名称。
                 * @example `kafka-test`
                 */
                Topic: string;
                OffsetList: {
                    /**
                     * 偏移列表。
                     */
                    OffsetList: {
                        /**
                         * 分区ID。
                         * @example `0`
                         */
                        Partition: number;
                        /**
                         * 最大位点。
                         * @example `9`
                         */
                        BrokerOffset: number;
                        /**
                         * 消费位点。
                         * @example `9`
                         */
                        ConsumerOffset: number;
                        /**
                         * 该分区的消费位点所对应的消息数据的存储时间。
                         * >
                         * >- V3 版本所有 Topic 类型暂不支持、V2 版本的 Local 类型的 Topic 暂不支持。值统一返回 -1。
                         * >- 只有 V2 版本的云存储类型的 Topic， 通过控制台或 OpenApi 创建的 Group提交过消费位点后，才会返回正确数据。
                         * @example `1566874931649`
                         */
                        LastTimestamp: number;
                    }[];
                };
            }[];
        };
        RebalanceInfoList: {
            /**
             * 该 Group 的 Rebalance 详情
             */
            RebalanceInfoList: {
                /**
                 * Rebalance 次数。
                 * @example `100`
                 */
                Generation: number;
                /**
                 * 本轮 Rebalance 发生的时间。单位 s。
                 * @example `1709199270`
                 */
                LastRebalanceTimestamp: number;
                /**
                 * 发生 Rebalance 的原因。
                 * @example `removing member consumer-1-cd14eb9c-379b-4b8e-9bbd-76f147f8536f on LeaveGroup`
                 */
                Reason: string;
                /**
                 * 订阅方的Group ID。
                 * @example `falcon-uat`
                 */
                GroupId: string;
                /**
                 * 本轮 Rebalance 的持续时间。单位 ms 。
                 * @example `1`
                 */
                RebalanceTimeConsuming: number;
                /**
                 * 本轮 Rebalance 是否有新成员加入消费组。
                 * @example `true`
                 */
                RebalanceSuccess: boolean;
            }[];
        };
    };
}
