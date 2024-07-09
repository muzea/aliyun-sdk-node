export interface DescribeInstanceCrossBackupPolicyResponse {
    /**
     * 跨地域日志备份开启时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2019-06-12T05:44:21Z`
     */
    LogBackupEnabledTime: string;
    /**
     * 跨地域备份总开关，取值：
     * * **Disable**：关闭
     * * **Enable**：开启
     * @example `Enable`
     */
    BackupEnabled: string;
    /**
     * 实例状态。详情请参见[实例状态表](~~26315~~)。
     * @example `Running`
     */
    DBInstanceStatus: string;
    /**
     * 实例锁定状态，取值：
     * * **Unlock**：正常，没有锁定。
     * * **ManualLock**：手动触发锁定。
     * * **LockByExpiration**：实例过期自动锁定。
     * * **LockByRestoration**：实例回滚前的自动锁定。
     * * **LockByDiskQuota**：实例空间满自动锁定，不可访问实例。
     * @example `Unlock`
     */
    LockMode: string;
    /**
     * 数据库版本。
     * @example `5.6`
     */
    EngineVersion: string;
    /**
     * 实例所在地域ID。
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
     * @example `CB7667B2-72C8-497B-9BD8-3B343CEF51AB`
     */
    RequestId: string;
    /**
     * 跨地域备份保留方式。默认值：**1**，表示按时长保留。
     * @example `1`
     */
    RetentType: number;
    /**
     * 跨地域备份保留天数，取值：**7~1825**。
     * @example `15`
     */
    Retention: number;
    /**
     * 跨地域备份保存类型。默认值：**1**，表示每个备份都保存。
     * @example `1`
     */
    CrossBackupType: string;
    /**
     * 跨地域备份的目的地域ID。
     * @example `cn-shanghai`
     */
    CrossBackupRegion: string;
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceId: string;
    /**
     * 数据库类型。
     * @example `mysql`
     */
    Engine: string;
    /**
     * 跨地域备份开启时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2019-06-12T05:44:21Z`
     */
    BackupEnabledTime: string;
    /**
     * 实例名称，长度为2~256个字符。以中文、英文字母开头，可以包含数字、中文、英文、下划线（_）、短横线（-）。
     * >不能以 http:// 和 https:// 开头。
     * @example `testdb`
     */
    DBInstanceDescription: string;
}
