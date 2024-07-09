export interface DescribeServersResponse {
    /**
     * 请求id。
     * @example `D2B255D3-9736-5169-B488-C735A8BBCD79`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * 状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 分页查询时每页的行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `2`
     */
    PageNumber: number;
    /**
     * 总条数。
     * @example `10`
     */
    TotalCount: number;
    Servers: {
        /**
         * 受保护服务器信息
         */
        server: {
            /**
             * -
             * @example `-`
             */
            RecoveredInstanceName: string;
            /**
             * 主站站点ID
             * @example `si-000cm9ax8sgplgye2vc4`
             */
            PrimarySiteId: string;
            /**
             * 受保护服务器ID
             * @example `sr-000cm9ax8sh2381wa7kv`
             */
            ServerId: string;
            /**
             * 容灾切换的实例是否使用DHCP分配IP
             * @example `true`
             */
            RecoveryUseDhcp: boolean;
            /**
             * 容灾切换的实例内存大小
             * @example `8589934592`
             */
            RecoveryMemory: number;
            /**
             * 主站网关版本
             * @example `3.7.3`
             */
            SourceGatewayVersion: string;
            /**
             * 增量复制开始时间
             * @example `1646049677`
             */
            IncrementalSyncStartTime: number;
            /**
             * 恢复点策略
             * @example `"{\"scheduleType\":\"CRON\",\"expression\":\"0 0 *​/1 * * 0,1,2,3,4,5,6\",\"initialDelay\":0}"`
             */
            CrashConsistentPointPolicy: string;
            /**
             * 容灾演练、容灾切换等机器启动后执行的脚本内容
             * @example `"echo \"127.0.0.1 kubernetes.docker.internal\" >> /etc/hosts"`
             */
            RecoveryPostScriptContent: string;
            /**
             * 容灾演练的实例ID
             * @example `i-bp13zgzv13am2n2z92lb`
             */
            TestRecoveredInstanceId: string;
            /**
             * 复影服务器所在的VSwitch ID
             * @example `vsw-2zey7xe0m8dbqrks2jb9h`
             */
            ReplicationNetwork: string;
            /**
             * 容灾演练、容灾切换的实例是否使用ESSD
             * @example `false`
             */
            RecoveryUseEssd: boolean;
            /**
             * 目的端网关版本
             * @example `3.7.3`
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
             * 复影服务器是否使用SSD
             * @example `true`
             */
            ReplicationUseSsd: boolean;
            /**
             * 恢复时间目标，单位秒
             * @example `30`
             */
            Rpo: number;
            /**
             * 是否处于一致性状态
             * @example `true`
             */
            Consistent: boolean;
            /**
             * 全量复制大小，单位B
             * @example `150202220544`
             */
            FullSyncTotalSize: number;
            /**
             * 容灾切换的实例IP
             * @example `192.168.2.2`
             */
            RecoveredIpAddress: string;
            /**
             * 别名
             * @example `test-ecs`
             */
            Alias: string;
            /**
             * 状态
             * @example `replicating`
             */
            Status: string;
            /**
             * 容灾演练状态
             * @example `testFailovered`
             */
            TestFailoverStatus: string;
            /**
             * 复影服务器是否使用ESSD
             * @example `false`
             */
            ReplicationUseEssd: boolean;
            /**
             * 操作系统详情
             * @example `CentOS;7.9.2009`
             */
            OsDetail: string;
            /**
             * 容灾演练的机器IP地址
             * @example `192.168.2.2`
             */
            TestRecoveredIpAddress: string;
            /**
             * 从站站点ID
             * @example `si-0007o5em8n6mhm8hee1l`
             */
            SecondarySiteId: string;
            /**
             * 全量复制进度百分比
             * @example `0`
             */
            FullSyncProgress: number;
            /**
             * 容灾切换的实例规格
             * @example `ecs.r6.3xlarge`
             */
            RecoveryInstanceType: string;
            /**
             * 内网IP地址
             * @example `30.42.105.6`
             */
            IpAddress: string;
            /**
             * 容灾切换的实例名称
             * @example `HDR_Recovery-sr-000c2rz7q8tak59pt6sw`
             */
            RecoveryInstanceName: string;
            /**
             * 源端实例ID
             * @example `i-bp19axn91irnsi9204xg`
             */
            OriginalInstanceId: string;
            /**
             * ECS实例ID
             * @example `i-bp19axn91irnsi9204xg`
             */
            InstanceId: string;
            /**
             * 容灾切换的实例ID
             * @example `i-bp19axn91irnsi9204xg`
             */
            RecoveredInstanceId: string;
            /**
             * 容灾切换实例保留源端IP
             * @example `true`
             */
            RecoveryReserveIp: boolean;
            /**
             * 内存大小
             * @example `4294967295`
             */
            Memory: number;
            /**
             * 容灾切换设置的手动IP地址
             * @example `192.168.2.2`
             */
            RecoveryIpAddress: string;
            /**
             * 复影服务器所在的虚拟交换机ID
             * @example `vsw-uf63qu8ocjcly44tai570`
             */
            RecoveryNetwork: string;
            /**
             * 出错原因
             * @example `cdr.console.plugin.alicloud.agent_deploy_already_installed`
             */
            Errno: string;
            /**
             * 复影服务器使用源机，仅反向复制时有效
             * @example `false`
             */
            ReplicationUseOriginalInstance: boolean;
            /**
             * 主机名称
             * @example `test`
             */
            Hostname: string;
            /**
             * 容灾切换的实例CPU核数
             * @example `4`
             */
            RecoveryCpu: number;
            /**
             * 客户端代理端口
             * @example `9080`
             */
            AgentPort: number;
            /**
             * 复影服务器使用DHCP分配IP
             * @example `false`
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
             * @example `1603469836288`
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
             * 容灾切换的实例启动后执行的脚本类型
             * @example `SHELL`
             */
            RecoveryPostScriptType: string;
            /**
             * 复制使用的基础设施ID
             * @example `is-0004ka624vrxd9xsvs4f`
             */
            ReplicationInfrastructureId: string;
            /**
             * 连接状态
             * @example `connected`
             */
            ConnectionStatus: string;
            /**
             * 该实例支持与禁用的操作列表
             * @example `"{\"Resynchronize\":true,\"TestFailover\":true,\"TestCleanup\":true,\"ChangeRecoveryPoint\":true,\"UnregisterServer\":true,\"ReversedEnableReplication\":true,\"ReversedDisableReplication\":true,\"DisableReplication\":true,\"CommitFailover\":true,\"RestartServer\":true,\"UpgradeServer\":true,\"ForcedFailover\":true,\"RepairReplication\":true,\"EnableReplication\":true,\"TriggerReversedRegister\":true,\"SetupAgent\":true,\"TriggerRegister\":true,\"CollectSupportBundle\":true,\"Failback\":true}"`
             */
            Operations: string;
            /**
             * 正在执行的任务ID
             * @example `t-0007rvzart0v31c0x93q`
             */
            TaskId: string;
            /**
             * 容灾切换的实例是否使用SSD
             * @example `true`
             */
            RecoveryUseSsd: boolean;
            /**
             * 磁盘信息列表
             * @example `[{\"id\":\"0\",\"boot\":true,\"size\":500363689984}]`
             */
            Disks: string;
            /**
             * 演练、切换使用ESSD时选定的PL等级
             * @example `PL3`
             */
            RecoveryEssdPerformanceLevel: string;
            /**
             * 最近一次创建恢复点的时间
             * @example `1661419052`
             */
            LatestRecoveryPointTime: number;
        }[];
    };
}
