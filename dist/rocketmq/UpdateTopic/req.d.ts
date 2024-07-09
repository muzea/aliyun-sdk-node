export interface UpdateTopicRequest {
    /**
     * 待更新主题所属的实例的ID。
     * @example `rmq-cn-7e22ody****`
     */
    "instanceId": string;
    /**
     * 待更新的主题的名称。
     * @example `topic_test`
     */
    "topicName": string;
    /**
     * 请求体结构。
     */
    "body"?: {
        /**
         * 更新后的主题备注信息。
         * @example `This is the remark for test.`
         */
        remark: string;
    };
}
