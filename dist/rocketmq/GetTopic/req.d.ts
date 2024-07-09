export interface GetTopicRequest {
    /**
     * 待查询主题所属的实例的ID。
     * @example `rmq-cn-7e22ody****`
     */
    "instanceId": string;
    /**
     * 待查询主题的名称。
     * @example `topic_test`
     */
    "topicName": string;
}
