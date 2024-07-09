export interface KillProcessListRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 需要关闭的会话列表。
     * @example `[
          {
                "ServerIp": "192.***.**.***",
                "SessionId": "322161****"
          }
    ]`
     */
    "SessionList": string;
    /**
     * 租户 ID。
     * @example `t4louaeei****`
     */
    "TenantId": string;
}
