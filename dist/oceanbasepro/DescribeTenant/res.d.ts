export interface DescribeTenantResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 租户信息。
     */
    Tenant: {
        /**
         * 租户 ID。
         * @example `t4louaeei****`
         */
        TenantId: string;
        /**
         * 租户名称。
         * @example `forMySQLTenant`
         */
        TenantName: string;
        /**
         * 租户模式。
         * 当前支持：
         * - Oracle：Oracle 模式。
         * - MySQL: MySQL 模式。
         * @example `MySQL`
         */
        TenantMode: string;
        /**
         * 专有网络（VPC） ID。
         * 如无合适的 VPC，请根据页面提示创建一个 VPC，详情参见什么是专有网络。
         * @example `vpc-bp1d2q3mhg9i23ofi****`
         */
        VpcId: string;
        /**
         * 租户状态：
         * - ONLINE：运行中。
         * - PENDING_CREATE：创建中。
         * - WAITING_ALLOCATE_MASTER_ADDRESS：（备库）等待创建主地址。
         * - ALLOCATING_MASTER_ADDRESS：主地址创建中。
         * - DELETING_MASTER_ADDRESS：主地址删除中。
         * - ALLOCATING_INTERNET_ADDRESS：公网地址创建中。
         * - PENDING_OFFLINE_INTERNET_ADDRESS：公网地址删除中。
         * - ALLOCATING_READONLY_ADDRESS：只读地址创建中。
         * - DELETING_READONLY_ADDRESS：只读地址删除中。
         * - ALLOCATING_READWRITE_ADDRESS：读写分离地址创建中。
         * - DELETING_READWRITE_ADDRESS：读写分离地址删除中。
         * - ALLOCATING_CLOGSERVICE_ADDRESS：事务日志地址创建中。
         * - DELETING_CLOGSERVICE_ADDRESS：事务日志地址删除中。
         * - MODIFYING_ADDRESS：地址域名修改中。
         * - MODIFYING_PRIMARY_ZONE：主可用区切换中。
         * - MODIFYING_READONLY_ADDRESS：只读地址修改中。
         * - MODIFYING_READWRITE_ADDRESS：读写分离地址修改中。
         * - SPEC_MODIFYING：规格修改中。
         * - WHITE_LIST_MODIFYING：白名单修改中。
         * - CREATING_BINLOG：Binlog 创建中。
         * @example `ONLINE`
         */
        Status: string;
        /**
         * 是否可开启租户公网地址。
         * @example `true`
         */
        EnableInternetAddressService: boolean;
        /**
         * 租户的主可用区。
         * @example `cn-hangzhou-h`
         */
        PrimaryZone: string;
        /**
         * 集群的部署类型。
         * - multiple：多机房。
         * - single：单机房。
         * - dual：双机房。
         * @example `multiple`
         */
        DeployType: string;
        /**
         * 租户的数据副本模式。
         * - 对于高可用版本：三地域为 N-N-N，两可用区和单可用区均为 N-N；
         * - 对于基础版为 N。
         * > <br>其中 N 为单可用区内的节点数。
         * @example `FULL{1}@cn-hangzhou-h,FULL{1}@cn-hangzhou-i,FULL{1}@cn-hangzhou-j`
         */
        DeployMode: string;
        /**
         * 租户描述信息。
         * @example `paycore database`
         */
        Description: string;
        /**
         * 租户的创建时间。
         * @example `2023-04-21 11:15:47.0`
         */
        CreateTime: string;
        /**
         * 租户的资源信息。
         */
        TenantResource: {
            /**
             * 租户的 unit 个数。
             * @example `1`
             */
            UnitNum: number;
            /**
             * 租户的 CPU 资源信息。
             */
            Cpu: {
                /**
                 * 租户已使用的 CPU 核数，单位：Core。
                 * @example `8`
                 */
                UsedCpu: number;
                /**
                 * 租户总的 CPU 核数，单位：Core。
                 * @example `10`
                 */
                TotalCpu: number;
                /**
                 * 租户每个 Unit 的 CPU 核数，单位：Core。
                 * @example `8`
                 */
                UnitCpu: number;
            };
            /**
             * 租户内存资源信息。
             */
            Memory: {
                /**
                 * 租户已使用的内存，单位：GB。
                 * @example `30`
                 */
                UsedMemory: number;
                /**
                 * 租户总的内存大小，单位：GB。
                 * @example `64`
                 */
                TotalMemory: number;
                /**
                 * 租户每个 Unit 的内存大小，单位：GB。
                 * @example `32`
                 */
                UnitMemory: number;
            };
            /**
             * 租户磁盘资源信息。
             */
            DiskSize: {
                /**
                 * 租户已使用的磁盘大小，单位：GB。
                 * @example `86`
                 */
                UsedDiskSize: number;
            };
            /**
             * 容量单元。
             */
            CapacityUnit: {
                /**
                 * 最大容量单元。
                 * @example `16`
                 */
                MaxCapacityUnit: number;
                /**
                 * 最小容量单元。
                 * @example `1`
                 */
                MinCapacityUnit: number;
                /**
                 * 已使用容量单元。
                 * @example `5`
                 */
                UsedCapacit: number;
            };
            /**
             * 租户日志盘资源信息。
             */
            LogDiskSize: {
                /**
                 * 租户总的日志盘分配大小，单位：GB。
                 * @example `8.0`
                 */
                TotalLogDisk: number;
                /**
                 * 租户每个 Unit 的日志盘分配大小，单位：GB。
                 * @example `8.0`
                 */
                UnitLogDisk: number;
            };
        };
        /**
         * 租户的连接信息。
         */
        TenantConnections: {
            /**
             * 访问租户的私网连接地址。
             * @example `t4nunwxr0****.oceanbase.aliyuncs.com`
             */
            IntranetAddress: string;
            /**
             * 访问租户的私网连接端口。
             * @example `2983`
             */
            IntranetPort: number;
            /**
             * 访问租户的公网连接地址。
             * @example `t4nunwxr0****-mi.oceanbase.aliyuncs.com`
             */
            InternetAddress: string;
            /**
             * 访问租户的公网连接端口。
             * @example `3306`
             */
            InternetPort: number;
            /**
             * 专有网络（VPC）ID。
             * @example `vpc-bp1qiail1asmfe23t****`
             */
            VpcId: string;
            /**
             * 虚拟交换机（VSwitch）ID。
             * @example `vsw-bp1i7b94u2et716yl****`
             */
            VSwitchId: string;
            /**
             * 访问租户的连接地址对应的主可用区。
             * @example `cn-hangzhou-b`
             */
            IntranetAddressMasterZoneId: string;
            /**
             * 访问租户的连接地址对应的备可用区。
             * @example `cn-hangzhou-g`
             */
            IntranetAddressSlaveZoneId: string;
            /**
             * 访问租户的私网连接地址状态。
             * ONLINE: 服务中。
             * @example `ONLINE`
             */
            IntranetAddressStatus: string;
            /**
             * 租户连接对应的访问可用区列表。
             * @example `["cn-hangzhou-i", "cn-hangzhou-j"]`
             */
            ConnectionZones: string[];
            /**
             * 访问租户的公网连接开通状态。
             * - CLOSED：关闭。
             * - ALLOCATING_INTERNET_ADDRESS：申请中。
             * - PENDING_OFFLINE_INTERNET_ADDRESS: 公网地址关闭中。
             * - ONLINE：服务中。
             * @example `CLOSED`
             */
            InternetAddressStatus: string;
            /**
             * 是否开启事务拆分。
             * @example `false`
             */
            TransactionSplit: boolean;
            /**
             * 地址类型。
             * - MASTER：主地址，可读可写。
             * - READONLY：只读地址，只读。
             * - READWRITE：读写分离地址，自动读写分离。
             * - CLOGSERVICE：事务日志服务地址。
             * @example `READONLY`
             */
            AddressType: string;
            /**
             * 是否开启事务拆分。
             * @example `false`
             */
            EnableTransactionSplit: boolean;
            /**
             * 并行度。
             * @example `1`
             */
            ParallelQueryDegree: number;
            /**
             * 租户地址 ID。
             * @example `obe-4tw51gp7****`
             */
            TenantEndpointId: string;
            /**
             * 最大连接数
             * @example `5000`
             */
            MaxConnectionNum: number;
            /**
             * 链接对应的副本类型
             */
            ConnectionReplicaType: string;
            ProxyClusterId: string;
            /**
             * 私网最大连接数的当前值
             */
            MaxConnectionLimit: number;
            /**
             * 公网最大连接数的上限
             */
            InternetMaxConnectionLimit: number;
            IntranetRpcPort: number;
            /**
             * 公网最大连接数的当前值
             */
            InternetMaxConnectionNum: number;
            InternetRpcPort: number;
            ConnectionLogicalZones: string[];
        }[];
        /**
         * 租户的可用区信息。
         */
        TenantZones: {
            /**
             * 租户可用区 ID。
             * @example `cn-hangzhou-h`
             */
            TenantZoneId: string;
            /**
             * 租户可用区所属的地域。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 租户可用区的角色。
             * @example `ReadWrite`
             */
            TenantZoneRole: string;
            TenantZoneReplicas: {
                ZoneReplicaType: string;
                ZoneNodes: string;
                LogicZoneName: string;
                ZoneCopyId: number;
                FullCopyId: number;
                ReadOnlyCopyId: string;
            }[];
        }[];
        /**
         * Clog 服务开启状态。
         * - CLOSED: 关闭。
         * - ONLINE：服务中。
         * @example `ONLINE`
         */
        ClogServiceStatus: string;
        /**
         * 是否可使用 Clog 服务，如需开启，请工单联系。
         * @example `true`
         */
        EnableClogService: boolean;
        /**
         * 字符集。
         * @example `gb18030`
         */
        Charset: string;
        /**
         * 字符序。
         * @example `gb18030_chinese_ci`
         */
        Collation: string;
        /**
         * 租户主可用区部署模式。
         * @example `STATIC`
         */
        PrimaryZoneDeployType: string;
        /**
         * Master 节点所在可用区。
         * @example `cn-hangzhou-h`
         */
        MasterIntranetAddressZone: string;
        /**
         * 付费类型。
         * @example `POSTPAY`
         */
        PayType: string;
        /**
         * 实例类型。
         * @example `KAFKA_PUBLIC`
         */
        InstanceType: string;
        /**
         * 实例系列。
         * @example `normal`
         */
        Series: string;
        /**
         * 磁盘类型。
         * @example `cloud_essd_pl1`
         */
        DiskType: string;
        /**
         * 可用区列表信息。
         */
        AvailableZones: string[];
        /**
         * 是否允许开启读写分离地址。
         * @example `true`
         */
        EnableReadWriteSplit: boolean;
        /**
         * 是否允许开通并行查询。
         * @example `true`
         */
        EnableParallelQuery: boolean;
        /**
         * 并行度设置上限。
         * @example `32`
         */
        MaxParallelQueryDegree: number;
        /**
         * 是否可以申请 Binlog 服务。
         * @example `true`
         */
        EnableBinlogService: boolean;
        /**
         * 时区。
         * @example `Asia/Shanghai`
         */
        TimeZone: string;
        /**
         * 租户合并时间，仅对4.0以上OB版本有效
         */
        DataMergeTime: string;
        ReadOnlyResource: {
            /**
             * 租户的unit个数。
             */
            UnitNum: number;
            Cpu: {
                UsedCpu: number;
                /**
                 * 租户总的CPU核数，单位：Core。
                 * @example `10`
                 */
                TotalCpu: number;
                /**
                 * 租户每个Unit的CPU核数，单位：Core。
                 * @example `8`
                 */
                UnitCpu: number;
            };
            Memory: {
                /**
                 * 租户已使用的内存，单位：GB。
                 * @example `30`
                 */
                UsedMemory: number;
                /**
                 * 租户总的内存大小，单位：GB。
                 * @example `64`
                 */
                TotalMemory: number;
                /**
                 * 租户每个Unit的内存大小，单位：GB。
                 * @example `32`
                 */
                UnitMemory: number;
            };
            DiskSize: {
                /**
                 * 租户已使用的磁盘大小，单位：GB。
                 * @example `86`
                 */
                UsedDiskSize: number;
            };
            CapacityUnit: {
                /**
                 * 最大容量单元
                 */
                MaxCapacityUnit: number;
                /**
                 * 最小容量单元
                 */
                MinCapacityUnit: number;
                /**
                 * 已使用容量单元
                 */
                UsedCapacit: number;
            };
            LogDiskSize: {
                TotalLogDisk: number;
                UnitLogDisk: number;
            };
        };
        EnableReadOnlyReplica: boolean;
        /**
         * 表示租户回收站状态，ON表示开启，OFF表示关闭
         */
        RecycleBinStatus: string;
        LowerCaseTableNames: string;
        /**
         * 版本信息
         */
        Version: string;
    };
}
