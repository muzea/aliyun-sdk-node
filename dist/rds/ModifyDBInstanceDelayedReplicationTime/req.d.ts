export interface ModifyDBInstanceDelayedReplicationTimeRequest {
    /**
     * 只读实例ID。可调用DescribeDBInstances获取。
     * @example `rr-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 只读实例的复制延迟时间。单位：秒。
     * @example `100`
     */
    "ReadSQLReplicationTime": string;
}
