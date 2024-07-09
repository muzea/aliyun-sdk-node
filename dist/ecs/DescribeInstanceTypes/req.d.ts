export interface DescribeInstanceTypesRequest {
    /**
     * 实例规格所属的实例规格族。取值请参见[DescribeInstanceTypeFamilies](~~25621~~)。
     * 关于实例规格族的更多信息，请参见[实例规格族](~~25378~~)。
     * @example `ecs.g6`
     */
    "InstanceTypeFamily"?: string;
    /**
     * 指定的实例规格。N的取值范围：1~10。当该参数不传值时，默认查询所有实例规格的信息。
     * @example `ecs.g6.large`
     */
    "InstanceTypes"?: string[];
    /**
     * 查询实例规格时，期望最小vCPU内核的数目。取值范围：正整数。
     * >查询到实例规格的vCPU内核数目小于设定值时，系统不会返回其实例规格的信息。
     * @example `2`
     */
    "MinimumCpuCoreCount"?: number;
    /**
     * 查询实例规格时，期望最大vCPU内核的数目。取值范围：正整数。
     * >查询到实例规格的vCPU内核数目大于设定值时，系统不会返回其实例规格的信息。
     * @example `10`
     */
    "MaximumCpuCoreCount"?: number;
    /**
     * 查询实例规格时，期望最小内存。单位：GiB。
     * >查询到实例规格的内存大小小于设定值时，系统不会返回其实例规格的信息。
     * @example `20`
     */
    "MinimumMemorySize"?: number;
    /**
     * 查询实例规格时，期望最大内存。单位：GiB。
     * >查询到实例规格的内存大小大于设定值时，系统不会返回其实例规格的信息。
     * @example `60`
     */
    "MaximumMemorySize"?: number;
    /**
     * 查询实例规格时，期望最小GPU数目。取值范围：正整数。
     * >查询到实例规格的GPU数目小于设定值时，系统不会返回其实例规格的信息。
     * @example `3`
     */
    "MinimumGPUAmount"?: number;
    /**
     * 查询实例规格时，期望最大GPU数目。取值范围：正整数。
     * >查询到实例规格的GPU数目大于设定值时，系统不会返回其实例规格的信息。
     * @example `10`
     */
    "MaximumGPUAmount"?: number;
    /**
     * GPU类型。
     * >支持模糊匹配，如某规格的GPU类型为NVIDIA V100，输入NVIDIA也可查询到该规格信息。
     * @example `NVIDIA V100`
     */
    "GPUSpec"?: string;
    /**
     * 实例规格分类。取值范围：
     * - General-purpose： 通用型。
     * - Compute-optimized：计算型。
     * - Memory-optimized：内存型。
     * - Big data：大数据型。
     * - Local SSDs ：本地SSD型。
     * - High Clock Speed ：高主频型。
     * - Enhanced ：增强型。
     * - Shared：共享型。
     * - Compute-optimized with GPU ：GPU计算型。
     * - Visual Compute-optimized ：视觉计算型。
     * - Heterogeneous Service ：异构服务型。
     * - Compute-optimized with FPGA ：FPGA计算型。
     * - Compute-optimized with NPU ：NPU计算型。
     * - ECS Bare Metal ：弹性裸金属服务器。
     * - Super Computing Cluster：超级计算集群。
     * - High Performance Compute：高性能计算型。
     * @example `Big data`
     */
    "InstanceCategory"?: string;
    /**
     * CPU架构。取值范围：
     * - X86。
     * - ARM。
     * @example `X86`
     */
    "CpuArchitecture"?: string;
    /**
     * 查询实例规格时，期望最小主频。
     * >查询到实例规格的主频小于设定值时，系统不会返回其实例规格的信息。
     * @example `2.5`
     */
    "MinimumCpuSpeedFrequency"?: number;
    /**
     * 查询实例规格时，期望最大主频。
     * >查询到实例规格的主频大于设定值时，系统不会返回其实例规格的信息。
     * @example `3.2`
     */
    "MaximumCpuSpeedFrequency"?: number;
    /**
     * 查询实例规格时，期望最小睿频。
     * >查询到实例规格的睿频小于设定值时，系统不会返回其实例规格的信息。
     * @example `3.2`
     */
    "MinimumCpuTurboFrequency"?: number;
    /**
     * 查询实例规格时，期望最大睿频。
     * >查询到实例规格的睿频大于设定值时，系统不会返回其实例规格的信息。
     * @example `4.1`
     */
    "MaximumCpuTurboFrequency"?: number;
    /**
     * 处理器型号。
     * >支持模糊匹配，如某规格的处理器型号为Intel Xeon(Ice Lake) Platinum 8369B，输入Intel也可查询到该规格信息。
     * @example `Intel Xeon(Ice Lake) Platinum 8369B`
     */
    "PhysicalProcessorModel"?: string;
    /**
     * 实例规格族级别。取值范围：
     * - EntryLevel：入门级（共享型）。
     * - EnterpriseLevel：企业级。
     * - CreditEntryLevel：积分入门级。
     * @example `EntryLevel`
     */
    "InstanceFamilyLevel"?: string;
    /**
     * 查询实例规格时，期望最小内网入方向网络收发包能力。单位：pps。
     * >查询到实例规格的内网入方向网络收发包能力小于设定值时，系统不会返回其实例规格的信息。
     * @example `15`
     */
    "MinimumInstancePpsRx"?: number;
    /**
     * 查询实例规格时，期望最小内网出方向网络收发包能力。单位：pps。
     * >查询到实例规格的内网出方向网络收发包能力小于设定值时，系统不会返回其实例规格的信息。
     * @example `15`
     */
    "MinimumInstancePpsTx"?: number;
    /**
     * 查询实例规格时，期望最小内网入方向带宽限制，单位：kbit/s。
     * >查询到实例规格的内网入方向带宽限制小于设定值时，系统不会返回其实例规格的信息。
     * @example `12288`
     */
    "MinimumInstanceBandwidthRx"?: number;
    /**
     * 查询实例规格时，期望最小内网出方向带宽限制，单位：kbit/s。
     * >查询到实例规格的内网出方向带宽限制小于设定值时，系统不会返回其实例规格的信息。
     * @example `12288`
     */
    "MinimumInstanceBandwidthTx"?: number;
    /**
     * 查询实例规格时，期望最小主网卡默认队列数。
     * >查询到实例规格的主网卡默认队列数小于设定值时，系统不会返回其实例规格的信息。
     * @example `8`
     */
    "MinimumPrimaryEniQueueNumber"?: number;
    /**
     * 查询实例规格时，期望最小辅助弹性网卡默认队列数。
     * >查询到实例规格的辅助弹性网卡默认队列数小于设定值时，系统不会返回其实例规格的信息。
     * @example `4`
     */
    "MinimumSecondaryEniQueueNumber"?: number;
    /**
     * 查询实例规格时，期望最小支持挂载的弹性网卡上限。
     * >查询到实例规格的支持挂载的弹性网卡上限小于设定值时，系统不会返回其实例规格的信息。
     * @example `4`
     */
    "MinimumEniQuantity"?: number;
    /**
     * 查询实例规格时，期望最小单块弹性RDMA网卡（ERI）的QP（QueuePair）队列数上限。
     * >查询到实例规格的单块弹性RDMA网卡（ERI）的QP（QueuePair）队列数上限小于设定值时，系统不会返回其实例规格的信息。
     * @example `8`
     */
    "MinimumQueuePairNumber"?: number;
    /**
     * 查询实例规格时，期望最小弹性RDMA网卡（ERI）数量。
     * >查询到实例规格的弹性RDMA网卡（ERI）数量小于设定值时，系统不会返回其实例规格的信息。
     * @example `0`
     */
    "MinimumEriQuantity"?: number;
    /**
     * 查询实例规格时，期望最小单块弹性网卡的IPv4地址上限。
     * >查询到实例规格的单块弹性网卡的IPv4地址上限小于设定值时，系统不会返回其实例规格的信息。
     * @example `2`
     */
    "MinimumEniPrivateIpAddressQuantity"?: number;
    /**
     * 查询实例规格时，期望最小单块弹性网卡的IPv6地址上限。
     * >查询到实例规格的单块弹性网卡的IPv6地址上限小于设定值时，系统不会返回其实例规格的信息。
     * @example `2`
     */
    "MinimumEniIpv6AddressQuantity"?: number;
    /**
     * 查询实例规格时，期望最小实例挂载的本地盘的数量。
     * >查询到实例规格的实例挂载的本地盘的数量小于设定值时，系统不会返回其实例规格的信息。
     * @example `4`
     */
    "MinimumLocalStorageAmount"?: number;
    /**
     * 实例挂载的本地盘的单盘容量。单位：GiB
     * @example `40`
     */
    "MinimumLocalStorageCapacity"?: number;
    /**
     * 查询实例规格时，期望最小支持挂载的云盘数量上限。
     * >查询到实例规格的支持挂载的云盘数量上限小于设定值时，系统不会返回其实例规格的信息。
     * @example `4`
     */
    "MinimumDiskQuantity"?: number;
    /**
     * 本地盘类型。更多信息，请参见[本地盘](~~63138#section_n2w_8yc_5u1~~)。取值范围：
     * - local\_hdd\_pro：实例规格族d1ne和d1搭载的SATA HDD本地盘。
     * - local\_ssd\_pro：实例规格族i2、i2g、i1、ga1和gn5等搭载的NVMe SSD本地盘。
     * @example `local_ssd_pro`
     */
    "LocalStorageCategory"?: string;
    /**
     * 实例规格所挂载的云盘是否支持NVMe。取值范围：
     * - required：支持。表示云盘以NVMe的方式挂载。
     * - unsupported：不支持。表示云盘不以NVMe的方式挂载。
     * @example `required`
     */
    "NvmeSupport"?: string;
    /**
     * 查询实例规格时，期望最小突发性能实例t5、t6的基准vCPU计算性能（所有vCPU之和）。
     * >查询到实例规格的突发性能实例t5、t6的基准vCPU计算性能（所有vCPU之和）小于设定值时，系统不会返回其实例规格的信息。
     * @example `12`
     */
    "MinimumBaselineCredit"?: number;
    /**
     * 查询实例规格时，期望最小突发性能实例t5、t6的初始vCPU积分值。
     * >查询到实例规格的突发性能实例t5、t6的初始vCPU积分值小于设定值时，系统不会返回其实例规格的信息。
     * @example `12`
     */
    "MinimumInitialCredit"?: number;
    /**
     * 指定查询的实例规格族。N表示可以设置多个实例规格族，N的取值范围：1~10。
     */
    "InstanceTypeFamilies"?: string[];
    /**
     * 指定查询的GPU类型。N表示可以设置多个GPU类型，N的取值范围：1~10。
     */
    "GpuSpecs"?: string[];
    /**
     * 指定查询的实例规格分类。取值范围：
     * >N表示可以设置多个实例规格分类，N的取值范围：1~10。
     * - General-purpose： 通用型。
     * - Compute-optimized：计算型。
     * - Memory-optimized：内存型。
     * - Big data：大数据型。
     * - Local SSDs ：本地SSD型。
     * - High Clock Speed ：高主频型。
     * - Enhanced ：增强型。
     * - Shared：共享型。
     * - Compute-optimized with GPU ：GPU计算型。
     * - Visual Compute-optimized ：视觉计算型。
     * - Heterogeneous Service ：异构服务型。
     * - Compute-optimized with FPGA ：FPGA计算型。
     * - Compute-optimized with NPU ：NPU计算型。
     * - ECS Bare Metal ：弹性裸金属服务器。
     * - Super Computing Cluster：超级计算集群。
     * - High Performance Compute：高性能计算型。
     */
    "InstanceCategories"?: string[];
    /**
     * 指定查询的CPU架构。取值范围：
     * >N表示可以设置多个CPU架构，N的取值范围：1~2。
     * - X86。
     * - ARM。
     */
    "CpuArchitectures"?: string[];
    /**
     * 指定查询的处理器型号。N表示可以设置多个处理器型号，N的取值范围：1~10。
     */
    "PhysicalProcessorModels"?: string[];
    /**
     * 指定的本地盘类型。N的取值范围：1~2。更多信息，请参见[本地盘](~~63138#section_n2w_8yc_5u1~~)。取值范围：
     * - local\_hdd\_pro：实例规格族d1ne和d1搭载的SATA HDD本地盘。
     * - local\_ssd\_pro：实例规格族i2、i2g、i1、ga1和gn5等搭载的NVMe SSD本地盘。
     */
    "LocalStorageCategories"?: string[];
    /**
     * 分页查询时每页的最大条目数。最大值：1600
     * 默认值：1600
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token）。取值为上一次调用该接口返回的NextToken参数值，初次调用接口时无需设置该参数。
     * @example `e71d8a535bd9cc11`
     */
    "NextToken"?: string;
}
