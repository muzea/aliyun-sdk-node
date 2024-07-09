export interface OnsGroupSubDetailRequest {
    /**
     * 需查询的Group ID所属的实例ID。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId": string;
    /**
     * 需查询的Group ID。
     * @example `GID_test_group_id`
     */
    "GroupId": string;
}
