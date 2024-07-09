export interface BatchKillProcessListRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 会话列表。
     * @example `[{"ProxySessId":"752113700739156671","SessionId":3221555062,"ServerIp":"10.***.**.***"}] `
     */
    "SessionList": string;
    /**
     * 租户 ID。
     * @example `t33h8y08k****`
     */
    "TenantId": string;
}
