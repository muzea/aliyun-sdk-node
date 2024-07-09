export interface QueryMqSofamqConsumerConnectionRequest {
    /**
     * 需要查询的 Group ID 所在的单元
     * @example `RZ01A`
     */
    "Cell"?: string;
    /**
     * 需查询的 Group ID
     * @example `GID_test_consumer_id`
     */
    "GroupId": string;
    /**
     * 需查询的 Group ID 所对应的实例 ID。针对有独立命名空间的实例，该参数为必填。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId": string;
}
