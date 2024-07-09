export interface GetMqSofamqConsumerJStackRequest {
    /**
     * 需要查询的单元
     * @example `RZ00A`
     */
    "Cell": string;
    /**
     * 需要查询的消费端 Client ID
     * @example `10.15.232.86@1129e#e4a224f4#2fa8320f33c4#eyIwIjoienRoIn0=`
     */
    "ClientId": string;
    /**
     * 需要查询的消费端的 Group ID
     * @example `GID_test_group_id`
     */
    "GroupId": string;
    /**
     * 需要查询的消费者对应的实例 ID
     * @example `INSTANCE_ID_111`
     */
    "InstanceId": string;
}
