export interface GetMqSofamqConsumerStatusRequest {
    /**
     * 需要查询的单元
     * @example `RZ01A  `
     */
    "Cell"?: string;
    /**
     * 是否查询详细信息。取值说明如下：true：要查询详细信息；false：不查询详细信息。
     * @example `true`
     */
    "Detail"?: boolean;
    /**
     * 需要查询的消费端 Group ID
     * @example `GID_test_group_id`
     */
    "GroupId": string;
    /**
     * 需查询的 Group ID 所对应的实例 ID。针对有独立命名空间的实例，该参数为必填。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId": string;
    /**
     * 是否打印 Jstack 信息
     * @example `false`
     */
    "NeedJstack"?: boolean;
}
