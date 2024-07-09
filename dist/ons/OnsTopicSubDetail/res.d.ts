export interface OnsTopicSubDetailResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `87B6207F-2908-42B5-A134-84956DCA****`
     */
    RequestId: string;
    /**
     * 返回Data对象。
     */
    Data: {
        SubscriptionDataList: {
            /**
             * 所有在线订阅组。
             */
            SubscriptionDataList: {
                /**
                 * 订阅该Topic的Group ID。
                 * @example `GID_test`
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
                 * 订阅表达式。
                 * @example `*`
                 */
                SubString: string;
            }[];
        };
        /**
         * Topic名称。
         * @example `test`
         */
        Topic: string;
    };
}
