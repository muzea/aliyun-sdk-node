export interface ModifyLogBackupPolicyRequest {
    /**
     * 集群ID。
     * >您可以调用[DescribeDBClusters](~~98094~~)接口查看目标地域下所有的集群信息，包括集群ID。
     * @example `pc-****************`
     */
    "DBClusterId": string;
    /**
     * 日志保留周期，取值范围如下：
     * * 3～7300：日志保留周期，单位为天。
     * * -1：长期保留。
     * @example `3`
     */
    "LogBackupRetentionPeriod"?: string;
    /**
     * 日志备份跨地域备份区域。跨地域备份支持的地域请参见[概述](~~72672~~)。
     * @example `cn-hangzhou`
     */
    "LogBackupAnotherRegionRegion"?: string;
    /**
     * 日志备份跨地域备份保留周期。取值范围如下：
     * - **0**：关闭日志备份跨地域备份功能。
     * - **30～7300**：日志备份跨地域备份保留周期，单位为天。
     * - **-1**：长期保留。
     * > 创建集群时，默认取值为**0**，即关闭日志备份跨地域备份功能。
     * @example `30`
     */
    "LogBackupAnotherRegionRetentionPeriod"?: string;
}
