export interface OnsConsumerTimeSpanRequest {
    /**
     * 需查询的消费端Group ID。
     * @example `GID_test_group_id`
     */
    "GroupId": string;
    /**
     * 需查询的消费端Group ID订阅的Topic。
     * @example `test-mq_topic`
     */
    "Topic": string;
    /**
     * 需查询的消费端Group ID所对应的实例ID。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId"?: string;
}
