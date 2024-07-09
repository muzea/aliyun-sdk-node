export interface OnsGroupSubDetailResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `3364E875-013B-442A-BC3C-C1A84DC6****`
     */
    RequestId: string;
    /**
     * 返回Data对象。
     */
    Data: {
        SubscriptionDataList: {
            /**
             * 如果Group ID所对应的消费者不在线则查不到数据。
             */
            SubscriptionDataList: {
                /**
                 * 订阅表达式。
                 * @example `*`
                 */
                SubString: string;
                /**
                 * 订阅的Topic。
                 * @example `test-mq_topic`
                 */
                Topic: string;
            }[];
        };
        /**
         * 需查询的Group ID。
         * @example `GID_test_group_id`
         */
        GroupId: string;
        /**
         * 消费模式。取值说明如下：
         * - **CLUSTERING**：集群订阅
         * - **BROADCASTING**：广播订阅
         * 消费模式的更多信息，请参见[集群消费和广播消费](~~43163~~)。
         * @example `CLUSTERING`
         */
        MessageModel: string;
        /**
         * 消费者是否在线。
         * @example `true`
         */
        Online: boolean;
    };
}
