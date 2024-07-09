export interface GetTopicResponse {
    /**
     * 请求ID，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `AF9A8B10-C426-530F-A0DD-96320B39****`
     */
    requestId: string;
    /**
     * 执行结果是否成功。
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果。
     */
    data: {
        /**
         * 实例所属的地域ID。
         * @example `cn-hangzhou`
         */
        regionId: string;
        /**
         * 主题所属实例的ID。
         * @example `rmq-cn-7e22ody****`
         */
        instanceId: string;
        /**
         * 主题名称。
         * @example `topic_test`
         */
        topicName: string;
        /**
         * 主题的消息类型,。
         * 参数取值如下：
         * - TRANSACTION：事务消息
         * - FIFO：顺序消息
         * - DELAY：定时/延时消息
         * - NORMAL：普通消息
         * @example `NORMAL`
         */
        messageType: string;
        /**
         * 主题的状态。
         * 参数取值如下：
         * - RUNNING：运行中
         * - CREATING：创建中
         * @example `RUNNING`
         */
        status: string;
        /**
         * 主题的备注信息。
         * @example `This is the remark for test.
        `
         */
        remark: string;
        /**
         * 主题的创建时间。
         * @example `2022-08-01 20:05:50`
         */
        createTime: string;
        /**
         * 主题的最后修改时间。
         * @example `2022-08-01 20:05:50`
         */
        updateTime: string;
    };
    /**
     * 错误码。
     * @example `Topic.NotFound`
     */
    code: string;
    /**
     * 错误信息。
     * @example `The topic cannot be found.`
     */
    message: string;
    /**
     * HTTP状态码。
     * @example `400`
     */
    httpStatusCode: number;
    /**
     * 动态错误码。
     * @example `TopicName`
     */
    dynamicCode: string;
    /**
     * 动态错误信息。
     * @example `topicName`
     */
    dynamicMessage: string;
}
