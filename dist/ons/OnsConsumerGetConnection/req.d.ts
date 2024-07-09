export interface OnsConsumerGetConnectionRequest {
    /**
     * 需查询的Group ID。
     * @example `GID_test_consumer_id`
     */
    "GroupId": string;
    /**
     * 需查询的Group ID所对应的实例ID。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId"?: string;
}
