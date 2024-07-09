export interface ModifyInstanceCrossBackupPolicyRequest {
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 源实例地域ID，可以通过接口DescribeRegions查看地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 跨地域备份保存类型。当前唯一取值：**1**，表示每个备份都保存。
     * @example `1`
     */
    "CrossBackupType"?: string;
    /**
     * 跨地域日志备份开关，取值：
     * * **0**：关闭
     * * **1**：开启
     * >跨地域备份总开关开启时，才能设置日志开关。
     * @example `1`
     */
    "LogBackupEnabled"?: string;
    /**
     * 跨地域备份总开关（数据备份+日志备份），取值：
     * * **0**：关闭
     * * **1**：开启
     * >开启跨地域备份时，必须传入目的地域ID。
     * @example `1`
     */
    "BackupEnabled"?: string;
    /**
     * 跨地域备份的目的地域ID。
     * @example `cn-shanghai`
     */
    "CrossBackupRegion"?: string;
    /**
     * 跨地域备份保留方式。当前唯一取值：**1**，表示按时长保留。
     * @example `1`
     */
    "RetentType"?: number;
    /**
     * 跨地域备份保留天数，取值：**7~1825**。
     * @example `7`
     */
    "Retention"?: number;
}
