export interface DescribeDBClusterAttributeResponse {
    /**
     * 集群删除的锁定状态，取值范围如下：
     * * **0**：未锁定，可删除集群。
     * * **1**：锁定，不可删除集群。
     * @example `0`
     */
    DeletionLock: number;
    /**
     * [产品系列](~~183258~~)，取值范围如下：
     * * **Normal**：集群版
     * * **Basic**：单节点
     * * **Archive**：高压缩引擎（X-Engine）
     * * **NormalMultimaster**：多主架构集群版
     * * **SENormal**：标准版
     * > * PolarDB PostgreSQL版PostgreSQL 11版本不支持单节点。
     * >* PolarDB MySQL版8.0版本、5.7版本，PolarDB PostgreSQL版PostgreSQL 14版本支持标准版。
     * >* PolarDB MySQL版8.0版本，支持高压缩引擎（X-Engine）和多主架构集群版。
     * @example `Normal`
     */
    Category: string;
    /**
     * 资源组ID。
     * @example `rg-***************`
     */
    ResourceGroupId: string;
    /**
     * 一级备份（快照）总大小，单位为Byte。
     * @example `74448896`
     */
    DataLevel1BackupChainSize: number;
    /**
     * 集群ID。
     * @example `pc-*****************`
     */
    DBClusterId: string;
    /**
     * 数据库引擎类型。
     * @example `MySQL`
     */
    DBType: string;
    /**
     * 集群的网络类型。
     * @example `VPC`
     */
    DBClusterNetworkType: string;
    /**
     * 是否为最新内核版本。取值范围如下：
     * - **true**：是
     * - **false**：否
     * @example `false`
     */
    IsLatestVersion: boolean;
    /**
     * 是否在跨可用区切换后补齐新主库资源。取值范围如下：
     * - **true**：是
     * - **false**：否
     * @example `false`
     */
    HasCompleteStandbyRes: boolean;
    /**
     * 是否开启存储热备集群(和Standby计算节点)。取值范围如下：
     * - **StandbyClusterON**：开启存储热备/开启存储热备和Standby计算节点。
     * - **StandbyClusterOFF**：关闭存储热备/关闭存储热备和Standby计算节点。
     * @example `StandbyClusterON`
     */
    HotStandbyCluster: string;
    /**
     * 数据复制关系模式。取值范围如下：
     * - **AsyncSync**：异步
     * - **SemiSync**：半同步
     * @example `AsyncSync`
     */
    DataSyncMode: string;
    /**
     * 跨可用容灾模式。取值范围如下：
     * - **ON**：开启跨可用容灾模式。
     * - **OFF**：关闭跨可用容灾模式。
     * - **0**：客户演练模式。
     * @example `OFF`
     */
    StandbyHAMode: string;
    /**
     * 是否为开启存储压缩。取值范围如下：
     * - ON：开启
     * - OFF：关闭
     * @example `ON`
     */
    CompressStorageMode: string;
    /**
     * 当前集群规格的最大存储容量，单位为Byte。
     * @example `10995116277760`
     */
    StorageMax: number;
    /**
     * 数据库引擎版本。
     * @example `8.0`
     */
    DBVersion: string;
    /**
     * 节点信息详情。
     */
    DBNodes: {
        /**
         * 节点创建时间。
         * @example `2020-03-23T21:35:43Z`
         */
        CreationTime: string;
        /**
         * Failover优先级。每个节点都有一个Failover优先级，决定了当故障切换时，该节点被选举为主节点的概率高低。数值越大，优先级越高。
         * 取值范围为1~15。
         * @example `1`
         */
        FailoverPriority: number;
        /**
         * 最大I/O请求次数，即IOPS。
         * @example `32000`
         */
        MaxIOPS: number;
        /**
         * 节点规格。
         * @example `polar.mysql.x4.large`
         */
        DBNodeClass: string;
        /**
         * 节点CPU核数。
         * @example `2`
         */
        CpuCores: string;
        /**
         * 节点内存大小，单位：MB。
         * @example `8192`
         */
        MemorySize: string;
        /**
         * 节点角色，取值范围如下：
         * - **Writer**：主节点。
         * - **Reader**：只读节点。
         * @example `Reader`
         */
        DBNodeRole: string;
        /**
         * 可用区ID。
         * @example `cn-hangzhou-i`
         */
        ZoneId: string;
        /**
         * 最大集群并发连接数。
         * @example `8000`
         */
        MaxConnections: number;
        /**
         * 节点状态，取值范围如下：
         * * **Creating**：创建中
         * * **Running**：运行中
         * * **Deleting**：删除中
         * * **Rebooting**：重启中
         * * **DBNodeCreating**：正在增加节点
         * * **DBNodeDeleting**：正在删除节点
         * * **ClassChanging**：正在变更节点规格
         * * **NetAddressCreating**：正在创建网络连接
         * * **NetAddressDeleting**：正在删除网络连接
         * * **NetAddressModifying**：正在修改网络连接
         * * **MinorVersionUpgrading**：小版本升级中
         * * **Maintaining**：实例维护中
         * * **Switching**：切换中
         * @example `Running`
         */
        DBNodeStatus: string;
        /**
         * 节点ID。
         * @example `pi-****************`
         */
        DBNodeId: string;
        /**
         * 是否开启列存索引。取值范围如下：
         * - **ON**：开启
         * - **OFF**：关闭
         * @example `ON`
         */
        ImciSwitch: string;
        /**
         * 是否开启热备。取值范围如下：
         * - **ON**：开启
         * - **OFF**：关闭
         * @example `ON`
         */
        HotReplicaMode: string;
        /**
         * 秒级弹性扩核的CPU核数。
         * @example `6`
         */
        AddedCpuCores: string;
        /**
         * 多主架构集群版的主节点ID。
         * @example `pi-bp18z52akld3*****`
         */
        MasterId: string;
        /**
         * 节点是否开启全局一致性（高性能模式）功能。取值范围如下：
         * - **ON**：开启
         * - **OFF**：关闭
         * @example `ON`
         */
        SccMode: string;
        /**
         * 路由权重。
         * 取值范围：1~100。默认值为1。
         * @example `1`
         */
        ServerWeight: string;
        /**
         * Serverless类型。取值范围如下：
         * - AgileServerless：敏态
         * - SteadyServerless：稳态
         * > 仅Serverless集群支持该参数。
         * @example `AgileServerless`
         */
        ServerlessType: string;
        /**
         * 查看节点是在主可用区还是备可用区，主要是资源对等形态在用。
         * 取值范围如下：
         * - Primary：主可用区
         * - Standby：备可用区
         * @example `Primary`
         */
        SubCluster: string;
        /**
         * 远端内存大小，单位：MB。
         * @example `3072`
         */
        RemoteMemorySize: string;
        /**
         * Orca功能，取值范围如下：
         * - on：开启
         * - off: 关闭
         * @example `off`
         */
        Orca: string;
    }[];
    /**
     * 可用区ID。
     * @example `cn-hangzhou-i,cn-hangzhou-g`
     */
    ZoneIds: string;
    /**
     * 集群的可维护时间段，格式为`HH:mmZ-HH:mmZ`（UTC时间）。例如`16:00Z-17:00Z`表示，0点到1点（UTC+08:00）可以进行例行维护。
     * @example `18:00Z-19:00Z`
     */
    MaintainTime: string;
    /**
     * 集群引擎。
     * @example `POLARDB`
     */
    Engine: string;
    /**
     * 标签信息详情。
     */
    Tags: {
        /**
         * 标签键。
         * @example `test`
         */
        Key: string;
        /**
         * 标签值。
         * @example `MySQL`
         */
        Value: string;
    }[];
    /**
     * 请求ID。
     * @example `074467EF-86B9-4C23-ACBF-E9B81A******`
     */
    RequestId: string;
    /**
     * 专有网络ID。
     * @example `vpc-*******************`
     */
    VPCId: string;
    /**
     * 集群状态，取值范围请参见[集群状态表](~~99286~~)。
     * @example `Running`
     */
    DBClusterStatus: string;
    /**
     * 虚拟交换机ID。
     * @example `vsw-*********************`
     */
    VSwitchId: string;
    /**
     * 集群描述。
     * @example `test`
     */
    DBClusterDescription: string;
    /**
     * 集群是否到期。
     * > 仅付费方式为**Prepaid**（包年包月）的集群支持返回该参数。
     * @example `false`
     */
    Expired: string;
    /**
     * 付费类型。取值范围如下：
     * - **Postpaid**：按量付费。
     * - **Prepaid**：预付费（包年包月）。
     * @example `Prepaid`
     */
    PayType: string;
    /**
     * 存储计费类型。取值范围如下：
     * - **Postpaid**：按容量计费（按量付费）。
     * - **Prepaid**：按空间计费（包年包月）。
     * @example `Prepaid`
     */
    StoragePayType: string;
    /**
     * 锁定模式。取值范围如下：
     * - **Unlock**：未锁定。
     * - **ManualLock**：手动触发锁定。
     * - **LockByExpiration**：集群过期自动锁定。
     * @example `Unlock`
     */
    LockMode: string;
    /**
     * 存储空间的使用量，单位为Byte。
     * @example `3012558848`
     */
    StorageUsed: number;
    /**
     * 压缩后的存储数据大小。
     * >仅当集群开启存储压缩功能后支持返回该参数。
     * @example `15529410560`
     */
    CompressStorageUsed: number;
    /**
     * 按空间计费（包年包月）的存储空间。单位：Byte。
     * @example `50`
     */
    StorageSpace: number;
    /**
     * 当前数据库小版本状态，取值范围如下：
     * * **Stable**：当前版本状态稳定。
     * * **Old**：当前版本过旧，建议升级到最新版本。
     * * **HighRisk**：当前版本有严重缺陷，请立即升级到最新的版本。
     * >关于如何升级数据库小版本，请参见[版本升级](~~158572~~)。
     * @example `Stable`
     */
    DBVersionStatus: string;
    /**
     * 集群创建时间。
     * @example `2020-08-14T05:58:42Z`
     */
    CreationTime: string;
    /**
     * SQL的存储量，单位为Byte。若数值为-1，则表示没有数据。
     * @example `0`
     */
    SQLSize: number;
    /**
     * 文件系统最大inode数。
     * @example `6,291,456`
     */
    InodeTotal: number;
    /**
     * 当前inode使用量。
     * @example `4,194,304`
     */
    InodeUsed: number;
    /**
     * 文件系统最大blktag数。
     * @example `7,864,320`
     */
    BlktagTotal: number;
    /**
     * 当前blktag使用量。
     * @example `5,242,880`
     */
    BlktagUsed: number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 集群到期时间。
     * > 仅付费方式为**Prepaid**（包年包月）的集群会返回具体参数值，**Postpaid**（按量付费）集群则返回空值。
     *
     * @example `2020-11-14T16:00:00Z`
     */
    ExpireTime: string;
    /**
     * 计算节点的规格类型，取值范围如下：
     * * **Exclusive**：独享规格
     * * **General**：通用规格
     * > 仅PolarDB MySQL版且产品系列为集群版时，支持返回该参数。
     * @example `Exclusive`
     */
    SubCategory: string;
    /**
     * 是否为数据库代理最新版本，取值范围如下：
     * - **true**：是
     * - **false**：否
     * @example `false`
     */
    IsProxyLatestVersion: boolean;
    /**
     * 存储类型，取值固定为**HighPerformance**。
     * @example `HighPerformance`
     */
    StorageType: string;
    /**
     * Serverless类型。取值范围如下：
     * - AgileServerless：敏态
     * - SteadyServerless：稳态
     * @example `AgileServerless`
     */
    ServerlessType: string;
    /**
     * 集群是否开启了多可用区数据强一致。取值范围如下：
     * - **ON**：表示开启了多可用区数据强一致，适用于标准版3AZ场景。
     * - **OFF**：表示未开启多可用区数据强一致。
     * @example `ON`
     */
    StrictConsistency: string;
    /**
     * 数据库代理CPU核数。
     * @example `4`
     */
    ProxyCpuCores: string;
    /**
     * 数据库代理标准配置CPU核数。
     * @example `2`
     */
    ProxyStandardCpuCores: string;
    /**
     * 数据库代理类型，取值范围如下：
     * - **Exclusive**：企业独享版
     * - **General** ：企业通用版
     * @example `Exclusive`
     */
    ProxyType: string;
    /**
     * 数据库代理的状态。取值范围如下：
     * - **Creating**：创建中
     * - **Running**：运行中
     * - **Deleting**：释放中
     * - **Rebooting**：重启中
     * - **DBNodeCreating**：正在增加节点
     * - **DBNodeDeleting**：正在删除节点
     * - **ClassChanging**：正在变更节点规格
     * - **NetAddressCreating**：正在创建网络连接
     * - **NetAddressDeleting**：正在删除网络连接
     * - **NetAddressModifying**：正在修改网络连接
     * - **Deleted**：已释放
     * @example `Running`
     */
    ProxyStatus: string;
    /**
     * 数据库代理Serverless类型。当前取值固定为AgileServerless。
     * @example `AgileServerless`
     */
    ProxyServerlessType: string;
    /**
     * CPU 架构。取值范围如下：
     * - **X86**
     * - **ARM**
     * @example `X86`
     */
    Architecture: string;
    /**
     * AI节点类型。取值范围如下：
     *
     * - **SearchNode**：搜索节点。
     * - **DLNode**：AI节点。
     * @example `DLNode`
     */
    AiType: string;
    /**
     * <p id="p_wyg_t4a_glm" props="china" icmsditafragmentmagic=1>ESSD AutoPL云盘预配置的读写IOPS。可能值：0~min{50,000, 1000*容量-基准性能}。</p>
     * <p id="p_6de_jxy_k2g" props="china" icmsditafragmentmagic=1>基准性能=min{1,800+50*容量, 50000}。</p>
     * <note id="note_7kj_j0o_rgs" props="china" icmsditafragmentmagic=1>当StorageType为ESSDAUTOPL时才支持该参数。</note>
     * @example `2500`
     */
    ProvisionedIops: string;
    /**
     * 开启免费ai起始时间
     * @example `2024-03-13T01:20:28Z`
     */
    AiCreatingTime: string;
    SupportInstantSwitchWithImci: string;
    /**
     * Orca功能，取值如下：
     * - on：开启
     * - off：关闭
     * @example `ON`
     */
    Orca: string;
    /**
     * 源集群ID。
     * <note>仅2024年6月1日以后从备份集或时间点恢复的集群支持该参数</note>
     * @example `pc-pz51ziv48317b2880`
     */
    SourceDBCluster: string;
    /**
     * 集群恢复方式，其值可能为：
     * * **RestoreByTime**：基于一级备份从时间点恢复。
     * * **RestoreByBackupSet**：基于一级备份从备份集恢复。
     * * **RestoreByTimeOss**：基于二级备份从时间点恢复。
     * * **RestoreByBackupSetOss**：基于二级备份从备份集恢复。
     * * **CloneFromSourceCluster**：从源集群克隆。
     * <note>仅2024年6月1日以后从备份集或时间点恢复的集群支持该参数</note>
     * @example `RestoreByTime`
     */
    RestoreType: string;
    /**
     * * 若 RestoreType 为 **RestoreByTime** 或 **RestoreByTimeOss**，该值表示恢复的时间点。
     * * 若 RestoreType 为 **RestoreByBackupSet** 或 **RestoreByBackupSetOss**，该值表示恢复所基于的备份集ID。
     * <note>仅2024年6月1日以后从备份集或时间点恢复的集群支持该参数</note>
     * @example `2179639137`
     */
    RestoreDataPoint: string;
}
