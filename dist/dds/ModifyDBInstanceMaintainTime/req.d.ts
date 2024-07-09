export interface ModifyDBInstanceMaintainTimeRequest {
    /**
     * 实例ID。
     * @example `dds-bpac2345****`
     */
    "DBInstanceId": string;
    /**
     * 实例可运维时间段的开始时间，格式为<i>HH:mm</i>Z（UTC时间）。
     * @example `01:00Z`
     */
    "MaintainStartTime": string;
    /**
     * 实例可运维时间段的结束时间，格式为<i>HH:mm</i>Z（UTC时间）。
     * > 可运维时间段的结束时间需晚于可运维时间段的开始时间。
     * @example `02:00Z`
     */
    "MaintainEndTime": string;
}
