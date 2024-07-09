export interface CreateDedicatedClusterMonitorRuleRequest {
    /**
     * 实例ID。
     * @example `rm-bp1162kryivb8****`
     */
    "InstanceId"?: string;
    /**
     * 集群ID。
     * @example `dts-dasd22******`
     */
    "DedicatedClusterId": string;
    /**
     * 报警开关，取值：
     * - **1**：打开。
     * - **0**：关闭。
     * @example `1`
     */
    "NoticeSwitch"?: number;
    /**
     * DU报警阈值，单位为%。
     * @example `20`
     */
    "DuAlarmThreshold"?: number;
    /**
     * CPU报警阈值，单位为%。
     * @example `30`
     */
    "CpuAlarmThreshold"?: number;
    /**
     * Mem报警阈值，单位为%。
     * @example `40`
     */
    "MemAlarmThreshold"?: number;
    /**
     * 磁盘报警阈值，单位为%。
     * @example `100`
     */
    "DiskAlarmThreshold"?: number;
    /**
     * 报警电话，多个用逗号（,）隔开。
     * @example `186****7654`
     */
    "Phones": string;
    /**
     * DTS实例所在地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
