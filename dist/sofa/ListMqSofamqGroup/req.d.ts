export interface ListMqSofamqGroupRequest {
    /**
     * 查询指定 Group ID 时设置，否则查询所有 Group ID。
     * @example `GID_test_group_id	`
     */
    "GroupId"?: string;
    /**
     * 分组类型，默认为 tcp，表示该 Group ID 仅适用于 TCP 协议的消息收发。
     * @example `tcp`
     */
    "GroupType"?: string;
    /**
     * 需获取 Group ID 所对应的实例 ID
     * @example `SOFAMQ_INSTANCE_000001`
     */
    "InstanceId": string;
    /**
     * 页码
     * @example `1`
     */
    "PageNum": number;
    /**
     * 每页显示数量
     * @example `20`
     */
    "PageSize": number;
}
