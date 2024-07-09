export interface GetLindormInstanceResponse {
    /**
     * 实例所属的专有网络（VPC）的ID。
     * @example `vpc-bp1n3i15v90el48nx****`
     */
    VpcId: string;
    /**
     * 虚拟交换机ID。
     * @example `vsw-bp1vbjzmod9q3l9eo****`
     */
    VswitchId: string;
    /**
     * 实例创建时间，格式：**yyyy-MM-dd HH:mm:ss**。
     * @example `2021-07-26 17:10:26`
     */
    CreateTime: string;
    /**
     * 实例的付费类型，返回：
     * - **PREPAY**：包年包月。
     * - **POSTPAY**：按量付费。
     * @example `POSTPAY`
     */
    PayType: string;
    /**
     * 实例的网络类型。
     * @example `vpc`
     */
    NetworkType: string;
    /**
     * 实例类型，取值：
     * - **lindorm**：表示Lindorm单可用区实例。
     * - **lindorm_multizone**：表示Lindorm多可用区实例。
     * - **serverless_lindorm**：表示Lindorm Serverless实例。
     * - **lindorm_standalone**：表示Lindorm单节点实例。
     * - **lts**：表示Lindorm数据通道服务类型。
     * @example `lindorm`
     */
    ServiceType: string;
    /**
     * 是否开启密钥管理服务KMS，返回：
     * - **true**：开启。
     * - **false**：关闭。
     * @example `false`
     */
    EnableKms: boolean;
    /**
     * 磁盘空间使用率。
     * @example `0.0%`
     */
    DiskUsage: string;
    /**
     * 存储类型，返回：
     * - **cloud_efficiency**：标准型云存储。
     * - **cloud_ssd**：性能型云存储。
     * - **cloud_essd**：性能增强型云存储。
     * - **cloud\_essd\_pl0**：性能型云存储 pl0。
     * - **capacity\_cloud\_storage**：容量型云存储。
     * - **local\_ssd\_pro**：本地SSD盘。
     * - **local\_hdd\_pro**：本地HDD盘。
     * @example `cloud_efficiency`
     */
    DiskCategory: string;
    /**
     * 请求ID。
     * @example `633F1BE4-C8DA-5744-8FDF-A3075C3FE37F`
     */
    RequestId: string;
    /**
     * 容量型云存储容量。
     * @example `0GB`
     */
    ColdStorage: number;
    /**
     * 实例到期时间与1970-01-01 00:00:00之间的毫秒值。
     * @example `1629993600000`
     */
    ExpiredMilliseconds: number;
    /**
     * 支持引擎的类型，返回值是由下列引擎类型的值做加法运算后得到的。
     * - 1: 搜索引擎
     * - 2: 时序引擎
     * - 4: 宽表引擎
     * - 8: 文件引擎
     * > 例如：EngineType值为15，15=8+4+2+1，表示该实例支持搜索引擎、时序引擎、宽表引擎和文件引擎。EngineType值为6，6=4+2，表示该实例支持时序引擎和宽表引擎。
     * @example `15`
     */
    EngineType: number;
    /**
     * 实例的到期时间，格式：**yyyy-MM-dd HH:mm:ss**。
     * > 付费类型为包年包月，才会返回本参数。
     * @example `2021-08-27 00:00:00`
     */
    ExpireTime: string;
    /**
     * 是否开通自动续费，返回：
     * - **true**：开启。
     * - **false**：关闭。
     * > 实例的付费类型为包年包月会返回此参数。
     * @example `false`
     */
    AutoRenew: boolean;
    /**
     * 是否开启删除保护，返回：
     * - **true**：开启。
     * - **false**：关闭。
     * @example `false`
     */
    DeletionProtection: string;
    /**
     * 实例的存储容量。
     * @example `480`
     */
    InstanceStorage: string;
    /**
     * 阿里云账号（主账号）的16位AliUid。
     * @example `164901546557****`
     */
    AliUid: number;
    /**
     * 实例ID。
     * @example `ld-bp1o3y0yme2i2****`
     */
    InstanceId: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 表示实例创建时间与1970-01-01 00:00:00之间的毫秒值。
     * @example `1627290664000`
     */
    CreateMilliseconds: number;
    /**
     * 实例名称。
     * @example `test0726`
     */
    InstanceAlias: string;
    /**
     * 磁盘空间的阈值。
     * @example `80%`
     */
    DiskThreshold: string;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-h`
     */
    ZoneId: string;
    /**
     * 实例状态，返回：
     * - **CREATING**：创建中。
     * - **ACTIVATIO**N：运行中。
     * - **COLD_EXPANDING**：容量型云存储扩容中。
     * - **MINOR_VERSION_TRANSING**：小版本升级中。
     * - **RESIZING**：节点扩容中。
     * - **SHRINKING**：节点缩容中。
     * - **CLASS_CHANGING**：升级规格中或者降配规格中。
     * - **SSL_SWITCHING**：SSL变更中。
     * - **CDC_OPENING**：数据订阅功能开通中。
     * - **TRANSFER**：数据迁移中。
     * - **DATABASE_TRANSFER**：数据迁移至数据库中。
     * - **GUARD_CREATING**：生产灾备实例中。
     * - **BACKUP_RECOVERING**：备份恢复中。
     * - **DATABASE_IMPORTING**：数据导入中。
     * - **NET_MODIFYING**：网络变更中。
     * - **NET_SWITCHING**：内网和外网切换中。
     * - **NET_CREATING**：创建网络链接中。
     * - **NET_DELETING**：删除网络链接中。
     * - **DELETING**：删除中。
     * - **RESTARTING**：重启中。
     * - **LOCKED**：实例已过期，锁定中。
     * @example `ACTIVATION`
     */
    InstanceStatus: string;
    /**
     * 引擎信息列表。
     */
    EngineList: {
        /**
         * 引擎类型的版本号。
         * @example `2.2.3`
         */
        Version: string;
        /**
         * 引擎节点CPU数量。
         * @example `4`
         */
        CpuCount: string;
        /**
         * 引擎节点数量。
         * @example `2`
         */
        CoreCount: string;
        /**
         * 引擎类型，返回：
         * - **lindorm**：宽表引擎。
         * - **tsdb**：时序引擎。
         * - **solr**：搜索引擎。
         * - **store**：文件引擎。
         * - **bds**：LTS引擎。
         * - **compute**：计算引擎。
         * @example `lindorm`
         */
        Engine: string;
        /**
         * 引擎类型的节点内存大小。
         * @example `8GB`
         */
        MemorySize: string;
        /**
         * 引擎类型是否最新版本，返回：
         * - **true**：最新版本。
         * - **false**：不是最新版本。
         * @example `false`
         */
        IsLastVersion: boolean;
        /**
         * 引擎类型对应的最新的版本号。
         * @example `2.2.19.2`
         */
        LatestVersion: string;
    }[];
    /**
     * 是否开通实例的计算引擎，返回：
     * - **true**：已开通。
     * - **false**：未开通。
     * @example `true`
     */
    EnableCompute: boolean;
    /**
     * 是否开启SSL链路加密功能，返回：
     * - **true**：开启。
     * - **false**：关闭。
     * @example `false`
     */
    EnableSSL: boolean;
    /**
     * 是否开通AI控制节点
     * - True: 表示开通
     * - False: 表示未开通
     * @example `False`
     */
    EnableMLCtrl: boolean;
    /**
     * 是否开通实例的数据订阅功能，返回：
     * - **true**：已开通。
     * - **false**：未开通。
     * @example `false`
     */
    EnableCdc: boolean;
    /**
     * 实例是否开通流引擎，返回值：
     * - **true**：开通流引擎。
     * - **false**：未开通流引擎。
     * @example `true`
     */
    EnableStream: boolean;
    /**
     * 实例是否开通LTS引擎，返回值：
     * - **true**：开通LTS引擎。
     * - **false**：未开通LTS引擎。
     * @example `true`
     */
    EnableLTS: boolean;
    /**
     * 是否开通计算引擎History Server。
     * @example `true`
     */
    EnableShs: boolean;
    /**
     * 实例是否开通LBlob，返回值：
     * true：开通LBlob。
     * false：未开通LBlob。
     * @example `true`
     */
    EnableBlob: boolean;
    /**
     * 可维护开始时间。
     * @example `00:00Z`
     */
    MaintainStartTime: string;
    /**
     * 可维护结束时间。
     * @example `20:00Z`
     */
    MaintainEndTime: string;
    /**
     * 资源组ID。
     * @example `rg-aek2wvd6oia****`
     */
    ResourceGroupId: string;
    /**
     * 多可用区实例，主可用区的可用区ID。
     * @example `cn-shanghai-e`
     */
    PrimaryZoneId: string;
    /**
     * 多可用区实例，备可用区的可用区ID。
     * @example `cn-shanghai-f`
     */
    StandbyZoneId: string;
    /**
     * 多可用区实例，协调可用区的可用区ID。
     * @example `cn-shanghai-g`
     */
    ArbiterZoneId: string;
    /**
     * 多可用区实例，主可用区的虚拟交换机ID，必须在PrimaryZoneId对应的可用区下。
     * @example `vsw-uf6fdqa7c0pipnqzq****`
     */
    PrimaryVSwitchId: string;
    /**
     * 多可用区实例，备可用区的虚拟交换机ID，必须在StandbyZoneId对应的可用区下。
     * @example `vsw-2zec0kcn08cgdtr6****`
     */
    StandbyVSwitchId: string;
    /**
     * 多可用区实例，协调可用区虚拟交换机ID，交换机需位于ArbiterZoneId对应的可用区下。
     * @example `vsw-uf6664pqjawb87k36****`
     */
    ArbiterVSwitchId: string;
    /**
     * 多可用区组合。可用区组合支持情况可前往售卖页查看。
     * - **ap-southeast-5abc-aliyun**：印度尼西亚(雅加达)A+B+C。
     * - **cn-hangzhou-ehi-aliyun**：华东1(杭州)E+H+I。
     * - **cn-beijing-acd-aliyun**：华北2(北京)A+C+D。
     * - **ap-southeast-1-abc-aliyun**：新加坡A+B+C。
     * - **cn-zhangjiakou-abc-aliyun**：华北3(张家口)A+B+C。
     * - **cn-shanghai-efg-aliyun**：华东2(上海)E+F+G。
     * - **cn-shanghai-abd-aliyun**：华东2(上海)A+B+D。
     * - **cn-hangzhou-bef-aliyun**：华东1(杭州)B+E+F。
     * - **cn-hangzhou-bce-aliyun**：华东1(杭州)B+C+E。
     * - **cn-beijing-fgh-aliyun**：华北2(北京)F+G+H。
     * - **cn-shenzhen-abc-aliyun**：华南1(深圳)A+B+C。
     * @example `cn-shanghai-efg-aliyun`
     */
    MultiZoneCombination: string;
    /**
     * 多可用区实例，core节点磁盘类型，返回：
     * - **cloud_efficiency**：标准型云存储。
     * - **cloud_ssd**：性能型云存储。
     * - **cloud_essd**：性能增强型云存储。
     * - **cloud\_essd\_pl0**：性能型云存储 pl0。
     * @example `cloud_efficiency`
     */
    CoreDiskCategory: string;
    /**
     * 多可用区实例，core节点规格。
     * @example `lindorm.g.xlarge`
     */
    CoreSpec: string;
    /**
     * 多可用区实例，core节点数量。
     * @example `4`
     */
    CoreNum: number;
    /**
     * 多可用区实例，core单节点磁盘容量。
     * @example `400`
     */
    CoreSingleStorage: number;
    /**
     * 多可用区实例，log节点磁盘类型，返回：
     * - **cloud_efficiency**：标准云存储。
     * - **cloud_ssd**：性能云存储。
     * @example `cloud_ssd`
     */
    LogDiskCategory: string;
    /**
     * 多可用区实例，log节点规格。
     * @example `lindorm.sn1.large`
     */
    LogSpec: string;
    /**
     * 多可用区实例，log节点数量。
     * @example `4`
     */
    LogNum: number;
    /**
     * 多可用区实例，log单节点磁盘容量。
     * @example `400GB`
     */
    LogSingleStorage: number;
    /**
     * 部署架构，取值：
     * - **1.0**：单可用区。
     * - **2.0**：多可用区。
     * @example `1.0`
     */
    ArchVersion: string;
    /**
     * 宽表引擎是否支持LindormSQL-V3能力，其兼容MySQL协议，
     * 2023-10-24号之后新购的实例默认支持；存量实例需要联系值班同学评估后再打开。
     * - True 表示支持
     * - False 表示不支持
     * @example `True`
     */
    EnableLsqlVersionV3: boolean;
    /**
     * 宽表引擎是否支持Thrift、CQL协议。如不支持的话，可以通过SwitchLProxyService接口进行开通与关闭。
     * True 表示支持
     * False 表示不支持
     * @example `False`
     */
    EnableLProxy: boolean;
}
