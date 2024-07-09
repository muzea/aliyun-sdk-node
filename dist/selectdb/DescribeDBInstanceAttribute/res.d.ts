export interface DescribeDBInstanceAttributeResponse {
    /**
     * 请求ID。
     * @example `06758CAB-1204-5852-A471-29C87D5C1D0F`
     */
    RequestId: string;
    /**
     * 实例的状态，取值说明：
     * - **CREATING**：创建中。
     * - **ACTIVATION**：运行中。
     * - **RESOURCE_CHANGING**：变配中。
     * - **ORDER_PREPARING**：订单确认中。
     * - **READONLY_RESOURCE_CHANGING**：资源变配中（实例写入锁定）。
     * - **DELETING**：删除中。
     * @example `ACTIVATION`
     */
    Status: string;
    /**
     * 可用区。
     * @example `cn-beijing-h-aliyun`
     */
    SubDomain: string;
    /**
     * 实例修改时间（例如重启，申请公网等操作）。格式为yyyy-MM-ddTHH:mmZ（UTC时间）。
     * @example `2023-08-17T09:58Z`
     */
    GmtModified: string;
    /**
     * 实例锁定模式，取值为**lock**，实例自动过期或欠费。
     * @example `lock`
     */
    LockMode: number;
    /**
     * 实例锁定原因。
     * @example `nolock`
     */
    LockReason: string;
    /**
     * 资源CPU数量。
     * @example `8`
     */
    ResourceCpu: number;
    /**
     * 存储空间大小。
     * @example `400`
     */
    StorageSize: number;
    /**
     * 存储空间。
     * @example `0`
     */
    ObjectStoreSize: number;
    /**
     * 实例可维护时间段的开始时间。
     * @example `预留参数，暂不返回`
     */
    MaintainStarttime: string;
    /**
     * 实例可维护时间段的结束时间。
     * @example `预留参数，暂不返回
    `
     */
    MaintainEndtime: string;
    /**
     * 实例列表信息。
     */
    DBClusterList: {
        /**
         * 实例名称。
         * @example `实例测试`
         */
        DbInstanceName: string;
        /**
         * 集群ID。
         * @example `selectdb-cn-h033cjs****-be`
         */
        DbClusterId: string;
        /**
         * 集群名称。
         * @example `test01`
         */
        DbClusterName: string;
        /**
         * 实例的状态，取值说明：
         * - **CREATING**：创建中。
         * - **ACTIVATION**：运行中。
         * - **RESOURCE_CHANGING**：变配中。
         * - **ORDER_PREPARING**：订单确认中。
         * - **READONLY_RESOURCE_CHANGING**：资源变配中（实例写入锁定）。
         * - **DELETING**：删除中。
         * @example `ACTIVATION`
         */
        Status: string;
        /**
         * 实例的创建时间。
         * @example `2023-08-14T09:24:13Z`
         */
        CreatedTime: string;
        /**
         * 集群规格，取值说明：
         * - **selectdb.xlarge**：4核32GB。
         * - **selectdb.2xlarge**： 8核64GB。
         * - **selectdb.4xlarge**：16核128GB。
         * - **selectdb.8xlarge**：32核256GB。
         * - **selectdb.16xlarge**：64核512GB。
         * - **selectdb.24xlarge**：96核768GB。
         * - **selectdb.32xlarge**：128核1024GB。
         * @example `selectdb.2xlarge`
         */
        DbClusterClass: string;
        /**
         * CPU核数。
         * @example `8`
         */
        CpuCores: number;
        /**
         * 内存大小。
         * @example `64`
         */
        Memory: number;
        /**
         * 缓存空间类型。
         * @example `cloud_essd`
         */
        CacheStorageType: string;
        /**
         * 性能级别。
         * @example `PL1`
         */
        PerformanceLevel: string;
        /**
         * 缓存空间，单位：GB。
         * @example `200`
         */
        CacheStorageSizeGB: string;
        /**
         * 开始时间。
         * @example `2023-08-14T09:24:13Z`
         */
        StartTime: string;
        /**
         * 实例的付费类型。取值：
         * - **Postpaid**：后付费（按量付费）
         * - **Prepaid**：预付费（包年包月）
         * @example `Prepaid`
         */
        ChargeType: string;
    }[];
    /**
     * 数据库类型。
     * @example `selectdb`
     */
    Engine: string;
    /**
     * 数据库版本。
     * @example `2.4`
     */
    EngineVersion: string;
    /**
     * 实例的内核小版本号。
     * @example `3.0.1`
     */
    EngineMinorVersion: string;
    /**
     * 实例ID。
     * @example `selectdb-cn-7213cjv****`
     */
    DBInstanceId: string;
    /**
     * 实例备注信息。
     * @example `test`
     */
    Description: string;
    /**
     * 创建时间。
     * @example `2023-08-14T03:00:42Z`
     */
    CreateTime: string;
    /**
     * 信息列表。
     */
    CanUpgradeVersions: string[];
    /**
     * 实例的付费类型。取值：
     * - **Postpaid**：后付费（按量付费）
     * - **Prepaid**：预付费（包年包月）
     * @example `Prepaid`
     */
    ChargeType: string;
    /**
     * 实例到期时间。
     * @example `2023-09-17T00:00Z`
     */
    ExpireTime: string;
    /**
     * 实例所属的资源组ID。
     * @example `rg-aekzbck4asz3dsa`
     */
    ResourceGroupId: string;
    /**
     * 实例标签列表信息。
     */
    Tags: {
        /**
         * 标签键。
         * @example `testKey`
         */
        TagKey: string;
        /**
         * 标签值。
         * @example `testValue`
         */
        TagValue: string;
    }[];
}
