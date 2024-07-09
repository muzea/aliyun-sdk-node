export interface DescribeInstancesResponse {
    /**
     * OceanBase 集群信息列表。
     */
    Instances: {
        /**
         * vpcId
         * @example `vpc-8vb8qjrixzovjpy******`
         */
        VpcId: string;
        /**
         * OceanBase 集群的产品码。
         * - oceanbase_oceanbasepre_public_cn：中国站云数据库包年包月套餐。
         * - oceanbase_oceanbasepost_public_cn：中国站云数据库按小时付费套餐。
         * - oceanbase_obpre_public_intl：国际站云数据库包年包月套餐。
         * - oceanbase_obpost_public_intl：国际站云数据库按小时付费套餐。
         * @example `oceanbase_oceanbasepost_public_cn`
         */
        CommodityCode: string;
        /**
         * 集群过期时间（UTC 格式）。
         * > 该参数仅适用于包年包月付费方式的实例。
         * @example `2021-10-17T16:00:00Z`
         */
        ExpireTime: string;
        /**
         * 集群状态。
         * - ONLINE("online") : 运行中。
         * - PENDING_CREATE("pending_create"): 创建中。
         * - ARREARS_CLOSED("arrears_closed")：后付费逾期欠费关闭。
         * - PREPAID_EXPIRE_CLOSED("prepaid_expire_closed")：预付费到期关闭。
         * -  WHITE_LIST_MODIFYING("white_list_modifying")：白名单修改中。
         * - SSL_MODIFYING("ssl_modifying")：ssl 配置变更中。
         * - PARAMETER_MODIFYING("parameter_modifying")：参数修改中。
         * - TENANT_CREATING("tenant_creating")：租户创建中。
         * - TENANT_SPEC_MODIFYING("tenant_spec_modifying")：租户规格修改中。
         * - EXPANDING("expanding")：节点扩容中。
         * - REDUCING("reducing")：节点缩容中。
         * - ZONE_CHANGING("zone_changing")：可用区变更中。
         * - SPEC_UPGRADING("spec_upgrading")：套餐规格扩容中。
         * - SPEC_DOWNGRADING("spec_downgrading")：套餐规格缩容中。
         * - DISK_UPGRADING("disk_upgrading")：存储规格扩容中。
         * - UPGRADING("upgrading")：版本升级中。
         * - PENDING_DELETE("pending_delete")：集群删除中。
         * - DELETED("deleted")：集群已删除。
         * - ABNORMAL("abnormal")：异常。
         * - OFFLINE("offline")：下线。
         * - STANDBY_CREATING("standby_creating")：备集群创建中。
         * - STANDBY_DELETING("standby_deleting")：备集群删除中。
         * - SWITCHOVER_SWITCHING("switchover_switching")：主备切换中。
         * - STANDBY_DISCONNECTING("standby_disconnecting")：备库解耦中。
         * - LOG_DISK_UPGRADING("log_disk_upgrading")：日志盘扩容中。
         * - ISOLATION_OPTIMIZATION_MODIFYING("isolation_optimization_modifying")：隔离优化变更中。
         * - DISKTYPE_MODIFYING("disktype_modifying")：数据盘类型变更中。
         * - PROXY_SERVICE_CREATING("proxy_service_creating")：代理服务开通中。
         * - PROXY_SERVICE_DELETING("proxy_service_deleting")：代理服务关闭中。
         * - PROXY_SERVICE_SPEC_MODIFYING("proxy_service_spec_modifying")：代理服务规格修改中。
         * - READONLY_ADD_NODE("readonly_add_node")：新增只读节点中。
         * - READONLY_REDUCE_NODE("readonly_reduce_node")：删除只读节点中。
         * - READONLY_REDUCE_ZONE("readonly_reduce_zone")：删除只读副本可用区中。
         * - READONLY_ADD_ZONE("readonly_add_zone")：新增只读副本可用区。
         * - READONLY_UPGRADE_SPEC("readonly_upgrade_spec")：只读副本规格升配中。
         * - READONLY_UPGRADE_DISK("readonly_upgrade_disk")：只读副本存储扩容中。
         * - READONLY_DOWNGRADE_SPEC("readonly_downgrade_spec")：只读副本规格降配中。
         * - READONLY_DOWNGRADE_DISK("readonly_downgrade_disk")：只读副本磁盘缩容中。
         * - CREATING_TENANT_READONLY_REPLICA("creating_tenant_readonly_replica")：租户创建只读副本中。
         * - DELETING_TENANT_READONLY_REPLICA("deleting_tenant_readonly_replica")：租户删除只读副本中。
         * - DISK_DOWNGRADING("disk_downgrading")：磁盘缩容中。
         * - DEPLOY_MODE_MODIFYING("deploy_mode_modifying")：部署模式切换中。
         * > 集群一般为运行中的状态（ONLINE）。
         * @example `ONLINE`
         */
        State: string;
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
         * 集群的创建时间，UTC 时间。
         * @example `2021-10-19T07:13:41Z`
         */
        CreateTime: string;
        /**
         * 集群的数据副本模式。
         * 无论集群为单机房、双机房或多机房部署，返回值均为 n-n-n，其中 n 为各机房的 OBServer 节点数。
         * @example `1-1-1`
         */
        DeployMode: string;
        /**
         * 集群的 CPU 架构
         * @example `X86_64、 AARCH64`
         */
        CpuArchitecture: string;
        /**
         * 集群的每天例行维护时间，UTC 时间。
         * @example `19:00Z-20:00Z`
         */
        MaintainTime: string;
        /**
         * 集群的部署类型。
         * - multiple：多机房；
         * - single：单机房；
         * - dual：双机房。
         * @example `multiple`
         */
        DeployType: string;
        /**
         * OceanBase 集群的付费类型：
         * - PREPAY：预付费；
         * - POSTPAY：按量付费。
         * @example `PREPAY`
         */
        PayType: string;
        /**
         * 存储空间大小，单位 GB。
         * @example `200`
         */
        DiskSize: string;
        /**
         * 集群部署的存储类型。
         * @example `cloud_essd_pl1`
         */
        DiskType: string;
        /**
         * OceanBase 集群 ID。
         * @example `ob317v4uif****`
         */
        InstanceId: string;
        /**
         * 集群已过期时间，单位：秒(s)。
         * > 包年包月付费模式下，若集群还未到期，该参数表示集群剩余有效使用时间。集群过期后，该参数表示集群已过期时间。
         * @example `2606682`
         */
        ExpireSeconds: number;
        /**
         * 实例的内存大小，单位 GB。
         * @example `70`
         */
        Mem: number;
        /**
         * 是否允许新增节点。
         * @example `true`
         */
        EnableUpgradeNodes: boolean;
        /**
         * 集群的 CPU 核数。
         * @example `14`
         */
        Cpu: number;
        /**
         * 集群部署所在的可用区信息。
         */
        AvailableZones: string[];
        /**
         * OBServer 版本信息。
         * @example `2.2.77`
         */
        Version: string;
        /**
         * OceanBase 集群名称。
         * 长度为 1~20 个英文或中文字符。如果没有指定该参数，默认值为集群的 InstanceId。
         * @example `ob4test`
         */
        InstanceName: string;
        /**
         * Oceanbase 实例的系列。
         * - normal（默认）：标准集群版（云盘）。
         * - normal_ssd：标准集群版（本地盘）。
         * - history：历史库集群版。
         * - normal_kv：obkv 集群。
         * - normal_hg：信创集群。
         * @example `NORMAL`
         */
        Series: string;
        /**
         * 已使用的存储空间，单位 GB。
         * @example `20`
         */
        UsedDiskSize: number;
        /**
         * 资源组 ID 信息。
         * @example `group1`
         */
        ResourceGroupId: string;
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
                 * 集群中每个副本的内存，单位：GB。
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
                 * 集群每个副本的存储空间，单位：GB。
                 * @example `200`
                 */
                UnitDiskSize: number;
                /**
                 * 原始磁盘。
                 * @example `200`
                 */
                OriginalTotalDiskSize: number;
            };
            /**
             * 集群的资源 Unit 数量。
             * @example `1`
             */
            UnitCount: number;
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
                UsedCapacityUnit: number;
            };
        };
        /**
         * 实例类型。
         * - cluster：集群实例。
         * - mtenant：MySQL 模式的租户实例。
         * - mtenant_serverless：MySQL 模式的 Serverless 实例。
         * @example `CLUSTER`
         */
        InstanceType: string;
        /**
         * 实例角色。
         * @example `NORMAL`
         */
        InstanceRole: string;
        /**
         * 临时容量状态。
         * @example `false`
         */
        InTempCapacityStatus: boolean;
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
             * @example `RAW`
             */
            UpperScaleStrategy: string;
        };
        /**
         * 该集群是否允许购买只读副本。
         * @example `yes`
         */
        EnableReadOnlyReplicaManagement: boolean;
        /**
         * 规格类型
         */
        SpecType: string;
    }[];
    /**
     * 所查询的 OceanBase 集群个数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
}
