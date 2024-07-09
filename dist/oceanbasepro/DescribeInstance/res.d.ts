export interface DescribeInstanceResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * OceanBase 集群信息。
     */
    Instance: {
        /**
         * OceanBase 集群 ID。
         * @example `ob317v4uif****`
         */
        InstanceId: string;
        /**
         * OceanBase 集群名称。
         * @example `ob4test`
         */
        InstanceName: string;
        /**
         * 集群规格信息。<br> 当前支持以下套餐：
         * - 4C16GB：4 核 16GB。
         * - 8C32GB：8 核 32GB。
         * - 14C70GB：14 核 70GB。
         * - 24C120GB：24 核 120GB。
         * - 30C180GB：30 核 180GB。
         * - 62C400GB：62 核 400GB。
         * - 104C600GB：104 核 600GB。
         * - 16C70GB：16 核 70GB。
         * - 32C160GB：32 核 160GB。
         * - 64C380GB：64 核 380GB。
         * - 20C32GB：20 核 32GB。
         * - 40C64GB：40 核 64GB。
         * - 16C32GB：16 核 32GB。
         * - 32C70GB：32 核 70GB。
         * - 64C180GB：64 核 180GB。
         * - 32C180GB：32 核 180GB。
         * - 64C400GB：64 核 400GB。
         * @example `14C70G`
         */
        InstanceClass: string;
        /**
         * 实例的系列。
         * - normal（默认）：标准集群版（云盘）。
         * - normal_ssd：标准集群版（本地盘）。
         * - history：历史库集群版。
         * - normal_kv: obkv 集群。
         * - normal_hg：信创集群。
         * @example `Normal`
         */
        Series: string;
        /**
         * OceanBase 集群的付费类型。
         * - PREPAY：预付费。
         * - POSTPAY：按量付费。
         * @example `PREPAY`
         */
        PayType: string;
        /**
         * 集群的创建时间（UTC 时间）。
         * @example `2021-10-19T07:13:41Z`
         */
        CreateTime: string;
        /**
         * 集群过期时间（UTC 格式）。
         * @example `2021-10-17T16:00:00Z`
         */
        ExpireTime: string;
        /**
         * OBServer 版本信息。
         * @example `2.2.77`
         */
        Version: string;
        /**
         * 集群的部署类型。
         * - multiple：多机房。
         * - single：单机房。
         * - dual：双机房。
         * @example `multiple`
         */
        DeployType: string;
        /**
         * 集群的数据副本模式。
         * - 单机房为 n。
         * - 双机房为 n-n。
         * - 多机房为 n-n-n。
         * > <br>其中，n 为各机房的 OBServer 节点数。
         * @example `1-1-1`
         */
        DeployMode: string;
        /**
         * 集群部署的存储类型。
         * 默认为 cloud_essd_pl1：ESSD 云盘。
         * @example `cloud_essd_pl1`
         */
        DiskType: string;
        /**
         * 集群的每天例行维护时间，UTC 时间。
         * @example `19:00Z-20:00Z`
         */
        MaintainTime: string;
        /**
         * 集群的数据合并时间。
         * @example `02:00`
         */
        DataMergeTime: string;
        /**
         * 是否开启自动续费。
         * 该参数只在预付费（PREPAY）集群有意义。
         * @example `true`
         */
        AutoRenewal: boolean;
        /**
         * 是否使用可信 ecs。
         * @example `true`
         */
        IsTrustEcs: boolean;
        /**
         * 集群状态。
         * - PENDING_CREATE: 创建中。
         * - ONLINE: 运行中。
         * - TENANT_CREATING：租户创建中 。
         * - TENANT_SPEC_MODIFYING：租户规格修改中。
         * - EXPANDING: 节点扩容中。
         * - REDUCING: 节点缩容中。
         * - SPEC_UPGRADING:套餐规格扩容中。
         * - DISK_UPGRADING:存储规格扩容中。
         * - WHITE_LIST_MODIFYING: 修改白名单中。
         * - PARAMETER_MODIFYING: 修改参数中。
         * - SSL_MODIFYING: SSL 变更中。
         * - PREPAID_EXPIRE_CLOSED: 预付费集群欠费中。
         * - ARREARS_CLOSED: 后付费集群欠费中。
         * - PENDING_DELETE: 删除中。
         * 集群一般为运行中的状态（ONLINE）。
         * @example `ONLINE`
         */
        Status: string;
        /**
         * 集群的资源信息。
         */
        Resource: {
            /**
             * 集群的 CPU 资源信息。
             */
            Cpu: {
                /**
                 * 集群总 CPU，单位：核数。
                 * @example `14`
                 */
                TotalCpu: number;
                /**
                 * 集群已使用的 CPU，单位：核数。
                 * @example `10`
                 */
                UsedCpu: number;
                /**
                 * 集群中每个副本节点的 CPU，单位：核数。
                 * @example `10`
                 */
                UnitCpu: number;
                /**
                 * 原始 CPU。
                 * @example `14`
                 */
                OriginalTotalCpu: number;
            };
            /**
             * 集群的内存资源信息。
             */
            Memory: {
                /**
                 * 集群总内存，单位：GB。
                 * @example `70`
                 */
                TotalMemory: number;
                /**
                 * 集群已使用的内存，单位：GB。
                 * @example `10`
                 */
                UsedMemory: number;
                /**
                 * 集群中每个副本的内存，单位：GB
                 * @example `10`
                 */
                UnitMemory: number;
                /**
                 * 原始内存。
                 * @example `72`
                 */
                OriginalTotalMemory: number;
            };
            /**
             * 集群的存储资源信息。
             */
            DiskSize: {
                /**
                 * 集群总存储空间，单位：GB。
                 * @example `200`
                 */
                TotalDiskSize: number;
                /**
                 * 集群已使用的存储空间，单位：GB。
                 * @example `100`
                 */
                UsedDiskSize: number;
                /**
                 * 集群每个副本的存储空间，单位：GB
                 * @example `200`
                 */
                UnitDiskSize: number;
                /**
                 * 数据盘大小规格，单位 GB。
                 * @example `200`
                 */
                DataUsedSize: number;
                /**
                 * 磁盘使用率最大值（百分比）。
                 * @example `0.14`
                 */
                MaxDiskUsedPercent: number;
                /**
                 * 磁盘服务器使用率最大值。
                 */
                MaxDiskUsedObServer: string[];
                /**
                 * 原始磁盘。
                 * @example `200`
                 */
                OriginalTotalDiskSize: number;
                /**
                 * 最大可创建磁盘大小。
                 * @example `80000`
                 */
                MaxDiskSize: number;
            };
            /**
             * 集群的资源 Unit 数量。
             * @example `1`
             */
            UnitCount: number;
            /**
             * 集群的日志盘资源信息。
             */
            LogDiskSize: {
                /**
                 * 集群总日志盘空间，单位 GB。
                 * @example `400`
                 */
                TotalDiskSize: number;
                /**
                 * 集群每个副本的日志存储空间，单位：GB。
                 * @example `200`
                 */
                UnitDiskSize: number;
                /**
                 * 分配的日志存储空间，单位：GB。
                 * @example `0.0`
                 */
                LogAssignedSize: string;
                /**
                 * 分配的服务器最大存储空间信息。
                 */
                MaxLogAssignedObServer: string[];
                /**
                 * 分配的最大日志存储空间百分比。
                 * @example `6.68`
                 */
                MaxLogAssignedPercent: string;
                /**
                 * 日志盘原始大小。
                 * @example `200`
                 */
                OriginalTotalDiskSize: number;
            };
            /**
             * 容量单元。
             */
            CapacityUnit: {
                /**
                 * 最大容量单元。
                 * @example `4`
                 */
                MaxCapacityUnit: number;
                /**
                 * 最小容量单元。
                 * @example `1`
                 */
                MinCapacityUnit: number;
                /**
                 * 已用容量单位。
                 * @example `2`
                 */
                UsedCapacityUnit: string;
            };
        };
        /**
         * 是否开启自动升级 OBServer 版本。
         * @example `true`
         */
        AutoUpgradeObVersion: boolean;
        /**
         * OBServer 详细版本信息。
         * @example `2.2.77-20210526202046`
         */
        ObRpmVersion: string;
        /**
         * OBServer 版本是否为最新版本。
         * @example `true`
         */
        IsLatestObVersion: boolean;
        /**
         * 可用区列表。
         */
        AvailableZones: string[];
        /**
         * 是否允许升级日志盘规格。
         * @example `false`
         */
        EnableUpgradeLogDisk: boolean;
        /**
         * 实例所属的可用区 ID。
         * 更多详情，请参见 [DescribeZones](~~25610~~) 获取可用区列表。
         */
        Zones: string[];
        /**
         * 实例角色。
         * @example `NORMAL`
         */
        InstanceRole: string;
        /**
         * 集群节点个数信息。
         * 如果部署模式为 n-n-n，则节点个数为 n * 3。
         * @example `6`
         */
        NodeNum: string;
        /**
         * 全功能型副本数。
         * 返回值仅包含 3 和 2。
         * - 3：表示 3 个全功能型副本。
         * - 2：表示 2 个全功能型副本。
         * 三可用区部署时，只支持 3 个全功能型副本，双可用区部署时，仅支持 2 个全功能型副本，单可用区部署时，可以支持 2 个或者 3 个全功能型副本。
         * @example `2`
         */
        ReplicaMode: string;
        /**
         * 是否开启 Cgroup。
         * @example `false`
         */
        IsolationOptimization: boolean;
        /**
         * 是否允许开通隔离优化。
         * @example `false`
         */
        EnableIsolationOptimization: boolean;
        /**
         * 临时容量状态。
         * @example `false`
         */
        InTempCapacityStatus: boolean;
        /**
         * 是否开启数据自动协调。
         * > <br>此参数已废弃。
         * @example `-`
         */
        DataDiskAutoScale: boolean;
        /**
         * 可创建的租户。
         */
        TenantCreatable: {
            /**
             * 集群是否允许创建租户。
             * @example `true`
             */
            EnableCreateTenant: boolean;
            /**
             * 集群不允许创建租户的原因。
             * @example `CPU_NOT_ENOUGH、 MEMORY_NOT_ENOUGH、TENANT_COUNT_EXCEEDS_LIMIT`
             */
            DisableCreateTenantReason: string;
        };
        /**
         * 数据盘自动协调配置。
         */
        DataDiskAutoScaleConfig: {
            /**
             * 是否开启。
             * @example `true`
             */
            AutoScale: boolean;
            /**
             * 扩容上限。
             * @example `16`
             */
            Upperbound: number;
            /**
             * 日常扩容阈值。
             * @example `80`
             */
            UpperThreshold: number;
            /**
             * 合并扩容阈值。
             * @example `90`
             */
            UpperMergeThreshold: number;
            /**
             * 磁盘最大值。
             * @example `80000`
             */
            MaxDiskSize: number;
            /**
             * 日常扩容步长。
             * @example `50`
             */
            ScaleStepInNormal: number;
            /**
             * 合并扩容步长。
             * @example `100`
             */
            ScaleStepInMerge: number;
            /**
             * 扩容策略（RAW/PERCENTAGE）
             */
            UpperScaleStrategy: string;
            /**
             * 扩容步长
             */
            UpperScaleStep: string;
        };
        /**
         * 是否 Enable 代理服务。
         * - true
         * - false
         * @example `true`
         */
        EnableProxyService: boolean;
        /**
         * 代理服务状态。
         * @example `ONLINE`
         */
        ProxyServiceStatus: string;
        /**
         * Proxy 集群 ID。
         * > 仅 EnableProxyService 为 true 时，才会包含该参数。
         * @example `proxy-56****a6tg2o`
         */
        ProxyClusterId: string;
        /**
         * 集群的 CPU 架构。
         * @example `X86`
         */
        CpuArchitecture: string;
        /**
         * 集群的资源信息
         */
        ReadOnlyResource: {
            /**
             * 集群的CPU资源信息
             */
            Cpu: {
                /**
                 * 集群总CPU，单位：核数
                 * @example `14`
                 */
                TotalCpu: number;
                /**
                 * 集群已使用的CPU，单位：核数
                 * @example `10`
                 */
                UsedCpu: number;
                /**
                 * 集群中每个副本节点的CPU，单位：核数
                 * @example `10`
                 */
                UnitCpu: number;
                /**
                 * 原始CPU
                 * @example `14`
                 */
                OriginalTotalCpu: number;
            };
            /**
             * 集群的内存资源信息
             */
            Memory: {
                /**
                 * 集群总内存，单位：GB
                 * @example `70`
                 */
                TotalMemory: number;
                /**
                 * 集群已使用的内存，单位：GB
                 * @example `10`
                 */
                UsedMemory: number;
                /**
                 * 集群中每个副本的内存，单位：GB
                 * @example `10`
                 */
                UnitMemory: number;
                /**
                 * 原始内存
                 * @example `72`
                 */
                OriginalTotalMemory: number;
            };
            /**
             * 集群的存储资源信息
             */
            DiskSize: {
                /**
                 * 集群总存储空间，单位：GB
                 * @example `200`
                 */
                TotalDiskSize: number;
                /**
                 * 集群已使用的存储空间，单位：GB
                 * @example `100`
                 */
                UsedDiskSize: number;
                /**
                 * 集群每个副本的存储空间，单位：GB
                 * @example `200`
                 */
                UnitDiskSize: number;
                /**
                 * 已使用的存储空间，单位：GB。
                 * @example `200`
                 */
                DataUsedSize: number;
                /**
                 * 磁盘使用率最大值（百分比）。
                 * @example `0.14`
                 */
                MaxDiskUsedPercent: number;
                /**
                 * 磁盘服务器使用率最大值。
                 */
                MaxDiskUsedObServer: string[];
                /**
                 * 原始磁盘。
                 * @example `200`
                 */
                OriginalTotalDiskSize: number;
                /**
                 * 最大可创建磁盘大小。
                 * @example `80000`
                 */
                MaxDiskSize: number;
            };
            /**
             * 集群的资源 Unit 数量。
             * @example `1`
             */
            UnitCount: number;
            /**
             * 集群的日志盘资源信息。
             */
            LogDiskSize: {
                /**
                 * 集群总日志盘空间，单位：GB。
                 * @example `400`
                 */
                TotalDiskSize: number;
                /**
                 * 集群每个副本的日志存储空间，单位：GB
                 * @example `200`
                 */
                UnitDiskSize: number;
                /**
                 * 已分配的日志存储空间.。
                 * @example `0.0`
                 */
                LogAssignedSize: string;
                /**
                 * 已分配的最大 OBServer。
                 */
                MaxLogAssignedObServer: string[];
                /**
                 * 已分配的最大日志百分比。
                 * @example `6.68`
                 */
                MaxLogAssignedPercent: string;
            };
            /**
             * 容量单元。
             */
            CapacityUnit: {
                /**
                 * 最大容量单元。
                 * @example `4`
                 */
                MaxCapacityUnit: number;
                /**
                 * 最小容量单元。
                 * @example `1`
                 */
                MinCapacityUnit: number;
                /**
                 * 已用容量单位。
                 * @example `2`
                 */
                UsedCapacityUnit: string;
            };
        };
        /**
         * 代理服务的单元规格
         */
        UnitSpec: string;
        /**
         * 共享模式代理服务的单元数量上限
         */
        SharedUnitNumLimit: number;
        /**
         * 独占模式代理服务的单元数量上限
         */
        ExclusiveUnitNumLimit: number;
        EnableReadOnlyReplica: boolean;
        EnableReadOnlyReplicaManagement: boolean;
        /**
         * 主实例Id
         * @example `ob3h8ytroxxxxx`
         */
        PrimaryInstance: string;
        /**
         * 主实例Region
         * @example `cn-hangzhou`
         */
        PrimaryRegion: string;
        /**
         * 规格类型
         */
        SpecType: string;
        /**
         * 是否允许修改公网最大连接数
         */
        AllowModifyInternetAddressConnectionLimit: boolean;
    };
}
