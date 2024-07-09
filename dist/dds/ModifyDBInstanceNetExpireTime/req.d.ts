export interface ModifyDBInstanceNetExpireTimeRequest {
    /**
     * 实例ID。
     * @example `dds-bpxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 实例的连接地址。
     * @example `dds-bpxxxxxxxx.mongodb.rds.aliyuncs.com`
     */
    "ConnectionString"?: string;
    /**
     * 设置保留原经典网络地址的时长，取值：**14**、**30**、**60**、**120**，单位为天。
     * @example `30`
     */
    "ClassicExpendExpiredDays": number;
}
