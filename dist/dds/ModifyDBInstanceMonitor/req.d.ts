export interface ModifyDBInstanceMonitorRequest {
    /**
     * 实例ID。
     * @example `dds-bpxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 设置监控采集粒度，取值：**1**或**300**，单位为秒。
     * @example `1`
     */
    "Granularity": string;
}
