export interface DescribeRecommendInstanceTypeRequest {
    /**
     * ECS实例vCPU核数。
     * >同时指定`Cores`参数和`Memory`参数会匹配所有满足vCPU核数和内存大小的实例规格。
     * @example `2`
     */
    "Cores"?: number;
    /**
     * ECS实例内存大小，单位为GiB。
     * >同时指定`Cores`参数和`Memory`参数会匹配所有满足vCPU核数和内存大小的实例规格。
     * @example `8.0`
     */
    "Memory"?: number;
    /**
     * 实例规格族级别。取值范围：
     * - EntryLevel：入门级。
     * - EnterpriseLevel：企业级。
     * - CreditEntryLevel：积分入门级。详情请参见[突发性能实例](~~59977~~)。
     * @example `EnterpriseLevel`
     */
    "InstanceFamilyLevel"?: string;
    /**
     * 指定的实例规格。更多详情，请参见[实例规格族](~~25378~~)，也可以调用[DescribeInstanceTypes](~~25620~~)接口获得最新的规格表。
     * > 如果您指定了`InstanceType`，则无法指定`Cores`或者`Memory`。
     * @example `ecs.hfg6.large`
     */
    "InstanceType"?: string;
    /**
     * ECS实例的网络类型。取值范围：
     * - classic：经典网络
     * - vpc：专有网络VPC
     * 默认值：vpc
     * @example `vpc`
     */
    "NetworkType": string;
    /**
     * ECS实例的计费方式。更多详情，请参见[计费概述](~~25398~~)。取值范围：
     * - PrePaid：包年包月
     * - PostPaid：按量付费
     * 默认值：PostPaid
     * @example `PostPaid`
     */
    "InstanceChargeType"?: string;
    /**
     * 抢占式实例的竞价策略。取值范围：
     * - NoSpot：正常按量付费实例。
     * - SpotWithPriceLimit：设置上限价格的抢占式实例。
     * - SpotAsPriceGo：系统自动出价，最高按量付费价格。
     * > 使用`SpotStrategy`时，`InstanceChargerType`必须设置为`PostPaid`。
     * 默认值：NoSpot
     * @example `NoSpot`
     */
    "SpotStrategy"?: string;
    /**
     * 是否为I/O优化实例。实例规格只支持非I/O优化时，不能设置IoOptimized参数。取值范围：
     * - optimized：I/O优化
     * - none：非IO优化
     * 默认值：optimized
     * 如果您设置的是已停售实例规格。默认值：none
     * @example `optimized`
     */
    "IoOptimized"?: string;
    /**
     * 优先推荐策略。取值范围：
     * - InventoryFirst：库存优先。
     * - PriceFirst：价格优先，按每小时vCPU单价从低到高排序。
     * - NewProductFirst：最新产品优先。
     * 默认值：InventoryFirst
     * @example `PriceFirst`
     */
    "PriorityStrategy"?: string;
    /**
     * 按量付费实例或者抢占式实例可接受的每小时最高价格。
     * >设置抢占式实例的最高单价时，`SpotStrategy`必须设置为`SpotWithPriceLimit`。
     * @example `10.0`
     */
    "MaxPrice"?: number;
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID。您可以调用[DescribeZones](~~25610~~)查看最新的阿里云可用区列表。
     * 建议同时ZoneMatchMode取值为Include（默认值），优先推荐ZoneId指定的可用区中的实例规格，并列出同地域下其他可用区中的实例规格。
     * @example `cn-hangzhou-f`
     */
    "ZoneId"?: string;
    /**
     * 系统盘的云盘种类。取值范围：
     * - cloud_efficiency：高效云盘
     * - cloud_ssd：SSD云盘
     * - cloud_essd：ESSD云盘
     * - cloud：普通云盘
     * 非I/O优化实例的默认值：cloud
     * I/O优化实例的默认值：cloud_efficiency
     * @example `cloud_ssd`
     */
    "SystemDiskCategory"?: string;
    /**
     * 是否仅推荐ZoneId指定的可用区中的实例规格。取值范围：
     * - Strict：仅推荐ZoneId指定的可用区中的实例规格。
     * - Include：推荐同地域下其他可用区中的实例规格。
     * 当指定`ZoneId`时，该参数的默认值为Strict，表示仅推荐ZoneId指定的可用区中的实例规格。
     * @example `Strict`
     */
    "ZoneMatchMode"?: string;
    /**
     * 在哪种场景下推荐实例规格。取值范围：
     * - UPGRADE：升级或降低实例规格。
     * - CREATE：创建实例。
     * 默认值：CREATE
     * @example `CREATE`
     */
    "Scene"?: string;
    /**
     * 设置备选的实例规格族集合，备选的实例规格会从该参数设置的实例规格族中选择。最多可输入10个实例规格族。
     * @example `ecs.hfg6`
     */
    "InstanceTypeFamily"?: string[];
}
