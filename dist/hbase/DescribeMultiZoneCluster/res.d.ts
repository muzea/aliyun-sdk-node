export interface DescribeMultiZoneClusterResponse {
    /**
     * 专有网络ID。
     * @example `vpc-t4nx81tmlixcq5****`
     */
    VpcId: string;
    /**
     * 加密类型，可选项为：
     * - NULL：不启用加密（默认值）。
     * - CloudDisk：云盘加密并通过**EncryptionKey**参数指定密钥。
     * @example `CloudDisk`
     */
    EncryptionType: string;
    /**
     * 组件ID。
     * @example `0`
     */
    ModuleId: number;
    /**
     * 付费类型。
     * - Prepaid：预付费。
     * - Postpaid：后付费。
     * @example `Prepaid`
     */
    PayType: string;
    /**
     * 仲裁虚拟交换机ID。
     * @example `vsw-t4nax9mp3wk0czn****`
     */
    ArbiterVSwitchIds: string;
    /**
     * master节点数量。
     * @example `2`
     */
    MasterNodeCount: number;
    /**
     * 请求ID。
     * @example `A02C0E6D-3A47-4FA0-BA7E-60793CE256DA`
     */
    RequestId: string;
    /**
     * 集群名称。
     * @example `mz_test`
     */
    InstanceName: string;
    /**
     * core节点规格。
     * @example `hbase.sn1.large`
     */
    CoreInstanceType: string;
    /**
     * 加密的密钥ID，如果未启用加密则为空。
     * > 当前云盘加密开启后无法关闭。
     * @example `2a****`
     */
    EncryptionKey: string;
    /**
     * 集群ID。
     * @example `ld-t4nn71xa0yn****`
     */
    ClusterId: string;
    /**
     * log节点数量，4节点起，且为4的倍数。
     * @example `4`
     */
    LogNodeCount: number;
    /**
     * 过期时间，预付费（PayType为Prepaid）时有此字段（当前时区）。
     * @example `2020-11-16T08:00:00`
     */
    ExpireTime: string;
    /**
     * 当前多可用区实例的可用区组合。
     * @example `ap-southeast-1-abc-aliyun`
     */
    MultiZoneCombination: string;
    /**
     * 集群ID。
     * @example `ld-t4nn71xa0yn****`
     */
    InstanceId: string;
    /**
     * 是否启动删除保护：
     * - True：启动，不能删除，删除时会提示禁止删除。
     * - False：不启动，可以删除。
     * @example `false`
     */
    IsDeletionProtection: boolean;
    /**
     * master节点磁盘大小。
     * @example `50`
     */
    MasterDiskSize: number;
    /**
     * 对于PayType为预付费（Prepaid）的多可用区实例，有此是否自动续费字段。
     * - True：自动续费。
     * - False：不自动续费。
     * @example `false`
     */
    AutoRenewal: boolean;
    /**
     * 集群名称。
     * @example `mz_test`
     */
    ClusterName: string;
    /**
     * 自动续费周期，后付费实例无此返回值。
     * - 按月购买：则自动续费周期为1 个月。
     * - 按年购买：则自动续费周期为1 年（12个月）。
     * @example `1`
     */
    Duration: number;
    /**
     * 组件软件栈版本。
     * @example `2.0`
     */
    ModuleStackVersion: string;
    /**
     * 根据引擎类型的版本号，目前仅支持hbaseue的2.0版本。
     * @example `2.0`
     */
    MajorVersion: string;
    /**
     * core节点数量。
     * @example `4`
     */
    CoreDiskCount: string;
    /**
     * 集群状态。
     * - CREATING：创建中。
     * - ACTIVATION：运行中。
     * - DELETING：删除中。
     * - RESTARTING：重启中。
     * @example `ACTIVATION`
     */
    Status: string;
    /**
     * log节点规格， 可以从[DescribeInstanceType](~~145796~~)接口查询到准确的信息。
     * @example `hbase.sn1.large`
     */
    LogInstanceType: string;
    /**
     * log节点单个磁盘大小，单位：GB。
     * @example `100`
     */
    LogDiskSize: number;
    /**
     * core磁盘类型：
     * - cloud_efficiency：高效云盘。
     * - cloud_ssd：SSD盘。
     * - local_hdd_pro：吞吐密集型本地盘。
     * - local_ssd_pro：I/O密集型本地盘。
     * @example `cloud_efficiency`
     */
    CoreDiskType: string;
    /**
     * 备可用区实例的可用区ID。
     * @example `ap-southeast-1b`
     */
    StandbyZoneId: string;
    /**
     * 网络类型，目前仅支持VPC。
     * @example `VPC`
     */
    NetworkType: string;
    /**
     * 主可用区实例的虚拟交换机ID。
     * @example `vsw-t4n3s1zd2gtidg****`
     */
    PrimaryVSwitchIds: string;
    /**
     * 创建时间，UTC时间。
     * @example `2020-10-15T10:04:52Z`
     */
    CreatedTimeUTC: string;
    /**
     * 如果为组件实例，会有此字段显示其主实例ID。
     * @example `ld-fls1gf31y5s35****`
     */
    ParentId: string;
    /**
     * 过期时间，预付费（PayType为Prepaid）时有此字段（UTC时间）。
     * @example `2020-11-16T00:00:00Z`
     */
    ExpireTimeUTC: string;
    /**
     * log节点磁盘类型。
     * - cloud_efficiency：高效云盘。
     * - cloud_ssd：SSD盘。
     * - local_hdd_pro：吞吐密集型本地盘。
     * - local_ssd_pro：I/O密集型本地盘。
     * @example `cloud_efficiency`
     */
    LogDiskType: string;
    /**
     * master节点规格。
     * @example `hbase.sn1.large`
     */
    MasterInstanceType: string;
    /**
     * 创建时间，当前时区的时间。
     * @example `2020-10-15T18:04:52`
     */
    CreatedTime: string;
    /**
     * core节点磁盘大小，单位GB。
     * @example `100`
     */
    CoreDiskSize: number;
    /**
     * log单节点的磁盘数量。
     * @example `4`
     */
    LogDiskCount: string;
    /**
     * 备可用区实例的虚拟交换机ID。
     * @example `vsw-t4nvvk7xur3rdi****`
     */
    StandbyVSwitchIds: string;
    /**
     * 可运维时间开始时间。HH:MMZ样式，如20:00Z。
     * @example `02:00:00`
     */
    MaintainStartTime: string;
    /**
     * 主可用区实例的可用区ID。
     * @example `ap-southeast-1a`
     */
    PrimaryZoneId: string;
    /**
     * 可运维时间结束时间。HH:MMZ样式，如20:00Z。
     * @example `06:00:00`
     */
    MaintainEndTime: string;
    /**
     * 仲裁可用区ID。
     * @example `ap-southeast-1c`
     */
    ArbiterZoneId: string;
    /**
     * master节点磁盘类型。
     * @example `cloud_efficiency`
     */
    MasterDiskType: string;
    /**
     * 地域ID。
     * @example `ap-southeast-1`
     */
    RegionId: string;
    /**
     * 资源所在的资源组ID。
     * @example `rg-lk51f5fer315e****`
     */
    ResourceGroupId: string;
    /**
     * 服务类型：目前仅支持hbaseue。
     * @example `hbaseue`
     */
    Engine: string;
    /**
     * core节点个数，4节点起，且增量为2的倍数。
     * @example `6`
     */
    CoreNodeCount: number;
    /**
     * 冷存储大小。单位：GB。
     * @example `800`
     */
    ColdStorageSize: number;
    MultiZoneInstanceModels: {
        /**
         * 该多可用区实例下各个可用区实例信息。
         */
        MultiZoneInstanceModel: {
            /**
             * 该子实例的状态。
             * @example `ACTIVATION`
             */
            Status: string;
            /**
             * 是否最新版本。
             * @example `true`
             */
            IsLatestVersion: boolean;
            /**
             * 该子实例的角色。
             * @example `primary`
             */
            Role: string;
            /**
             * 子实例名称。
             * @example `ld-t4nn71xa0yn****-az-a`
             */
            InsName: string;
            /**
             * 本实例小版本号。
             * @example `2.1.24`
             */
            MinorVersion: string;
            /**
             * 宽表引擎当前的最新版本。
             * @example `2.6.3`
             */
            LatestMinorVersion: string;
            /**
             * 存储引擎当前版本号。
             * @example `4.1.0`
             */
            HdfsMinorVersion: string;
            /**
             * 存储引擎当前最新版本号。
             * @example `4.1.1`
             */
            LatestHdfsMinorVersion: string;
            /**
             * 存储引擎是否是最新版本。
             * @example `true`
             */
            IsHdfsLatestVersion: string;
        }[];
    };
    Tags: {
        /**
         * 集群标签。
         */
        Tag: {
            /**
             * 标签的Key。
             * @example `test_key`
             */
            Key: string;
            /**
             * 标签的Value。
             * @example `test_value`
             */
            Value: string;
        }[];
    };
}
