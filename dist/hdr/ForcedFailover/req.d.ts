export interface ForcedFailoverRequest {
    /**
     * 受保护服务器ID
     * @example `sr-000ih1rl47q6hksc910d`
     */
    "ServerId"?: string;
    /**
     * 故障切换的实例名称
     * @example `HDR_Recovery-sr-000bzkmmlwghq3soqry2`
     */
    "RecoveryInstanceName"?: string;
    /**
     * 故障切换的实例CPU核数
     * @example `4`
     */
    "RecoveryCpu"?: number;
    /**
     * 故障切换的实例内存大小
     * @example `4294967296`
     */
    "RecoveryMemory"?: number;
    /**
     * 故障切换的实例规格
     * @example `ecs.r5.3xlarge`
     */
    "RecoveryInstanceType"?: string;
    /**
     * 故障切换的实例云盘类型是否使用SSD
     * @example `false`
     */
    "RecoveryUseSsd"?: boolean;
    /**
     * 故障切换的实例云盘类型是否使用ESSD
     * @example `false`
     */
    "RecoveryUseEssd"?: boolean;
    /**
     * 故障切换的实例所在的VSwitch ID
     * @example `vsw-bp1fh05y7ybq9kep6rtwu`
     */
    "RecoveryNetwork"?: string;
    /**
     * 故障切换的实例是否保留源机IP
     * @example `false`
     */
    "RecoveryReserveIp"?: boolean;
    /**
     * 故障切换的实例是否使用DHCP分配IP
     * @example `false`
     */
    "RecoveryUseDhcp"?: boolean;
    /**
     * 故障切换的实例手动设置IP
     * @example `192.168.2.2`
     */
    "RecoveryIpAddress"?: string;
    /**
     * 故障切换的实例启动后执行的脚本类型
     * @example `SHELL`
     */
    "RecoveryPostScriptType"?: string;
    /**
     * 故障切换的实例启动后执行的脚本内容
     * @example `echo \"127.0.0.1 kubernetes.docker.internal\" >> /etc/hosts`
     */
    "RecoveryPostScriptContent"?: string;
    /**
     * 恢复点ID
     * @example `rp-000184qxs690bth6jyqn`
     */
    "RecoveryPointId"?: string;
    /**
     * 恢复点时间
     * @example `1636526948`
     */
    "RecoveryPointTime"?: number;
    /**
     * 故障切换的实例绑定的弹性网卡ID
     * @example `eip-bp1x7nua6eab8m4vsis9k`
     */
    "EipAddressId"?: string;
    /**
     * ESSD盘的PL等级，支持的PL等级按照最小的云盘大小进行判断
     * @example `PL2`
     */
    "RecoveryEssdPerformanceLevel"?: string;
}
