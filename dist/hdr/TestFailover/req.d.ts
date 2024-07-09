export interface TestFailoverRequest {
    /**
     * 受保护服务器ID
     * @example `sr-000cvyfewfi7eudxml1a`
     */
    "ServerId"?: string;
    /**
     * 演练的实例名称
     * @example `test-failover-instance`
     */
    "RecoveryInstanceName"?: string;
    /**
     * 演练实例的CPU核数
     * @example `2`
     */
    "RecoveryCpu"?: number;
    /**
     * 演练实例的内存大小，单位MB
     * @example `4294967296`
     */
    "RecoveryMemory"?: number;
    /**
     * 演练的实例规格，未指定时按照指定的CPU核数、内存大小自动寻找可用规格
     * @example `ecs.c5.large  `
     */
    "RecoveryInstanceType"?: string;
    /**
     * 演练实例是否使用SSD类型的云盘
     * @example `false`
     */
    "RecoveryUseSsd"?: boolean;
    /**
     * 演练实例是否使用ESSD类型的云盘
     * @example `false`
     */
    "RecoveryUseEssd"?: boolean;
    /**
     * 演练实例所在的VSwitch ID
     * @example `vsw-bp1g0s2u3b2kbn46kiy53`
     */
    "RecoveryNetwork"?: string;
    /**
     * 演练实例是否保留源机的IP（需要演练所在的VSwitch包含相应网段）
     * @example `false`
     */
    "RecoveryReserveIp"?: boolean;
    /**
     * 演练实例是否使用DHCP指定IP
     * @example `false`
     */
    "RecoveryUseDhcp"?: boolean;
    /**
     * 演练实例的IP
     * @example `10.10.10.10`
     */
    "RecoveryIpAddress"?: string;
    /**
     * 演练实例启动后执行脚本类型，可选项：SHELL
     * @example `SHELL`
     */
    "RecoveryPostScriptType"?: string;
    /**
     * 演练实例启动后执行脚本
     * @example `echo \"127.0.0.1 kubernetes.docker.internal\" >> /etc/hosts`
     */
    "RecoveryPostScriptContent"?: string;
    /**
     * 演练实例使用的恢复点ID
     * @example `rp-0001cgurtbrvrkj2p2pp`
     */
    "RecoveryPointId"?: string;
    /**
     * 恢复点时间，若未指定恢复点ID时，根据恢复点时间查询可用恢复点。
     * @example `1646046000`
     */
    "RecoveryPointTime"?: number;
    /**
     * 演练实例绑定的弹性公网IP ID
     * @example `eip-bp1nf283u9p060q4gim7m`
     */
    "EipAddressId"?: string;
    /**
     * ESSD盘的PL等级，支持的PL等级按照最小的云盘大小进行判断
     * @example `PL3`
     */
    "RecoveryEssdPerformanceLevel"?: string;
}
