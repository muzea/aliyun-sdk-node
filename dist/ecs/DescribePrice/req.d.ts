export interface DescribePriceRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 目标资源的类型。取值范围：
     * - instance：查询ECS实例的最新价格列表。当取值为`instance`时，必须同时指定参数`InstanceType`。
     * - disk：查询云盘的最新价格列表。当取值为`disk`时，必须同时指定参数`DataDisk.1.Category`和`DataDisk.1.Size`。
     * - bandwidth：查询带宽的最新价格列表。
     * - ddh：查询专有宿主机的最新价格列表。
     * - ElasticityAssurance：查询弹性保障服务的价格信息。当取值为`ElasticityAssurance`时，必须同时指定参数`InstanceType`。
     * - CapacityReservation：查询容量预定服务的价格信息。当取值为`CapacityReservation`时，必须同时指定参数`InstanceType`。
     * 默认值：instance。
     * @example `instance`
     */
    "ResourceType"?: string;
    /**
     * 仅当参数ResourceType的值为instance时，该参数生效。
     * 镜像ID，表示启动实例时希望装载的运行环境。您可以调用[DescribeImages](~~25534~~)查询您可用的镜像资源。如果不指定，默认查询Linux系统镜像的价格。
     * @example `centos_7_05_64_20G_alibase_20181212.vhd`
     */
    "ImageId"?: string;
    /**
     * 实例的资源规格。参数`ResourceType`的值为`instance`时，您必须同时指定该参数。更多详情，请参见[实例规格族](~~25378~~)，也可以调用[DescribeInstanceTypes](~~25620~~)接口获得最新的规格表。
     * @example `ecs.g6.large`
     */
    "InstanceType"?: string;
    /**
     * 专有宿主机的规格。您可以调用[DescribeDedicatedHostTypes](~~134240~~)接口获得最新的专有宿主机规格表。
     * @example `ddh.c5`
     */
    "DedicatedHostType"?: string;
    /**
     * 查询的实例是否为I/O优化实例。取值范围：
     * - none：非I/O优化。
     * - optimized：I/O优化。
     * 当InstanceType为[系列I](~~55263~~)的规格时，默认值为none。
     * 当InstanceType为非[系列I](~~55263~~)的规格时，默认值为optimized。
     * @example `optimized`
     */
    "IoOptimized"?: string;
    /**
     * 实例的网络类型。取值范围：
     * - classic：实例的网络类型为经典网络（Classic）。
     * - vpc：实例的网络类型为专有网络（VPC）。
     * 默认值：vpc。
     * @example `vpc`
     */
    "InstanceNetworkType"?: string;
    /**
     * 网络带宽计费方式。取值范围：
     * - PayByBandwidth：按固定带宽计费。
     * - PayByTraffic：按带宽流量计费。
     * 默认值：PayByTraffic。
     * @example `PayByTraffic`
     */
    "InternetChargeType"?: string;
    /**
     * 公网出带宽最大值，单位为Mbit/s（Megabit per second）。取值范围：0~100。
     * 默认值：0。
     * @example `5`
     */
    "InternetMaxBandwidthOut"?: number;
    /**
     * 系统盘的云盘种类。取值范围：
     * - cloud：普通云盘。
     * - cloud_efficiency：高效云盘。
     * - cloud_ssd：SSD云盘。
     * - ephemeral_ssd：本地SSD盘。
     * - cloud_essd：ESSD云盘。
     * - cloud_auto：ESSD AutoPL云盘。
     * <props="china">
     * - cloud_essd_entry：ESSD Entry云盘。
     * </props>
     * 参数默认值说明：
     * - 当InstanceType为已停售的实例规格，且参数`IoOptimized`取值为`none`时，该参数默认值为`cloud`。
     * - 其它情况下，该参数默认值为`cloud_efficiency`。
     * > 查询系统盘价格时，必须同时指定`ImageId`。
     * @example `cloud_ssd`
     */
    "SystemDisk.Category"?: string;
    /**
     * 系统盘大小，单位为GiB。取值范围：
     * - 普通云盘：20~500。
     * - ESSD云盘：
     *   - PL0：1~2048。
     *   - PL1：20~2048。
     *   - PL2：461~2048。
     *   - PL3：1261~2048。
     * - ESSD AutoPL 云盘：1~2048。
     * - 其他云盘类型：20~2048。
     * 默认值：max{20, 参数ImageId对应的镜像大小}。
     * @example `80`
     */
    "SystemDisk.Size"?: number;
    /**
     * 系统盘类型为ESSD云盘时，区分性能等级。仅当`SystemDiskCategory=cloud_essd时`该参数有效。取值范围：
     * PL0。
     * PL1（默认）。
     * PL2。
     * PL3。
     * @example `PL1`
     */
    "SystemDisk.PerformanceLevel"?: string;
    /**
     * 为提高扩展性，建议您使用`DataDisk.N.Size`参数。
     * @example `2000`
     */
    "DataDisk.1.Size"?: number;
    /**
     * 为提高扩展性，建议您使用`DataDisk.N.Category`参数。
     * @example `cloud_ssd`
     */
    "DataDisk.1.Category"?: string;
    /**
     * 为提高扩展性，建议您使用`DataDisk.N.PerformanceLevel`参数。
     * @example `PL1`
     */
    "DataDisk.1.PerformanceLevel"?: string;
    /**
     * 为提高扩展性，建议您使用`DataDisk.N.Size`参数。
     * @example `200`
     */
    "DataDisk.2.Size"?: number;
    /**
     * 为提高扩展性，建议您使用`DataDisk.N.Category`参数。
     * @example `cloud_ssd`
     */
    "DataDisk.2.Category"?: string;
    /**
     * 为提高扩展性，建议您使用`DataDisk.N.PerformanceLevel`参数。
     * @example `PL1`
     */
    "DataDisk.2.PerformanceLevel"?: string;
    /**
     * 为提高扩展性，建议您使用`DataDisk.N.Size`参数。
     * @example `2000`
     */
    "DataDisk.3.Size"?: number;
    /**
     * 为提高扩展性，建议您使用`DataDisk.N.Category`参数。
     * @example `cloud_ssd`
     */
    "DataDisk.3.Category"?: string;
    /**
     * 为提高扩展性，建议您使用`DataDisk.N.PerformanceLevel`参数。
     * @example `PL1`
     */
    "DataDisk.3.PerformanceLevel"?: string;
    /**
     * 为提高扩展性，建议您使用`DataDisk.N.Size`参数。
     * @example `2000`
     */
    "DataDisk.4.Size"?: number;
    /**
     * 为提高扩展性，建议您使用`DataDisk.N.Category`参数。
     * @example `cloud_ssd`
     */
    "DataDisk.4.Category"?: string;
    /**
     * 为提高扩展性，建议您使用`DataDisk.N.PerformanceLevel`参数。
     * @example `PL1`
     */
    "DataDisk.4.PerformanceLevel"?: string;
    /**
     * 云服务器ECS的计费时长。取值范围：
     * <props="china">
     * - 当参数PriceUnit取值为Month时：1~9。
     * - 当参数PriceUnit取值为Year时：1~5。
     * - 当参数PriceUnit取值为Hour时：1。
     * - 当参数PriceUnit取值为Week时：1~4。
     * </props>
     * <props="intl">
     * - 当参数PriceUnit取值为Month时：1~9。
     * - 当参数PriceUnit取值为Year时：1~5。
     * - 当参数PriceUnit取值为Hour时：1。
     * </props>
     * 默认值：1。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 查询云服务器ECS不同计费周期的价格。取值范围：
     * <props="china">
     * - Month：按月计费的价格单位。
     * - Year：按年计费的价格单位。
     * - Hour（默认）：按小时计费的价格单位。
     * - Week：按周计费的价格单位。
     * </props>
     * <props="intl">
     * - Month：按月计费的价格单位。
     * - Year：按年计费的价格单位。
     * - Hour（默认）：按小时计费的价格单位。
     * </props>
     * @example `Year`
     */
    "PriceUnit"?: string;
    /**
     * 查询批量购买某种配置的云服务器ECS的价格。取值范围：1~1000。
     * 默认值：1。
     * @example `1`
     */
    "Amount"?: number;
    /**
     * 预留实例券的付款类型。取值范围：
     * - No Upfront：零预付。
     * - Partial Upfront：部分预付。
     * - All Upfront：全预付。
     * @example `All Upfront`
     */
    "OfferingType"?: string;
    /**
     * 在一个实例规格内，需要预留的实例的总数量。
     * 取值范围：1~1000。
     * @example `100`
     */
    "InstanceAmount"?: number;
    /**
     * 预留实例券的范围。取值范围：
     *
     * - Region：地域级别。
     * - Zone：可用区级别。
     * 默认值：Region。
     * @example `Zone`
     */
    "Scope"?: string;
    /**
     * 实例使用的镜像的操作系统类型。取值范围：
     * - Windows：Windows Server类型的操作系统。
     * - Linux：Linux及类Unix类型的操作系统。
     * @example `Linux`
     */
    "Platform"?: string;
    /**
     * 容量大小，单位为GiB。
     * @example `1024`
     */
    "Capacity"?: number;
    /**
     * 弹性保障的总次数。取值：Unlimited，目前仅支持在服务生效期内的无限次模式。
     * 默认值：Unlimited。
     * @example `Unlimited`
     */
    "AssuranceTimes"?: string;
    /**
     * 弹性保障内支持实例的vCPU总数量。调用API时系统会根据用户指定的InstanceType换算出需要弹性保证内支持实例的数量（向上取整）。
     * >当调用API查询弹性保障价格时，参数InstanceCoreCpuCount和InstanceAmount只能指定其中一个。
     * @example `1024`
     */
    "InstanceCpuCoreCount"?: number;
    /**
     * 互联网服务运营商，取值范围：
     * - cmcc：移动。
     * - telecom：电信。
     * - unicom：联通。
     * - multiCarrier：多线。
     * @example `cmcc`
     */
    "Isp"?: string;
    /**
     * 实例规格。目前仅支持无限次保障服务设置单个实例规格。
     * @example `ecs.g6.xlarge`
     */
    "InstanceTypeList"?: string[];
    /**
     * 按量付费实例的抢占策略。取值范围：
     * - NoSpot：正常按量付费实例。
     * - SpotWithPriceLimit：设置上限价格的抢占式实例。
     * - SpotAsPriceGo：系统自动出价，最高按量付费价格。
     * 默认值：NoSpot。
     * > 当`PriceUnit=Hour`、`Period=1`时，该参数才有效。由于`PriceUnit`默认值为`Hour`，`Period`默认值为`1`，因此您在设置该参数值时，无需设置`PriceUnit`和`Period`参数值。
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
     * 可用区ID。
     * > 抢占式实例不同可用区价格可能不同，查询抢占式实例价格时，建议传入ZoneId查询指定可用区的抢占式实例价格。
     * @example `cn-hagzhou-i`
     */
    "ZoneId"?: string;
    /**
     * 数据盘列表集合。
     */
    "DataDisk"?: {
        /**
         * 第N块数据盘的云盘种类。取值范围：
         * - cloud：普通云盘。
         * - cloud_efficiency：高效云盘。
         * - cloud_ssd：SSD云盘。
         * - ephemeral_ssd：本地SSD盘。
         * - cloud_essd：ESSD云盘。
         * - cloud_auto：ESSD AutoPL云盘。
         * <props="china">
         * - cloud_essd_entry：ESSD Entry云盘。
         * </props>
         * N的取值范围：1~16。
         * @example `cloud_ssd`
         */
        Category: string;
        /**
         * 第N块数据盘的容量大小，内存单位为GiB。取值范围：
         * - cloud：5~2000。
         * - cloud_efficiency：20~32768。
         * - cloud_ssd：20~32768。
         * - cloud_auto：1~32768。
         * <props="china">
         * - cloud_essd_entry：10~32768。
         * </props>
         * - cloud_essd：具体取值范围与`DataDisk.N.PerformanceLevel`的取值有关。
         *     - PL0：1~32768。
         *     - PL1：20~32768。
         *     - PL2：461~32768。
         *     - PL3：1261~32768。
         * - ephemeral_ssd：5~800。
         * N的取值范围：1~16。
         * @example `2000`
         */
        Size: number;
        /**
         * 第N块数据盘类型为ESSD云盘时，区分性能等级。仅当`DataDisk.N.Category=cloud_essd`时该参数有效。取值范围：
         * - PL0。
         * - PL1（默认）。
         * - PL2。
         * - PL3。
         * N的取值范围：1~16。
         * @example `PL1`
         */
        PerformanceLevel: string;
    }[];
    /**
     * 仅当参数ResourceType的值为instance时，该参数生效。
     * 专有宿主机ID。您可以通过[DescribeDedicatedHosts ](~~134242~~)查询专有宿主机ID列表。
     * @example `dh-bp67acfmxazb4p****`
     */
    "SchedulerOptions.DedicatedHostId"?: string;
}
