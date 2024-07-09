export interface DescribeDedicatedBlockStorageClustersResponse {
    /**
     * 由一个或多个专属块存储集群信息组成的数组。
     */
    DedicatedBlockStorageClusters: {
        /**
         * 专属块存储集群ID。
         * @example `dbsc-f8z4d3k4nsgg9okb****`
         */
        DedicatedBlockStorageClusterId: string;
        /**
         * 专属块存储集群名称。
         * @example `myDBSCCluster`
         */
        DedicatedBlockStorageClusterName: string;
        /**
         * 专属块存储集群的描述信息。
         * @example `This is description.`
         */
        Description: string;
        /**
         * 专属块存储集群所在地域ID。
         * @example `cn-heyuan`
         */
        RegionId: string;
        /**
         * 专属块存储集群所属的可用区ID。
         * @example `cn-heyuan-b`
         */
        ZoneId: string;
        /**
         * 专属块存储集群的状态。可能值：
         * - Preparing：待交付。
         * - Running：运行中。
         * - Expired：集群到期。
         * - Offline：下线。
         * @example `Running`
         */
        Status: string;
        /**
         * 专属块存储集群可创建的云盘类型。
         * @example `cloud_essd`
         */
        Category: string;
        /**
         * 专属块存储集群性能类型。可能值：
         * - Standard：基础型。该类型的专属块存储集群中可创建ESSD PL0云盘。
         * - Premium：性能型。该类型的专属块存储集群中可创建ESSD PL1云盘。
         * @example `Standard`
         */
        Type: string;
        /**
         * 云盘性能等级，可能值：
         * - PL0 。
         * - PL1 。
         * - PL2 。
         * - PL3。
         * > 仅在SupportedCategory=cloud_essd有效。
         * @example `PL0`
         */
        PerformanceLevel: string;
        /**
         * 暂未支持该参数。
         * @example `cloud_essd`
         */
        SupportedCategory: string;
        /**
         * 专属块存储集群创建时间，格式为Unix时间戳，单位为秒。
         * @example `1657113211`
         */
        CreateTime: string;
        /**
         * 专属块存储集群到期时间，格式为Unix时间戳，单位为秒。
         * @example `1673020800`
         */
        ExpiredTime: string;
        /**
         * 专属块存储集群的存储容量信息。
         */
        DedicatedBlockStorageClusterCapacity: {
            /**
             * 专属块存储集群的可用容量，单位为GiB。
             * @example `61440`
             */
            AvailableCapacity: number;
            /**
             * 专属块存储集群的总容量，单位为GiB。
             * @example `61440`
             */
            TotalCapacity: number;
            /**
             * 待交付容量，单位为GiB。
             * @example `0`
             */
            DeliveryCapacity: number;
            /**
             * 当前集群的已使用（已创盘）容量，单位为GiB。
             * @example `1440`
             */
            UsedCapacity: number;
            /**
             * 待交付专属集群订单容量，单位为GB
             * @example `0`
             */
            ClusterDeliveryCapacity: number;
            /**
             * 已交付专属集群订单容量，单位为GB
             * @example `61440`
             */
            ClusterAvailableCapacity: number;
            /**
             * 当前集群允许创盘总容量（已交付订单容量），单位为GB
             * @example `61440`
             */
            AvailableDeviceCapacity: number;
            /**
             * 当前集群总创盘容量（已下单订单容量），单位为GB
             * @example `61440`
             */
            TotalDeviceCapacity: number;
            /**
             * 实际创盘容量，单位为GB
             * @example `32000`
             */
            UsedDeviceCapacity: number;
            /**
             * 开启精简配置后显示
             * @example `40000.3`
             */
            AvailableSpaceCapacity: number;
            /**
             * 开启精简配置后显示
             * @example `73728`
             */
            TotalSpaceCapacity: number;
            /**
             * 开启精简配置后显示
             * @example `33727.7`
             */
            UsedSpaceCapacity: number;
        };
        /**
         * 用户id
         * @example `1234560123456****`
         */
        AliUid: string;
        /**
         * StorageDomain
         * @example `StorageDomain`
         */
        StorageDomain: string;
        /**
         * 开启精简配置
         * @example `true`
         */
        EnableThinProvision: boolean;
        /**
         * 容量超卖系数
         * @example `1.2`
         */
        SizeOverSoldRatio: number;
        /**
         * 专属集群的标签。
         */
        Tags: {
            /**
             * 专属集群的标签键。
             * @example `testKey`
             */
            TagKey: string;
            /**
             * 专属集群的标签值。
             * @example `testValue`
             */
            TagValue: string;
        }[];
        /**
         * 专属集群所在的企业资源组ID。您可以调用[ListResourceGroups](~~158855~~)查询资源组ID。
         * @example `rg-aekzsoux****`
         */
        ResourceGroupId: string;
    }[];
    /**
     * 本次调用返回的查询凭证值。
     * @example `AAAAAdDWBF2`
     */
    NextToken: string;
    /**
     * 参数页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 参数页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 分页查询时的结果总条数。
     * @example `20`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `11B55F58-D3A4-4A9B-9596-342420D0****`
     */
    RequestId: string;
}
