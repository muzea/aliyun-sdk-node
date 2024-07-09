export interface DescribeDesktopTypesRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 规格ID。
     * > 当`InstanceTypeFamily`和`DesktopTypeId`参数的取值均为空时，将查询云电脑所有规格的信息。
     * @example `ecd.graphics.xlarge`
     */
    "DesktopTypeId"?: string;
    /**
     * 规格族名称。
     * > 当`InstanceTypeFamily`和`DesktopTypeId`参数的取值均为空时，将查询云电脑所有规格的信息。
     * @example `ecd.graphics`
     */
    "InstanceTypeFamily"?: string;
    /**
     * vCPU数量。
     * @example `2`
     */
    "CpuCount"?: number;
    /**
     * 内存大小。单位为MiB。
     * @example `4096`
     */
    "MemorySize"?: number;
    /**
     * GPU核数。
     * @example `1`
     */
    "GpuCount"?: number;
    /**
     * 变配时传入需要变配的云电脑ID，返回值会增加规格与云电脑之间是否兼容的信息。
     * @example `ecd-gx2x1dhsmucyy****`
     */
    "DesktopIdForModify"?: string;
    /**
     * 订单类型。
     * @example `DOWNGRADE`
     */
    "OrderType"?: string;
    /**
     * 规格适用范围。默认值：`Public`。
     * @example `Public`
     */
    "AppliedScope"?: string;
    /**
     * 变配时传入需要变配的云电脑池ID，返回值会增加规格与云电脑池之间是否兼容的信息。
     * @example `dg-abcdefg****`
     */
    "DesktopGroupIdForModify"?: string;
}
