export interface DescribeSpotAdviceRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例规格的vCPU数量。取值请参见[实例规格族](~~25378~~)。
     * @example `2`
     */
    "Cores"?: number;
    /**
     * 实例规格的内存大小。单位：GiB。取值请参见[实例规格族](~~25378~~)。
     * @example `8.0`
     */
    "Memory"?: number;
    /**
     * 实例规格的vCPU数量的最小值。取值请参见[实例规格族](~~25378~~)。
     * @example `2`
     */
    "MinCores"?: number;
    /**
     * 实例规格的内存大小的最小值。取值请参见[实例规格族](~~25378~~)。
     * @example `8.0`
     */
    "MinMemory"?: number;
    /**
     * 可用区ID。
     * 默认值：无，即查询指定地域下的所有可用区。
     * @example `cn-hangzhou-i`
     */
    "ZoneId"?: string;
    /**
     * 实例规格族。取值请参见[实例规格族](~~25378~~)。
     * @example `ecs.c5`
     */
    "InstanceTypeFamily"?: string;
    /**
     * 实例规格族级别。取值范围：
     * - EntryLevel：入门级。
     * - EnterpriseLevel：企业级。
     * - CreditEntryLevel：积分入门级。更多信息，请参见[突发性能实例](~~59977~~)。
     * 默认值：无，即查询所有级别。
     * @example `EntryLevel`
     */
    "InstanceFamilyLevel"?: string;
    /**
     * GPU计算卡的类型。取值范围：
     * - NVIDIA P4
     * - NVIDIA T4
     * - NVIDIA P100
     * - NVIDIA V100
     * 默认值：无，即查询所有类型。更多信息，请参见[GPU计算型实例概述](~~108496~~)。
     * @example `NVIDIA T4`
     */
    "GpuSpec"?: string;
    /**
     * GPU实例对应的GPU数量。取值请参见[GPU计算型实例概述](~~108496~~)。
     * @example `2`
     */
    "GpuAmount"?: number;
    /**
     * 实例规格列表。最多可输入10个实例规格。
     * @example `ecs.c5.large`
     */
    "InstanceTypes"?: string[];
}
