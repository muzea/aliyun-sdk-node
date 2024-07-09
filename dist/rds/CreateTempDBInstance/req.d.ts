export interface CreateTempDBInstanceRequest {
    /**
     * 实例ID。
     * @example `rm-bp13****`
     */
    "DBInstanceId": string;
    /**
     * 备份集ID。可通过接口DescribeBackups查询。
     * >**BackupId**和**RestoreTime**两者至少传入一个。
     * @example `1883****`
     */
    "BackupId"?: number;
    /**
     * 用户指定备份保留时间内的任意时间点。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > * 可以设置为7天之内并且早于当前时间半小时以上的任意时间点，默认时区为UTC。
     * > * **BackupId**和**RestoreTime**两者至少传入一个。
     * @example `2023-06-11T16:00:00Z`
     */
    "RestoreTime"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
