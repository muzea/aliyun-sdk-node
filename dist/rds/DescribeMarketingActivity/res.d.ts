export interface DescribeMarketingActivityResponse {
    /**
     * Id of the request
     * @example `7D8F09DB-1124-5D78-A520-FF88FAF4351B`
     */
    RequestId: string;
    /**
     * 阿里云账号ID。
     * @example `1979008652307170`
     */
    AliUid: number;
    /**
     * 地域ID。
     * @example `cn-shenzhen`
     */
    RegionId: string;
    /**
     * - 国内：26842
     * - 国际：26888
     * @example `26842`
     */
    Bid: string;
    /**
     * 活动参数
     */
    Items: {
        /**
         * 实例ID。
         * @example `rm-uf62br2491p5l****`
         */
        InstanceId: string;
        /**
         * 实例名称。
         * @example `rm-uf62br2491p5l****`
         */
        InstanceName: string;
        /**
         * 实例规格代码。更多信息，请参见[主实例规格列表](~~26312~~)和[只读实例规格列表](~~145759~~)。
         * @example `rds.mysql.s3.large`
         */
        ClassCode: string;
        /**
         * 磁盘存储大小（每节点，单位GB）。
         * @example `900`
         */
        DiskSize: number;
        /**
         * 内存大小。
         * @example `1024`
         */
        Memory: number;
        /**
         * 实例规格对应的CPU核数。单位：个。
         * @example `2`
         */
        Cpu: string;
        /**
         * 实例系列，取值：
         * * **Basic**：基础版。
         * * **HighAvailability**：高可用版。
         * * **AlwaysOn**：集群版。
         * * **Finance**：三节点企业版。
         * @example `Basic`
         */
        Category: string;
        /**
         * 实例存储类型，取值：
         * * **local_ssd**：本地SSD盘。
         * * **cloud_ssd**：SSD云盘。
         * * **cloud_essd**：ESSD PL1云盘。
         * * **cloud_essd2**：ESSD PL2云盘。
         * * **cloud_essd3**：ESSD PL3云盘。
         * @example `cloud_essd`
         */
        StorageType: string;
        /**
         * 实例规格族。更多信息，请参见[实例规格族](~~57184~~)。
         * @example `x`
         */
        ClassGroup: string;
        /**
         * 最大Iombps
         * @example `100`
         */
        MaxIombps: number;
        /**
         * 最大Iops。
         * @example `30`
         */
        MaxIops: number;
        /**
         * 最大并发连接数。
         * @example `60`
         */
        MaxConnections: number;
        /**
         * 升级实例规格代码。
         * @example `rds.mysql.s3.large`
         */
        UpgradeClassCode: string;
        /**
         * 升级磁盘大小
         * @example `1024`
         */
        UpgradeDiskSize: number;
        /**
         * 升级内存大小
         * @example `1024`
         */
        UpgradeMemory: number;
        /**
         * 升级cpu核数
         * @example `8`
         */
        UpgradeCpu: string;
        /**
         * 升级实例系列
         * @example `HighAvailability`
         */
        UpgradeCategory: string;
        /**
         * 升级实例存储类型
         * @example `cloud_essd`
         */
        UpgradeStorageType: string;
        /**
         * 升级实例规格族
         * @example `d`
         */
        UpgradeClassGroup: string;
        /**
         * 升级最大Iombps
         * @example `200`
         */
        UpgradeMaxIombps: number;
        /**
         * 升级最大Iops。
         * @example `70`
         */
        UpgradeMaxIops: number;
        /**
         * 升级最大并发连接数。
         * @example `70`
         */
        UpgradeMaxConnections: number;
        /**
         * 升级描述内容。
         * @example `test`
         */
        UpgradeDescContent: string;
        /**
         * 升级参考价格。
         * @example `23333.1`
         */
        UpgradeReferencePrice: string;
        /**
         * 付费类型。
         * - 按量付费：POSTPAY
         * - 包年包月：PREPAY
         * @example `POSTPAY`
         */
        ChargeType: string;
        /**
         * 数据库类型。返回值：
         * - MySQL
         * - SQLServer
         * - PostgreSQL
         * - PPAS
         * - MariaDB
         * @example `MySQL`
         */
        Engine: string;
        /**
         * 数据库版本。
         * @example `8.0`
         */
        EngineVersion: string;
    }[];
}
