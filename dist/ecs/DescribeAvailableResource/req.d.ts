export interface DescribeAvailableResourceRequest {
    /**
     * 目标地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源的计费方式。更多信息，请参见[计费概述](~~25398~~)。取值范围：
     *
     * - PrePaid：包年包月。
     * - PostPaid：按量付费。
     * 默认值：PostPaid。
     * @example `PrePaid`
     */
    "InstanceChargeType"?: string;
    /**
     * 按量付费实例的竞价策略。取值范围：
     *
     * - NoSpot：正常按量付费实例。
     * - SpotWithPriceLimit：设置上限价格的抢占式实例。
     * - SpotAsPriceGo：系统自动出价，最高按量付费价格。
     * 默认值：NoSpot。
     * 当参数InstanceChargeType取值为PostPaid时，参数SpotStrategy才有效。
     * @example `NoSpot`
     */
    "SpotStrategy"?: string;
    /**
     * 抢占式实例的保留时长，单位为小时。 默认值：1。取值范围：
     * - 1：创建后阿里云会保证实例运行1小时不会被自动释放；超过1小时后，系统会自动比较出价与市场价格、检查资源库存，来决定实例的持有和回收。
     * - 0：创建后，阿里云不保证实例运行1小时，系统会自动比较出价与市场价格、检查资源库存，来决定实例的持有和回收。
     * 实例回收前5分钟阿里云会通过ECS系统事件向您发送通知。抢占式实例按秒计费，建议您结合具体任务执行耗时来选择合适的保留时长。
     * > 当SpotStrategy值为SpotWithPriceLimit或SpotAsPriceGo时该参数生效。
     * @example `1`
     */
    "SpotDuration"?: number;
    /**
     * 要查询的资源类型。取值范围：
     *
     * - Zone：可用区。
     * - IoOptimized：I/O优化。
     * - InstanceType：实例规格。
     * - SystemDisk：系统盘。
     * - DataDisk：数据盘。
     * - Network：网络类型。
     * - ddh：专有宿主机。
     * @example `InstanceType`
     */
    "DestinationResource": string;
    /**
     * 可用区ID。
     * 默认值：无，表示随机分配当前地域下的可用区，返回该地域（`RegionId`）下所有可用区的符合查询条件的资源。
     * @example `cn-hangzhou-e`
     */
    "ZoneId"?: string;
    /**
     * 是否为I/O优化实例。取值范围：
     *
     * - none：非I/O优化实例。
     * - optimized：I/O优化实例。
     * 默认值：optimized。
     * @example `optimized`
     */
    "IoOptimized"?: string;
    /**
     * 专有宿主机ID。
     * @example `dh-bp165p6xk2tlw61e****`
     */
    "DedicatedHostId"?: string;
    /**
     * 实例规格。更多信息，请参见[实例规格族](~~25378~~)，您也可以调用[DescribeInstanceTypes](~~25620~~)接口获得最新的规格表。
     * @example `ecs.g5.large`
     */
    "InstanceType"?: string;
    /**
     * 系统盘类型。取值范围：
     *
     * - cloud：普通云盘。
     * - cloud_efficiency：高效云盘。
     * - cloud_ssd：SSD云盘。
     * - ephemeral_ssd：本地SSD盘。
     * - cloud_essd：ESSD云盘。
     * - cloud_auto：ESSD AutoPL云盘。
     * <props="china">
     * - cloud_essd_entry：ESSD Entry云盘。
     * </props>
     * 默认值：cloud_efficiency。
     * > 参数ResourceType取值为instance、DestinationResource取值为DataDisk时，参数SystemDiskCategory是必选参数。如果未传递参数值，则以默认值生效。
     * @example `cloud_ssd`
     */
    "SystemDiskCategory"?: string;
    /**
     * 数据盘类型。取值范围：
     *
     * - cloud：普通云盘。
     * - cloud_efficiency：高效云盘。
     * - cloud_ssd：SSD云盘。
     * - ephemeral_ssd：本地SSD盘。
     * - cloud_essd：ESSD云盘。
     * - cloud_auto：ESSD AutoPL云盘。
     * <props="china">
     * - cloud_essd_entry：ESSD Entry云盘。
     * </props>
     * @example `cloud_ssd`
     */
    "DataDiskCategory"?: string;
    /**
     * 网络类型。取值范围：
     *
     * - vpc：专有网络。
     * - classic：经典网络。
     *
     * @example `vpc`
     */
    "NetworkCategory"?: string;
    /**
     * 实例规格的vCPU内核数目。取值参见[实例规格族](~~25378~~)。
     * 当DestinationResource取值为InstanceType时，Cores才为有效参数。
     * @example `2`
     */
    "Cores"?: number;
    /**
     * 实例规格的内存大小，单位为GiB。取值参见[实例规格族](~~25378~~)。
     * 当DestinationResource取值为InstanceType时，Memory才为有效参数。
     * @example `8.0`
     */
    "Memory"?: number;
    /**
     * 资源类型。取值范围：
     * - instance：ECS实例。
     * - disk：云盘。
     * - reservedinstance：预留实例券。
     * - ddh：专有宿主机。
     * @example `instance`
     */
    "ResourceType"?: string;
    /**
     * 预留实例券的范围。取值范围：
     *
     * - Region：地域级别。
     * - Zone：可用区级别。
     * @example `Region`
     */
    "Scope"?: string;
}
