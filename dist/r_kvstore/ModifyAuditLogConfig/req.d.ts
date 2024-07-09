export interface ModifyAuditLogConfigRequest {
    /**
     * 实例ID，可调用[DescribeInstances](~~60933~~)获取。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 审计日志保留天数，取值：**1**~**365**。
     * > * 当**DbAudit**取值为**true**时，本参数必须传入。
     * > * 本参数的设置对当前地域下的所有Redis实例生效。
     * @example `10`
     */
    "Retention"?: number;
    /**
     * 是否开启审计日志，取值：
     * * **true**：默认值，开启。
     * * **false**：关闭。
     * > 当实例为[集群架构](~~52228~~)或[读写分离架构](~~62870~~)时，会同时开启或关闭数据节点和代理节点的审计日志，不支持单独开启。
     * @example `true`
     */
    "DbAudit"?: boolean;
}
