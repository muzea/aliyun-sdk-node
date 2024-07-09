export interface OnsConsumerAccumulateRequest {
    /**
     * 需查询的消费端Group ID。
     * @example `GID_test_consumer_id`
     */
    "GroupId": string;
    /**
     * 是否查询各个Topic的详细信息。取值说明如下：
     * - **true**：要查询详细信息，返回**DetailInTopicList**参数的详细信息。
     * - **false**：不查询详细信息（默认值），**DetailInTopicList**参数返回值为空。
     * @example `true`
     */
    "Detail"?: boolean;
    /**
     * 实例ID。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId"?: string;
}
