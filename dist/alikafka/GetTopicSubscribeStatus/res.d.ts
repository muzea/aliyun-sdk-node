export interface GetTopicSubscribeStatusResponse {
    /**
     * Id of the request
     * @example `06084011-E093-46F3-A51F-4B19A8AD****`
     */
    RequestId: string;
    /**
     * Http返回码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回消息。
     * @example `operation success`
     */
    Message: string;
    /**
     * 订阅详情
     */
    TopicSubscribeStatus: {
        /**
         * 订阅该 Topic 的 Group 列表。
         */
        ConsumerGroups: string[];
        /**
         * Topic 名称。
         * @example `topic_api_1681624879908`
         */
        Topic: string;
    };
}
