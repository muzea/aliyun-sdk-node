export interface DescribeServerResponse {
    /**
     * 主站站点ID
     * @example `si-0001jntih0phb0i2w1ya`
     */
    PrimarySiteId: string;
    /**
     * 受保护服务器ID
     * @example `sr-0005qxusucbiip0g6t93`
     */
    ServerId: string;
    /**
     * 恢复是否使用DHCP自动分配IP
     * @example `false`
     */
    RecoveryUseDhcp: boolean;
    /**
     * 请求ID
     * @example `BBCC4082-98DF-5804-96C6-0E74C37C5867`
     */
    RequestId: string;
    /**
     * 故障切换使用的实例内存大小
     * @example `4294967296`
     */
    RecoveryMemory: number;
    /**
     * 主站网关版本
     * @example `3.7.3`
     */
    SourceGatewayVersion: string;
    /**
     * 增量复制开始时间
     * @example `0`
     */
    IncrementalSyncStartTime: number;
    /**
     * 恢复点策略
     * @example `{\"scheduleType\":\"CRON\",\"expression\":\"0 0 *​/1 * * 0,1,2,3,4,5,6\",\"initialDelay\":0}`
     */
    CrashConsistentPointPolicy: string;
    /**
     * 请求是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * 故障切换的实例启动后执行的脚本内容
     * @example `echo \"127.0.0.1 kubernetes.docker.internal\" >> /etc/hosts`
     */
    RecoveryPostScriptContent: string;
    /**
     * 容灾演练的实例ID
     * @example `i-bp13zgzv13am2n2z92lb`
     */
    TestRecoveredInstanceId: string;
    /**
     * 复制网络VSwitch ID
     * @example `vsw-bp1g0s2u3b2kbn46kiy53`
     */
    ReplicationNetwork: string;
    /**
     * 故障切换的实例云盘类型是否使用ESSD
     * @example `false`
     */
    RecoveryUseEssd: boolean;
    /**
     * 目的端网关版本
     * @example `i-bp13zgzv13am2n2z92lb`
     */
    TargetGatewayVersion: string;
    /**
     * 操作系统类型
     * @example `linux`
     */
    OsType: string;
    /**
     * 全量复制开始时间
     * @example `0`
     */
    FullSyncStartTime: number;
    /**
     * 复影实例是否使用SSD云盘
     * @example `false`
     */
    ReplicationUseSsd: boolean;
    /**
     * 恢复时间目标，单位秒
     * @example `45`
     */
    Rpo: number;
    /**
     * 是否处于一致性状态
     * @example `false`
     */
    Consistent: boolean;
    /**
     * 全量复制大小，单位B
     * @example `365072220160`
     */
    FullSyncTotalSize: number;
    /**
     * 容灾切换的实例IP
     * @example `192.168.2.2`
     */
    RecoveredIpAddress: string;
    /**
     * 别名
     * @example `bsdewmpci_rz`
     */
    Alias: string;
    /**
     * 实例状态
     * @example `replicating`
     */
    Status: string;
    /**
     * 容灾演练状态
     * @example `testFailovered`
     */
    TestFailoverStatus: string;
    /**
     * 复影实例是否使用ESSD云盘
     * @example `false`
     */
    ReplicationUseEssd: boolean;
    /**
     * 操作系统详情
     * @example `CentOS;7.9.2009`
     */
    OsDetail: string;
    /**
     * 返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 容灾演练的机器IP地址
     * @example `192.168.2.2`
     */
    TestRecoveredIpAddress: string;
    /**
     * 从站站点ID
     * @example `si-000imvpcegvbh6i5kd2u`
     */
    SecondarySiteId: string;
    /**
     * 全量复制进度百分比
     * @example `17`
     */
    FullSyncProgress: number;
    /**
     * 故障切换的实例规格
     * @example `ecs.c5.2xlarge`
     */
    RecoveryInstanceType: string;
    /**
     * 受保护服务器IP地址
     * @example `30.42.105.6`
     */
    IpAddress: string;
    /**
     * 故障切换的实例名称
     * @example `HDR_Recovery-sr-000bzkmmlwghq3soqry2`
     */
    RecoveryInstanceName: string;
    /**
     * 源端实例ID
     * @example `i-bp19axn91irnsi9204xg`
     */
    OriginalInstanceId: string;
    /**
     * 容灾切换的实例ID
     * @example `i-bp19axn91irnsi9204xg`
     */
    RecoveredInstanceId: string;
    /**
     * 演练实例是否保留源机的IP（需要演练所在的VSwitch包含相应网段）
     * @example `false`
     */
    RecoveryReserveIp: boolean;
    /**
     * 状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 内存大小
     * @example `8589934591`
     */
    Memory: number;
    /**
     * 故障切换的实例手动设置IP
     * @example `192.168.2.2`
     */
    RecoveryIpAddress: string;
    /**
     * 故障切换的实例所在的VSwitch ID
     * @example `vsw-uf61v3bg6r790ir22jqv4`
     */
    RecoveryNetwork: string;
    /**
     * 出错原因
     * @example `cdr.console.plugin.failed_to_connect`
     */
    Errno: string;
    /**
     * 反向复制使用源机
     * @example `false`
     */
    ReplicationUseOriginalInstance: boolean;
    /**
     * 主机名称
     * @example `iZ2ze0jazgwtuxettbk1ywZ`
     */
    Hostname: string;
    /**
     * 故障切换的实例CPU核数
     * @example `4`
     */
    RecoveryCpu: number;
    /**
     * 客户端代理端口
     * @example `9080`
     */
    AgentPort: number;
    /**
     * -
     * @example `-`
     */
    ReplicationUseDhcp: boolean;
    /**
     * 容灾演练的实例名称
     * @example `HDR_Recovery-sr-000c2rz7q8tak59pt6sw`
     */
    TestRecoveredInstanceName: string;
    /**
     * 客户端版本
     * @example `3.7.3`
     */
    AgentVersion: string;
    /**
     * 全量复制已完成大小，单位B
     * @example `3285276688384`
     */
    FullSyncCurrentSize: number;
    /**
     * 复制使用的基础设施类型
     * @example `aliyun`
     */
    ReplicationInfrastructureType: string;
    /**
     * CPU核数
     * @example `4`
     */
    Cpu: number;
    /**
     * 演练实例启动后执行脚本类型，可选项：SHELL
     * @example `SHELL`
     */
    RecoveryPostScriptType: string;
    /**
     * 目标站点基础设施ID
     * @example `is-000bzkmmlwgibbduuoff`
     */
    ReplicationInfrastructureId: string;
    /**
     * 连接状态
     * @example `connected`
     */
    ConnectionStatus: string;
    /**
     * 支持的操作
     * @example `"{\"Resynchronize\":true,\"TestFailover\":true,\"TestCleanup\":true,\"ChangeRecoveryPoint\":true,\"UnregisterServer\":true,\"ReversedEnableReplication\":true,\"ReversedDisableReplication\":true,\"DisableReplication\":true,\"CommitFailover\":true,\"RestartServer\":true,\"UpgradeServer\":true,\"ForcedFailover\":true,\"RepairReplication\":true,\"EnableReplication\":true,\"TriggerReversedRegister\":true,\"SetupAgent\":true,\"TriggerRegister\":true,\"CollectSupportBundle\":true,\"Failback\":true}"`
     */
    Operations: string;
    /**
     * 任务ID。
     * @example `t-0004ka624vrza82g46ne`
     */
    TaskId: string;
    /**
     * 故障切换的实例云盘类型是否使用SSD
     * @example `false`
     */
    RecoveryUseSsd: boolean;
    /**
     * 磁盘信息例表。
     * @example `[{\"id\":\"0\",\"boot\":true,\"size\":500363689984}]`
     */
    Disks: string;
    /**
     * 演练、切换实例使用ESSD选定的PL等级
     * @example `PL1`
     */
    RecoveryEssdPerformanceLevel: string;
    /**
     * 最近一次创建恢复点的时间
     * @example `1661419052`
     */
    LatestRecoveryPointTime: string;
}
