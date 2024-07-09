export interface DescribeInstanceResponse {
    /**
     * 专有网络ID，当**NetworkType**为**2**时会返回此参数。
     * @example `vpc-bp15s22y1a7sff5gj****`
     */
    VpcId: string;
    /**
     * 实例状态，返回值：
     * - **CREATING**：创建中。
     * - **ACTIVATION**：运行中。
     * - **DELETING**：删除中。
     * - **RESTARTING**：重启中。
     * - **MINOR_VERSION_TRANSING**：小版本升级中。
     * @example `ACTIVATION`
     */
    Status: string;
    /**
     * 加密类型，返回值：
     * - **NoEncryption**：不启用加密。
     * - **CloudDisk**：云盘加密并返回。
     * - **EncryptionKey**：参数指定加密的密钥。
     * > 云盘加密开启后无法关闭。
     * @example `NoEncryption`
     */
    EncryptionType: string;
    /**
     * 模块ID。
     * @example `0`
     */
    ModuleId: number;
    /**
     * 虚拟交换机ID，当**NetworkType**为**2**时会返回此参数。
     * @example `vsw-bp1foll427ze3d4ps****`
     */
    VswitchId: string;
    /**
     * 表示是否支持备份功能，返回值：
     * - **open**：支持备份功能。
     * - **close**：不支持备份功能。
     * @example `open`
     */
    BackupStatus: string;
    /**
     * 实例的计费类型，返回值：
     * - **Prepaid**：包年包月。
     * - **Postpaid**：按量付费。
     * @example `Prepaid`
     */
    PayType: string;
    /**
     * Core节点磁盘类型，返回值：
     * - **cloud_efficiency**：高效云盘。
     * - **cloud_ssd**：SSD云盘。
     * - **local_hdd**：本地HDD盘。
     * - **local__ssd**：本地SSD盘。
     * @example `cloud_ssd`
     */
    CoreDiskType: string;
    /**
     * 表示Master节点类型，返回值：
     * - **0**表示Master节点为单节点。
     * - **2**表示Master节点为集群版。
     * @example `2`
     */
    MasterNodeCount: number;
    /**
     * 网络类型，返回值：
     * - **VPC**：专有网络类型，如果为专有网络，则返回VswitchId和VpcId参数。
     * - **CLASSIC**：经典网络类型。
     * @example `VPC`
     */
    NetworkType: string;
    /**
     * 实例创建时间，UTC格式。
     * @example `2021-07-19T03:23:22Z`
     */
    CreatedTimeUTC: string;
    /**
     * 冷存储空间大小，单位为GB。
     * @example `800`
     */
    ColdStorageSize: number;
    /**
     * 父实例ID。
     * @example `ld-uf699153o1m2l****`
     */
    ParentId: string;
    /**
     * 实例是否为最新版本，返回值：
     * - **true**：最新版本。
     * - **false**：不是最新版本。
     * @example `true`
     */
    IsLatestVersion: boolean;
    /**
     * 实例到期时间，UTC格式。
     * @example `2022-02-23T16:00:00Z`
     */
    ExpireTimeUTC: string;
    /**
     * 请求ID。
     * @example `3F429923-B6F6-52C5-9C2A-5B8A8C6BBA66`
     */
    RequestId: string;
    /**
     * 实例名称。
     * @example `testhbase`
     */
    InstanceName: string;
    /**
     * Master节点规格。
     * @example `hbase.sn2.large`
     */
    MasterInstanceType: string;
    /**
     * Core节点规格。
     * @example `hbase.sn2.2xlarge`
     */
    CoreInstanceType: string;
    /**
     * 加密的密钥。
     * > 加密类型为**CloudDisk**时返回此参数。
     * @example `0d2470df-da7b-4786-b981-9a164dae****`
     */
    EncryptionKey: string;
    /**
     * 实例创建时间。
     * @example `2021-07-19T11:23:22`
     */
    CreatedTime: string;
    /**
     * Core节点磁盘容量，单位为GB。
     * @example `100`
     */
    CoreDiskSize: number;
    /**
     * 实例ID。
     * @example `ld-bp150tns0sjxs****`
     */
    ClusterId: string;
    /**
     * 实例到期时间。
     * @example `2022-02-24T00:00:00`
     */
    ExpireTime: string;
    /**
     * 实例运维开始时间。
     * @example `18:00Z`
     */
    MaintainStartTime: string;
    /**
     * 是否首次确认实例的运维时间，返回值：
     * - **true**：已确认。
     * - **false**：未确认。
     * > 仅首次进入实例的**基本信息**页面会弹出**首次确认实例的运维时间**对话框。
     * @example `true`
     */
    ConfirmMaintainTime: string;
    /**
     * 实例是否配置为高可用，返回值：
     * - **true**：配置为高可用。
     * - **false**：未配置为高可用。
     * > - 集群版默认配置为高可用，使用2个Master节点。
     * - 单节点配置为实际可用容量。
     * @example `true`
     */
    IsHa: boolean;
    /**
     * 实例运维结束时间。
     * @example `22:00Z`
     */
    MaintainEndTime: string;
    /**
     * 实例ID。
     * @example `ld-bp150tns0sjxs****`
     */
    InstanceId: string;
    /**
     * 是否支持冷存储功能，返回值：
     * - **open**：支持冷存储功能。
     * - **close**：不支持冷存储功能。
     * @example `open`
     */
    ColdStorageStatus: string;
    /**
     * 是否开启删除保护，返回值：
     * - **true**：开启。
     * - **false**：未开启。
     * @example `false`
     */
    IsDeletionProtection: boolean;
    /**
     * 实例的小版本号。
     * @example `2.2.9.1`
     */
    MinorVersion: string;
    /**
     * 实例所属地域的ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * Master节点的磁盘容量，单位为GB。
     * @example `0`
     */
    MasterDiskSize: number;
    /**
     * Master节点的磁盘类型，返回值：
     * - **cloud_efficiency**：高效云盘。
     * - **cloud_ssd**：SSD云盘。
     * > 单节点实例会返回此参数。
     * @example `cloud_efficiency`
     */
    MasterDiskType: string;
    /**
     * 表示是否需要升级实例的组件，返回值：
     * - **true**：升级。
     * - **false**：不升级。
     * @example `false`
     */
    NeedUpgrade: boolean;
    /**
     * 实例是否为多模集群版，返回值：
     * - **true**：是多模集群版。
     * - **false**：不是多模集群版。
     * @example `true`
     */
    IsMultiModel: boolean;
    /**
     * 实例是否自动续费，返回值：
     * - **true**：自动续费。
     * - **false**：不自动续费。
     * > 仅当PayType取值为Prepaid（包年包月）时，此参数有返回值。
     * @example `false`
     */
    AutoRenewal: boolean;
    /**
     * 实例类型，返回值：
     * - **cluster**：集群版。
     * - **single**：单节点。
     * @example `cluster`
     */
    ClusterType: string;
    /**
     * 资源组ID。
     * @example `rg-acfmyiu4ekp****`
     */
    ResourceGroupId: string;
    /**
     * 实例名称。
     * @example `testhbase`
     */
    ClusterName: string;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-f`
     */
    ZoneId: string;
    /**
     * 自动续费周期。
     * - 按月购买：自动续费周期为1个月。
     * - 按年购买：自动续费周期为1年（12个月）。
     * > 仅当PayType取值为Prepaid（包年包月）时，此参数有返回值。
     * @example `12`
     */
    Duration: number;
    /**
     * 模块类型版本。
     * @example `phoenxi:4.0`
     */
    ModuleStackVersion: string;
    /**
     * 数据引擎类型。
     * - **hbase**：HBase标准版或HBase单机版。
     * - **hbaseue**：HBase增强版。
     * - **serverlesshbase**：HBaseServerless版。
     * - **bds**：BDS实例。
     * @example `hbaseue`
     */
    Engine: string;
    /**
     * 主版本号。
     * @example `2.0`
     */
    MajorVersion: string;
    /**
     * Core磁盘数量。
     * @example `4`
     */
    CoreDiskCount: string;
    /**
     * 实例的任务运行进度，单位为百分比（%）。通过云数据库HBase控制台发起的任务，包括变更规格、扩容节点、缩容节点、重启实例，小版本升级等。
     * @example `25.00`
     */
    TaskProgress: string;
    /**
     * Core节点个数。
     * @example `2`
     */
    CoreNodeCount: number;
    /**
     * 是否支持HBase开源客户端访问，返回值：
     * - **true**：支持访问。
     * - **false**：不支持访问。
     * @example `false`
     */
    EnableHbaseProxy: boolean;
    /**
     *  LPROXY服务的最小版本。
     * @example `2.3.2`
     */
    LproxyMinorVersion: string;
    NeedUpgradeComps: {
        Comps: string[];
    };
    Tags: {
        /**
         * 资源标签。
         */
        Tag: {
            /**
             * 标签Key值。
             * @example `test_key`
             */
            Key: string;
            /**
             * 标签Value值。
             * @example `test_value`
             */
            Value: string;
        }[];
    };
}
