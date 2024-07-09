export interface FailbackRequest {
    /**
     * 受保护服务器ID
     * @example `sr-000bzkmmlwghj95tnx15`
     */
    "ServerId"?: string;
    /**
     * 恢复站点基础设施ID
     * @example `is-0007rvzart0rz2byr2x0`
     */
    "RecoveryInfrastructureId"?: string;
    /**
     * 容灾恢复的实例名称
     * @example `HDR_Recovery-sr-0007rvzart0rz2bv9fzm`
     */
    "RecoveryInstanceName"?: string;
    /**
     * 容灾恢复的实例CPU核数
     * @example `4`
     */
    "RecoveryCpu"?: number;
    /**
     * 容灾恢复的实例内存大小，单位MB
     * @example `4294967296`
     */
    "RecoveryMemory"?: number;
    /**
     * 容灾恢复的实例规格，若未指定，将根据CPU核数和内存大小自动寻找可用的实例规格
     * @example `ecs.c5.2xlarge`
     */
    "RecoveryInstanceType"?: string;
    /**
     * 故障恢复的实例所在的VSwitch ID
     * @example `vsw-bp1xmea0mkjtxqoubk7q8`
     */
    "RecoveryNetwork"?: string;
    /**
     * 故障恢复的实例保留原有IP
     * @example `true`
     */
    "RecoveryReserveIp"?: boolean;
    /**
     * 故障恢复的实例使用DHCP分配IP
     * @example `false`
     */
    "RecoveryUseDhcp"?: boolean;
    /**
     * 故障恢复的实例手动设置IP
     * @example `192.168.2.2`
     */
    "RecoveryIpAddress"?: string;
    /**
     * 故障恢复的实例启动后执行的脚本类型
     * @example `SHELL`
     */
    "RecoveryPostScriptType"?: string;
    /**
     * 故障恢复的实例启动后执行的脚本内容
     * @example `"echo \"127.0.0.1 kubernetes.docker.internal\" >> /etc/hosts"`
     */
    "RecoveryPostScriptContent"?: string;
    /**
     * 恢复点ID
     * @example `rp-0001625ljmig7ahibe0y`
     */
    "RecoveryPointId"?: string;
}
