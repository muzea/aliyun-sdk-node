export interface DescribeDBInstancesResponse {
    /**
     * 请求ID。
     * @example `BC854513-E85E-54F3-9842-B9CCD3308CDD`
     */
    RequestId: string;
    /**
     * 每页记录数，取值：
     * - **30**（默认值）
     * - **50**
     * - **100**
     * @example `30`
     */
    PageNumber: number;
    /**
     * 页数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 总记录数。
     * @example `2`
     */
    TotalRecordCount: number;
    /**
     * 实例详情列表。
     */
    Items: {
        /**
         * 连接地址。
         * @example `暂不返回`
         */
        connectionString: string;
        /**
         * 实例ID。
         * @example `selectdb-cn-7213cjv****`
         */
        DBInstanceId: string;
        /**
         * 实例备注信息。
         * @example `新建实例测试`
         */
        Description: string;
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
         * 实例使用类型。
         * @example `Instance`
         */
        InstanceUsedType: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 可用区ID。
         * @example `cn-hangzhou-i`
         */
        ZoneId: string;
        /**
         * 实例的付费类型。取值：
         * - **Postpaid**：后付费（按量付费）
         * - **Prepaid**：预付费（包年包月）
         * @example `PrePaid`
         */
        ChargeType: string;
        /**
         * 实例的系列，默认为基础版（basic）。
         * @example `basic`
         */
        Category: string;
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
         * VPC ID。
         * @example `vpc-bp175iuvg8nxqraf2****`
         */
        VpcId: string;
        /**
         * 交换机ID。
         * @example `vsw-bp1gzt31twhlo0sa5****`
         */
        VswitchId: string;
        /**
         * 资源CPU。
         * @example `8`
         */
        ResourceCpu: number;
        /**
         * 资源内存。
         * @example `64`
         */
        ResourceMemory: number;
        /**
         * 实例RCU（RDS Capacity Unit）自动扩缩范围的最小值。
         * @example `0`
         */
        ScaleMin: number;
        /**
         * 实例RCU（RDS Capacity Unit）的自动扩缩范围最大值。
         * @example `0`
         */
        ScaleMax: number;
        /**
         * 多余字段。
         * @example `空`
         */
        ScaleReplica: number;
        /**
         * 存储空间大小。
         * @example `100`
         */
        StorageSize: number;
        /**
         * 实例存储类型。
         * @example `cloud_essd`
         */
        StorageType: string;
        /**
         * 实例存储大小，单位：GB。
         * @example `200`
         */
        ObjectStoreSize: number;
        /**
         * 集群到期时间。
         * > 仅付费方式为**Prepaid**（包年包月）的集群会返回具体参数值，**Postpaid**（按量付费）集群则返回空值。
         * @example `2024-03-29T03:47:05Z`
         */
        ExpireTime: string;
        /**
         * 实例锁定模式。
         * @example `0`
         */
        LockMode: number;
        /**
         * 被锁定的原因。
         * @example `nolock`
         */
        LockReason: string;
        /**
         * 实例是否已删除，取值说明：
         * - **true**：删除。
         * - **fasle**：未删除。
         * @example `false`
         */
        IsDeleted: boolean;
        /**
         * 实例可维护时间的开始时间。
         * @example `保留参数，暂不返回`
         */
        MaintainStarttime: string;
        /**
         * 实例可维护时间的结束时间。
         * @example `保留参数，暂不返回`
         */
        MaintainEndtime: string;
        /**
         * 任务创建时间（GMT）。
         * @example `2023-08-12T04:14Z
        `
         */
        GmtCreated: string;
        /**
         * 任务修改时间（GMT）。
         * @example `2023-08-12T19:05Z`
         */
        GmtModified: string;
        /**
         * 创建时间。
         * @example `保留参数，暂不返回`
         */
        ParentInstance: string;
        /**
         * 资源组ID。
         * @example `保留参数，暂不返回`
         */
        ResourceGroupId: string;
        /**
         * 可维护时间的开始时间戳
         * @example `保留参数，暂不返回`
         */
        MaintainStartTimeStr: string;
        /**
         * 可维护时间的结束时间戳。
         * @example `保留参数，暂不返回`
         */
        MaintainEndTimeStr: string;
        /**
         * prometheus监控集群ID。
         * @example `保留参数，暂不返回
        `
         */
        TenantClusterId: string;
        /**
         * prometheus监控接入Token。
         * @example `保留参数，暂不返回
        `
         */
        TenantToken: string;
        /**
         * prometheus监控用户账号label。
         * @example `保留参数，暂不返回
        `
         */
        TenantUserId: string;
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
        /**
         * 总集群数。
         * @example `1`
         */
        ClusterCount: number;
    }[];
}
