export interface BatchKillSessionListRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 租户 ID。
     * @example `t4louaeei****`
     */
    "TenantId": string;
    /**
     * 会话列表，用逗号拼接数组内容。
     * > 会话信息来源于 DescribeSessionList 接口的返回结果。
     * @example `342,354,343`
     */
    "SessionList": string;
}
