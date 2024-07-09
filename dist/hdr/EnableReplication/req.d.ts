export interface EnableReplicationRequest {
    /**
     * 受保护服务器ID
     * @example `sr-0005qxusucbo6yomzb9x`
     */
    "ServerId"?: string;
    /**
     * 复影实例是否使用SSD云盘
     * @example `false`
     */
    "ReplicationUseSsd"?: boolean;
    /**
     * 复影实例是否使用ESSD云盘
     * @example `false`
     */
    "ReplicationUseEssd"?: boolean;
    /**
     * 复制网络VSwitch ID
     * @example `vsw-bp1g0s2u3b2kbn46kiy53`
     */
    "ReplicationNetwork"?: string;
    /**
     * 恢复网络VSwitch ID
     * @example `vsw-bp1g0s2u3b2kbn46kiy53`
     */
    "RecoveryNetwork"?: string;
    /**
     * 恢复点策略
     * @example `{"scheduleType":"CRON","expression":"0 0 *​/1 * * 0,1,2,3,4,5,6","initialDelay":0}`
     */
    "CrashConsistentPointPolicy"?: string;
}
