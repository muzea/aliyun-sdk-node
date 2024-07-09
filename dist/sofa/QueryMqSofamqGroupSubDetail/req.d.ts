export interface QueryMqSofamqGroupSubDetailRequest {
    /**
     * 需查询的 Group ID 所在的 Cell
     * @example `RZ01A`
     */
    "Cell"?: string;
    /**
     * 需查询的 Group ID
     * @example `GID_test_group_id`
     */
    "GroupId": string;
    /**
     * 需查询的 Group ID 所对应的实例 ID。针对有独立命名空间的实例，该参数为必填。
     * @example `SOFAMQ_INSTANCE_000001`
     */
    "InstanceId": string;
}
