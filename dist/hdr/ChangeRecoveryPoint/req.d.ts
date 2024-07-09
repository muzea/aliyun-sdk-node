export interface ChangeRecoveryPointRequest {
    /**
     * 受保护服务器ID
     * @example `sr-000bak4sdet6gv8q0c2j`
     */
    "ServerId"?: string;
    /**
     * 恢复的实例名称
     * @example `HDR_Recovery-sr-000c9550g8gycc8oi4fb-cpr`
     */
    "RecoveryInstanceName"?: string;
    /**
     * 恢复的实例CPU核数
     * @example `4`
     */
    "RecoveryCpu"?: number;
    /**
     * 恢复的实例内存大小
     * @example `4294967296`
     */
    "RecoveryMemory"?: number;
    /**
     * 恢复的实例规格
     * @example `ecs.r6.3xlarge`
     */
    "RecoveryInstanceType"?: string;
    /**
     * 恢复的实例是否使用SSD
     * @example `false`
     */
    "RecoveryUseSsd"?: boolean;
    /**
     * 恢复的实例是否使用ESSD
     * @example `false`
     */
    "RecoveryUseEssd"?: boolean;
    /**
     * 恢复的实例所在的VSwitch ID
     * @example `vsw-uf61v3bg6r790ir22jqv4`
     */
    "RecoveryNetwork"?: string;
    /**
     * 恢复的实例是否保留源机IP
     * @example `false`
     */
    "RecoveryReserveIp"?: boolean;
    /**
     * 恢复的实例是否使用DHCP分配IP
     * @example `true`
     */
    "RecoveryUseDhcp"?: boolean;
    /**
     * 恢复的实例手动指定IP
     * @example `192.168.2.2`
     */
    "RecoveryIpAddress"?: string;
    /**
     * 恢复的实例启动后执行的脚本类型
     * @example `SHELL`
     */
    "RecoveryPostScriptType"?: string;
    /**
     * 恢复的实例启动后执行的脚本内容
     * @example `echo \"127.0.0.1 kubernetes.docker.internal\" >> /etc/hosts`
     */
    "RecoveryPostScriptContent"?: string;
    /**
     * 恢复点ID
     * @example `rp-0001625ljmig7ahibe0y`
     */
    "RecoveryPointId"?: string;
    /**
     * 恢复点时间
     * @example `1637002799`
     */
    "RecoveryPointTime"?: number;
    /**
     * 恢复的实例绑定的弹性网卡ID
     * @example `eip-2zelae2qye2ztjfj82f9z`
     */
    "EipAddressId"?: string;
    /**
     * ESSD盘的PL等级，支持的PL等级按照最小的云盘大小进行判断
     * @example `PL1`
     */
    "RecoveryEssdPerformanceLevel"?: string;
}
