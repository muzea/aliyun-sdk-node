export interface QueryMqSofamqGroupSubDetailResponse {
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
     * 返回 Data 信息
     */
    Data: {
        /**
         * Group ID
         * @example `GID_test_group_id`
         */
        GroupId: string;
        /**
         * 部署模型，包括 BROADCASTING（广播消费模式 ） 和 CLUSTERING（集群消费模式）两种。
         * @example `CLUSTERING`
         */
        MessageModel: string;
        /**
         * 是否在线
         * @example `true`
         */
        Online: boolean;
        /**
         * 订阅信息列表
         */
        SubscriptionDataList: {
            /**
             * 订阅匹配字符串
             * @example `*`
             */
            SubString: string;
            /**
             * 是否在线
             * @example `true`
             */
            Online: boolean;
            /**
             * Topic 名称
             * @example `test-mq_topic`
             */
            Topic: string;
        }[];
    };
}
