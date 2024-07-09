export interface DescribeLogBackupPolicyResponse {
    /**
     * 日志保留周期，取值范围如下：
     * * 3～7300：日志保留周期，单位天。
     * * -1：长期保留。
     * @example `7`
     */
    LogBackupRetentionPeriod: number;
    /**
     * 请求id。
     * @example `62EE0051-102B-488D-9C79-D607B8******`
     */
    RequestId: string;
    /**
     * 日志备份跨地域备份保留周期。取值范围如下：
     * - **0**：关闭日志备份跨地域备份功能。
     * - **30～7300**：日志备份跨地域备份保留周期，单位为天。
     * - **-1**：长期保留。
     * > 创建集群时，默认取值为**0**，即关闭日志备份跨地域备份功能。
     * @example `0`
     */
    LogBackupAnotherRegionRetentionPeriod: string;
    /**
     * 日志备份跨地域备份区域。跨地域备份支持的地域请参见[概述](~~72672~~)。
     * @example `cn-beijing`
     */
    LogBackupAnotherRegionRegion: string;
    /**
     * 是否开启日志备份，取值范围如下：
     * * 0：未开启。
     * * 1：开启（默认全部开启且不支持关闭）。
     * @example `1`
     */
    EnableBackupLog: number;
}
