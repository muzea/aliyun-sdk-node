export interface QueryMqSofamqConsumerTimespanRequest {
    /**
     * 需查询的消费端 Group ID 所在的 Cell
     * @example `RZ01A`
     */
    "Cell"?: string;
    /**
     * 需查询的消费端 Group ID
     * @example `GID_test_group_id`
     */
    "GroupId": string;
    /**
     * 需查询的消费端 Group ID 所对应的实例 ID。针对有独立命名空间的实例，该参数为必填。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId": string;
    /**
     * 需查询的消费端 Group ID 订阅的 Topic
     * @example `test-mq_topic`
     */
    "Topic": string;
}
