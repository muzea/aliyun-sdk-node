export interface ModifyDBInstanceDelayedReplicationTimeResponse {
    /**
     * 只读实例ID。
     * @example `rr-uf6wjk5****`
     */
    DBInstanceId: string;
    /**
     * 请求ID。
     * @example `EFB6083A-7699-489B-8278-C0CB4793A96E`
     */
    RequestId: string;
    /**
     * 任务ID。
     * @example `1715482.0`
     */
    TaskId: string;
    /**
     * 只读实例的复制延迟时间。单位：秒。
     * @example `100`
     */
    ReadSQLReplicationTime: string;
}
