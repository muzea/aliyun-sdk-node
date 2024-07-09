export interface ModifyDTCSecurityIpHostsForSQLServerResponse {
    /**
     * RDS实例ID。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceId: string;
    /**
     * 请求ID。
     * @example `671B6D32-B907-4EFF-A3B7-94D2EAD5E3A3`
     */
    RequestId: string;
    /**
     * 设置任务ID。
     * @example `178968983`
     */
    TaskId: string;
    /**
     * 设置白名单的结果，取值：
     * * **Success**：设置成功
     * * **Fail**：设置失败
     * @example `Success`
     */
    DTCSetResult: string;
}
