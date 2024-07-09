export interface DescribePatternTypesRequest {
    /**
     * 所属地域的ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 交换机的ID列表。
     */
    "VSwitchId"?: string[];
    /**
     * 后付费实例的抢占策略。取值范围：
     *
     * - NoSpot：普通的按量付费实例。
     * - SpotWithPriceLimit：设置上限价格的抢占式实例。
     * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
     * 默认值：NoSpot。
     * @example `NoSpot`
     */
    "SpotStrategy"?: string;
    /**
     * 实例规格的vCPU内核数目。
     * @example `2`
     */
    "Cores"?: number;
    /**
     * 实例规格的内存大小，单位为GiB。
     * @example `4`
     */
    "Memory"?: number;
    /**
     * 按量付费实例或者抢占式实例可接受的每小时最高价格。
     * @example `2`
     */
    "MaxPrice"?: number;
    /**
     * 实例规格族级别。取值范围：
     * - EntryLevel：入门级。
     * - EnterpriseLevel：企业级。
     * - CreditEntryLevel：积分入门级。详情请参见[突发性能实例](~~59977~~)。
     * @example `EnterpriseLevel`
     */
    "InstanceFamilyLevel"?: string;
    /**
     * 需要排除的实例规格。通过使用通配符（*）可以排除单个规格或者整个规格族。例如：
     * - ecs.c6.large：表示排除ecs.c6.large实例规格。
     * - ecs.c6.*：表示排除整个c6规格族的实例规格。
     * >如果需要排除多个实例规格，请使用分隔符（/）隔开单个实例规格。例如`ecs.n1.small/ecs.n1.*​/*7*`。
     */
    "ExcludedInstanceType"?: string[];
    /**
     * 实例规格所属的架构类型。取值范围：
     * - X86：X86计算。
     * - Heterogeneous：异构计算，例如GPU或FPGA等。
     * - BareMental：弹性裸金属服务器。
     * - Arm：Arm计算。
     * - SuperComputeCluster：超级计算集群。
     * 默认值：包含所有架构类型。
     */
    "Architecture"?: string[];
    /**
     * 是否为性能突发实例规格。取值范围：
     * - Exclude：不包含性能突发实例规格。
     * - Include：包含性能突发实例规格。
     * - Required：只包含性能突发实例规格。
     * 默认值：Include。
     * @example `Include`
     */
    "BurstablePerformance"?: string;
    /**
     * 实例规格的vCPU内核数目，可以指定多个。
     */
    "CoresList"?: number[];
    /**
     * 实例规格的内存大小，单位为GiB，可以指定多个。
     */
    "MemoryList"?: number[];
    /**
     * 渠道ID，内部保留参数。
     * @example `79425074`
     */
    "ChannelId"?: number;
    /**
     * 指定查询的实例规格族。N 表示可以设置多个实例规格族，N 的取值范围：1~10。
     */
    "InstanceTypeFamilies"?: string[];
    /**
     * 实例规格的最小vCPU内核数目。
     * @example `2`
     */
    "MinimumCpuCoreCount"?: number;
    /**
     * 实例规格的最大vCPU内核数目。
     * @example `4`
     */
    "MaximumCpuCoreCount"?: number;
    /**
     * GPU 类型。
     */
    "GpuSpecs"?: string[];
    /**
     * 实例规格分类。取值范围：
     * - General-purpose： 通用型。
     * - Compute-optimized：计算型。
     * - Memory-optimized：内存型。
     * - Big data：大数据型。
     * - Local SSDs ：本地 SSD 型。
     * - High Clock Speed ：高主频型。
     * - Enhanced ：增强型。
     * - Shared：共享型。
     * - Compute-optimized with GPU ：GPU 计算型。
     * - Visual Compute-optimized ：视觉计算型。
     * - Heterogeneous Service ：异构服务型。
     * - Compute-optimized with FPGA ：FPGA 计算型。
     * - Compute-optimized with NPU ：NPU 计算型。
     * - ECS Bare Metal ：弹性裸金属服务器。
     * - Super Computing Cluster：超级计算集群。
     * - High Performance Compute：高性能计算型。
     */
    "InstanceCategories"?: string[];
    /**
     * 实例规格的CPU架构。取值范围：
     * >N表示可以设置多个CPU架构，N的取值范围：1~2。
     * - X86。
     * - ARM。
     */
    "CpuArchitectures"?: string[];
    /**
     * 实例的处理器型号。N表示可以设置多个处理器型号，N的取值范围：1~10。
     */
    "PhysicalProcessorModels"?: string[];
    /**
     * 实例最小支持挂载的弹性网卡上限。
     * @example `2`
     */
    "MinimumEniQuantity"?: number;
    /**
     * 实例最小单块弹性网卡的IPv4地址上限。
     * @example `2`
     */
    "MinimumEniPrivateIpAddressQuantity"?: number;
    /**
     * 实例最小单块弹性网卡的IPv6地址上限。
     * @example `1`
     */
    "MinimumEniIpv6AddressQuantity"?: number;
    /**
     * 实例最小突发性能实例t5、t6的初始vCPU积分值。
     * @example `12`
     */
    "MinimumInitialCredit"?: number;
    /**
     * 实例最小突发性能实例t5、t6的基准vCPU计算性能（所有vCPU之和）。
     * @example `12`
     */
    "MinimumBaselineCredit"?: number;
    /**
     * 实例最小内存。单位：GiB。
     * @example `4`
     */
    "MinimumMemorySize"?: number;
    /**
     * 实例最大内存。单位：GiB。
     * @example `4`
     */
    "MaximumMemorySize"?: number;
    /**
     * 实例最小 GPU 数目。取值范围：正整数。
     * @example `2`
     */
    "MinimumGpuAmount"?: number;
    /**
     * 实例最大 GPU 数目。取值范围：正整数。
     * @example `2`
     */
    "MaximumGpuAmount"?: number;
}
