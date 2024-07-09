export interface ModifyInstanceCrossBackupPolicyResponse {
    /**
     * 跨地域备份总开关，取值：
     * * **Disable**：关闭
     * * **Enable**：开启
     * @example `Enable`
     */
    BackupEnabled: string;
    /**
     * 源实例地域ID，可以通过接口[DescribeRegions](~~26243~~)查看地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 跨地域日志备份开关，取值：
     * * **Disable**：关闭
     * * **Enable**：开启
     * @example `Enable`
     */
    LogBackupEnabled: string;
    /**
     * 请求ID。
     * @example `50A6059D-6DBB-46C6-A851-1EE93C9013CF`
     */
    RequestId: string;
    /**
     * 跨地域备份保留方式。默认值：**1**，表示按时长保留。
     * @example `1`
     */
    RetentType: number;
    /**
     * 跨地域备份的目的地域ID。
     * @example `cn-shanghai`
     */
    CrossBackupRegion: string;
    /**
     * 跨地域备份保存类型。默认值：**1**，表示每个备份都保存。
     * @example `1`
     */
    CrossBackupType: string;
    /**
     * 跨地域备份保留天数，取值：**7~1825**。
     * @example `15`
     */
    Retention: number;
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceId: string;
}
