export interface DescribeDBInstanceAttributeResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    Items: {
        /**
         * 实例属性列表。
         */
        DBInstanceAttribute: {
            /**
             * VPC ID。
             * @example `vpc-****`
             */
            VpcId: string;
            /**
             * 创建时间。格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2011-05-30T12:11:04Z`
             */
            CreationTime: string;
            /**
             * 增量数据来源的实例ID，例如灾备实例的增量数据来源是主实例。只读实例的增量数据来源是主实例，如果没有返回此参数则表示该实例是主实例。
             * @example `rm-uf6wjk5****`
             */
            IncrementSourceDBInstanceId: string;
            /**
             * 实例可维护时间段，表示为UTC时间，+8小时后是控制台上显示到的可维护时间段。
             * @example `00:00Z-02:00Z`
             */
            MaintainTime: string;
            /**
             * 实例付费方式，返回值如下：
             * * **Postpaid**：按量付费。
             * * **Prepaid**：包年包月。
             * * **SERVERLESS**：Serverless。
             * @example `Postpaid`
             */
            PayType: string;
            /**
             * 实例可用性状态，单位：百分比（%）。
             * @example `100.0%`
             */
            AvailabilityValue: string;
            /**
             * 数据库版本。
             * @example `8.0`
             */
            EngineVersion: string;
            /**
             * 专属集群ID。
             * @example `dhg-7a9*****`
             */
            DedicatedHostGroupId: string;
            /**
             * 内网连接地址。
             * @example `rm-uf6wjk5****.mysql.rds.aliyuncs.com`
             */
            ConnectionString: string;
            /**
             * 当前实例是否可以开放SA账号、AD域、主机账号等高权限功能，返回值如下：
             * * **Enable**：开放。
             * * **Disabled**：不开放。
             * @example `Disabled`
             */
            SuperPermissionMode: string;
            /**
             * 实例的网络类型，返回值如下：
             * * **Classic**：经典网络。
             * * **VPC**：专有网络。
             * @example `Classic`
             */
            InstanceNetworkType: string;
            /**
             * 主实例的ID。
             * > 如果没有返回此参数则表示该实例是主实例。
             * @example `rm-uf6wjk5****`
             */
            MasterInstanceId: string;
            /**
             * 实例升级小版本的方式，返回值如下：
             * * **Auto**：自动升级小版本。
             * * **Manual**：不自动升级，仅在当前版本下线时才强制升级。
             * @example `Auto`
             */
            AutoUpgradeMinorVersion: string;
            /**
             * 到期时间。格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * >按量付费实例无到期时间。
             * @example `2019-03-27T16:00:00Z`
             */
            ExpireTime: string;
            /**
             * 可创建账号的最大数量。
             * @example `50`
             */
            AccountMaxQuantity: number;
            /**
             * 主可用区ID。
             * @example `5454284`
             */
            MasterZone: string;
            /**
             * 该实例如果挂载着灾备实例，即为灾备实例的ID。
             * @example `rm-uf64zsu****`
             */
            GuardDBInstanceId: string;
            /**
             * 实例存储空间，单位：GB。
             * @example `10`
             */
            DBInstanceStorage: number;
            /**
             * 时区。
             * @example `Central Standard Time`
             */
            TimeZone: string;
            /**
             * 否满足临时升级条件
             * > 按量付费实例不支持临时升级。
             * @example `true`
             */
            CanTempUpgrade: boolean;
            /**
             * 当前实例支持的最新内核版本。
             * @example `rds_20231031`
             */
            LatestKernelVersion: string;
            /**
             * 专属集群MySQL通用版实例的异常提示等级，返回值如下：
             * * **1**：正常。
             * * **2**：只读实例和主实例规格不对齐，可能影响可用性，请按需调整实例规格。
             * @example `1`
             */
            TipsLevel: number;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-a`
             */
            ZoneId: string;
            /**
             * 最大并发连接数。
             * @example `60`
             */
            MaxConnections: number;
            /**
             * 实例ID。
             * @example `rm-uf6wjk5****`
             */
            DBInstanceId: string;
            /**
             * 该实例如果挂载着临时实例，即为临时实例ID。
             * @example `rm-uf64zsu****`
             */
            TempDBInstanceId: string;
            /**
             * 目前只针对**SQL Server**，获取高级特性值，多个值之间用半角逗号（,）隔开，返回值如下：
             * * **LinkedServer**：链接服务器。
             * * **DistributeTransaction**：分布式事务。
             * @example `LinkedServer`
             */
            AdvancedFeatures: string;
            /**
             * 实例储存类型，返回值如下：
             * * **local_ssd**、**ephemeral_ssd**：本地SSD盘。
             * * **cloud_ssd**：SSD云盘。
             * * **cloud_essd**：ESSD云盘。
             * * **general_essd**：通用云盘。
             * @example `local_ssd`
             */
            DBInstanceStorageType: string;
            /**
             * 实例内存，单位：M。
             * @example `4096`
             */
            DBInstanceMemory: number;
            /**
             * IP地址类型。当前仅支持**IPv4**。
             * @example `IPv4`
             */
            IPType: string;
            /**
             * 实例的代理类型，返回值如下：
             * * **1**：共享代理。
             * * **2**：独享代理。
             * >不建议使用该参数，请使用返回参数**ProxyType**。
             * @example `2`
             */
            ConsoleVersion: string;
            /**
             * 实例的访问模式，返回值如下：
             * * **Standard**：标准访问模式。
             * * **Safe**：数据库代理模式。
             * @example `Standard`
             */
            ConnectionMode: string;
            /**
             * 内网连接端口。
             * @example `3306`
             */
            Port: string;
            /**
             * 实例锁定模式，返回值如下：
             * * **Unlock**：正常。
             * * **ManualLock**：手动触发锁定。
             * * **LockByExpiration**：实例过期自动锁定。
             * * **LockByRestoration**：实例回滚前的自动锁定。
             * * **LockByDiskQuota**：实例空间满自动锁定。
             * * **LockReadInstanceByDiskQuota**：只读实例空间满自动锁定。
             * @example `Unlock`
             */
            LockMode: string;
            /**
             * 专属集群MySQL通用版实例所属的组名。
             * @example `TestGroup`
             */
            GeneralGroupName: string;
            /**
             * 专有网络实例ID。
             * @example `vpc-23rsxdf****`
             */
            VpcCloudInstanceId: string;
            /**
             * 系统字符集排序规则。
             * @example `Chinese_PRC_CI_AS`
             */
            Collation: string;
            /**
             * 最大每秒IO请求次数。
             * @example `150`
             */
            MaxIOPS: number;
            /**
             * 最大IO吞吐。单位：MB/s。
             * @example `100`
             */
            MaxIOMBPS: number;
            /**
             * 专属集群MySQL通用版实例的异常提示信息。
             * @example `normal`
             */
            Tips: string;
            /**
             * IP白名单分组下的IP列表。
             * @example `192.168.XX.XX/24`
             */
            SecurityIPList: string;
            /**
             * 白名单模式，返回值如下：
             * * **normal**：通用模式。
             * * **safety**：高安全模式。
             * @example `normal`
             */
            SecurityIPMode: string;
            /**
             * 实例规格族，返回值如下：
             * * **s**：共享型。
             * * **x**：通用型。
             * * **d**：独享套餐。
             * * **h**：独占物理机。
             * @example `s`
             */
            DBInstanceClassType: string;
            /**
             * 实例的磁盘使用量，单位：mb。
             * @example `300`
             */
            DBInstanceDiskUsed: string;
            /**
             * 实例支持的代理类型，返回值如下：
             * * **0**：表示不支持开通代理。
             * * **1**：表示支持开通共享代理（多租户模式）。
             * * **2**：表示支持开通独享代理（单租户模式）。
             * @example `1`
             */
            ProxyType: number;
            /**
             * 当前内核版本。
             * @example `rds_20201010`
             */
            CurrentKernelVersion: string;
            /**
             * 实例备注。
             * @example `testInstance`
             */
            DBInstanceDescription: string;
            /**
             * 实例临时升级开始时间
             * > 按量付费实例无实例临时升级开始时间
             * @example `2024-05-29 00:00:00`
             */
            TempUpgradeTimeStart: string;
            /**
             * 实例CPU数量。
             * @example `2`
             */
            DBInstanceCPU: string;
            /**
             * 实例是内网或外网，返回值如下：
             * * **Internet**：外网。
             * * **Intranet**：内网。
             * @example `Internet`
             */
            DBInstanceNetType: string;
            /**
             * 实例类型，返回值如下：
             * * **Primary**：主实例。
             * * **Readonly**：只读实例。
             * * **Guard**：灾备实例。
             * * **Temp**：临时实例。
             * @example `Primary`
             */
            DBInstanceType: string;
            /**
             * 锁定原因。
             * @example `instance_expired`
             */
            LockReason: string;
            /**
             * 实例状态，详情请参见[实例状态表](~~26315~~)。
             * @example `Running`
             */
            DBInstanceStatus: string;
            /**
             * 一个实例下可创建最大数据库数量。
             * @example `200`
             */
            DBMaxQuantity: number;
            /**
             * 地域ID。
             * @example `cn-hangzhou `
             */
            RegionId: string;
            /**
             * 只读实例延迟复制时间，只读实例延迟**ReadonlyInstanceSQLDelayedTime**的时间后再同步主实例数据，单位：秒（s）。
             * @example `30`
             */
            ReadonlyInstanceSQLDelayedTime: string;
            /**
             * 实例临时升级结束时间
             * > 按量付费实例无实例临时升级结束时间
             * @example `2024-05-30 00:00:00`
             */
            TempUpgradeTimeEnd: string;
            /**
             * 交换机ID。
             * @example `vsw-****`
             */
            VSwitchId: string;
            /**
             * 资源组ID。
             * @example `rg-acfmy****`
             */
            ResourceGroupId: string;
            /**
             * 实例系列，返回值如下：
             * * **Basic**：基础系列
             * * **HighAvailability**：高可用系列
             * * **cluster**：MySQL集群系列
             * * **AlwaysOn**：SQL Server集群系列
             * * **Finance**：三节点企业系列
             * * **Serverless_basic**：Serverless基础系列
             * @example `Basic`
             */
            Category: string;
            /**
             * 实例规格，详情请参见[实例规格表](~~26312~~)。
             * @example `rds.mys2.small`
             */
            DBInstanceClass: string;
            /**
             * 数据库类型，返回值如下：
             * - **MySQL**
             * - **PostgreSQL**
             * - **SQLServer**
             * - **MariaDB**
             * @example `MySQL`
             */
            Engine: string;
            SlaveZones: {
                /**
                 * 组成SlaveZones的参数列表。
                 */
                SlaveZone: {
                    /**
                     * 可用区。
                     * @example `cn-hangzhou-a`
                     */
                    ZoneId: string;
                }[];
            };
            ReadOnlyDBInstanceIds: {
                /**
                 * 主实例下挂载的只读实例ID列表。
                 */
                ReadOnlyDBInstanceId: {
                    /**
                     * 只读实例ID。
                     * @example `rm-bp****`
                     */
                    DBInstanceId: string;
                }[];
            };
            /**
             * 扩展信息。
             */
            Extra: {
                DBInstanceIds: {
                    /**
                     * 数据库实例ID列表。
                     */
                    DBInstanceId: string[];
                };
                /**
                 * 恢复模式。
                 * @example `Simple：简单恢复模式。
                Full：完整恢复模式。`
                 */
                RecoveryModel: string;
            };
            /**
             * 是否已开启释放保护功能，返回值如下：
             * * **true**：已开启。
             * * **false**：未开启。
             * @example `true`
             */
            DeletionProtection: boolean;
            /**
             * RDS Serverless实例的相关设置。
             */
            ServerlessConfig: {
                /**
                 * 实例RCU（RDS Capacity Unit）自动扩缩范围的最小值。
                 * @example `0.5`
                 */
                ScaleMin: number;
                /**
                 * 实例RCU（RDS Capacity Unit）自动扩缩范围的最大值。
                 * @example `8`
                 */
                ScaleMax: number;
                /**
                 * 是否开启Serverless实例的自动启停功能，返回值如下：
                 * - **true**：启用。
                 * - **false**：不启用，默认值。
                 * > 10分钟无任何连接将进入暂停状态，连接时会自动唤醒。
                 * @example `true`
                 */
                AutoPause: boolean;
                /**
                 * 是否开启Serverless实例的强制弹性扩缩容，返回值如下：
                 * - **true**：启用。
                 * - **false**：不启用，默认值。
                 * > 实例RCU的弹性扩缩容通常会立刻生效，但在某些特殊情况下无法即时完成扩缩容，此时可开启本参数进行强制扩缩容。
                 * @example `false`
                 */
                SwitchForce: boolean;
            };
            /**
             * Babelfish for RDS PostgreSQL配置信息。
             * > 该参数仅适用于Babelfish for RDS PostgreSQL实例，更多介绍，请参见[Babelfish简介](~~428613~~)。
             */
            BabelfishConfig: {
                /**
                 * Babelfish开关。
                 * > 购买RDS PostgreSQL实例时，如果开启了Babelfish，则此参数固定为**true**。
                 * @example `true`
                 */
                BabelfishEnabled: string;
                /**
                 * Babelfish迁移模式，返回值如下：
                 * - **single-db**：单数据库模式。
                 * - **multi-db**：多数据库模式。
                 * > Babelfish迁移模式的更多信息，请参见[迁移模式简介](~~428613~~)。
                 * @example `single-db`
                 */
                MigrationMode: string;
            };
            /**
             * 内部参数，无需关注。
             * @example `test`
             */
            kindCode: string;
            /**
             * 实例的架构类型，返回值如下：
             * - **x86**
             * - **arm**
             * @example `x86`
             */
            InstructionSetArch: string;
            DBClusterNodes: {
                /**
                 * 集群节点相关信息。
                 */
                DBClusterNode: {
                    /**
                     * Region ID。
                     * @example `cn-beijing`
                     */
                    NodeRegionId: string;
                    /**
                     * 可用区ID。
                     * @example `cn-beijing-h`
                     */
                    NodeZoneId: string;
                    /**
                     * 节点ID。
                     * @example `rn-****`
                     */
                    NodeId: string;
                    /**
                     * 节点角色，取值含义如下：
                     * - **primary**：主节点
                     * - **secondary**：备节点
                     * @example `primary`
                     */
                    NodeRole: string;
                    /**
                     * 节点规格。
                     * @example `mysql.n2.medium.xc`
                     */
                    ClassCode: string;
                    /**
                     * 节点规格类型。取值范围：
                     * - d：独享规格
                     * - x：通用规格
                     * @example `x`
                     */
                    ClassType: string;
                    /**
                     * 节点CPU大小。
                     * @example `4`
                     */
                    Cpu: string;
                    /**
                     * 节点的内存大小。单位：MB。
                     * @example `4096`
                     */
                    Memory: string;
                    /**
                     * 节点的状态。取值范围：
                     * - active
                     * - creating
                     * - deleting
                     * - classchanging
                     * - restarting
                     * @example `active`
                     */
                    Status: string;
                }[];
            };
            /**
             * <props="intl">无效参数，无需配置。</props>
             * <props="china">通用云盘IO突发功能开关。</props>
             * <props="china">* true：开启IO突发功能。</props>
             * <props="china">* false：关闭IO突发功能。</props>
             * <props="china">> 了解通用云盘的IO突发功能的更多信息，请参见[什么是通用云盘](~~2340501~~)。</props>
             * @example `false`
             */
            BurstingEnabled: boolean;
            /**
             * 弃用参数，无需配置。
             * @example `0`
             */
            BpeEnabled: string;
            /**
             * <props="china">是否开启通用云盘IO加速功能，参数取值含义如下：</props>
             * <props="china"> - 1：开启</props>
             * <props="china"> - 0：不开启</props>
             * <props="china">> 通用云盘的IO加速功能的更多信息，请参见[通用云盘IO加速功能技术介绍](~~2527067~~)。</props>
             * <props="intl">预留参数。</props>
             * @example `0`
             */
            IoAccelerationEnabled: string;
            /**
             * PgBouncer开关。
             * > 仅PostgreSQL实例返回此参数，如果开启了PgBouncer，则此参数返回值为**true**。
             * @example `true`
             */
            PGBouncerEnabled: string;
            /**
             * <props="china">通用云盘数据归档功能开关。</props>
             * <props="china">true：开启。</props>
             * <props="china">false：关闭。</props>
             * <props="intl">预留参数。</props>
             * <props="china">通用云盘的数据归档功能信息，请参见[数据归档](~~2701832~~)。</props>
             * @example `false`
             */
            ColdDataEnabled: boolean;
        }[];
    };
}
