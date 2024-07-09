export interface DescribeBandwidthPackageResponse {
    /**
     * 跨地域加速包的互通区域B。仅返回为**Global**（全球）。
     * 仅国际站支持返回该参数。
     * @example `Global`
     */
    CbnGeographicRegionIdB: string;
    /**
     * 跨地域加速包的互通区域A。仅返回为**China-mainland**（中国内地）。
     * 仅国际站支持返回该参数。
     * @example `China-mainland`
     */
    CbnGeographicRegionIdA: string;
    /**
     * 带宽包的描述。
     * @example `testDescription`
     */
    Description: string;
    /**
     * 请求ID。
     * @example `4B6DBBB0-2D01-4C6A-A384-4129266E6B78`
     */
    RequestId: string;
    /**
     * 带宽包创建时间的时间戳。
     * @example `1578966918000`
     */
    CreateTime: string;
    /**
     * 带宽包的名称。
     * @example `testName`
     */
    Name: string;
    /**
     * 带宽类型。
     * - **Basic**：标准加速带宽。
     * - **Enhanced**：增强加速带宽。
     * - **Advanced**：精品加速带宽。
     * @example `Basic`
     */
    BandwidthType: string;
    /**
     * 带宽包的类型。
     * - **Basic**：基础带宽包。
     * - **CrossDomain**：跨地域加速包。
     * 中国站仅支持返回**Basic**。
     * @example `Basic`
     */
    Type: string;
    /**
     * 带宽包绑定的全球加速实例ID。
     */
    Accelerators: string[];
    /**
     * 带宽包的状态。
     * - **init**：初始化。
     * - **active**：可用。
     * - **binded**：已绑定。
     * - **binding**：绑定中。
     * - **unbinding**：解绑中。
     * - **updating**：更新中。
     * - **finacialLocked**：欠费锁定。
     * - **locked**：已锁定。
     * @example `active`
     */
    State: string;
    /**
     * 付费类型。
     * - **PREPAY**（默认值）：预付费，即包年包月。
     * - **POSTPAY**：后付费，即按量付费。
     * @example `PREPAY`
     */
    ChargeType: string;
    /**
     * 带宽包的带宽值，单位为Mbps。
     * @example `2`
     */
    Bandwidth: number;
    /**
     * 带宽包过期时间的时间戳。
     * @example `1578966918000`
     */
    ExpiredTime: string;
    /**
     * 带宽包ID。
     * @example `gbwp-bp1sgzldyj6b4q7cx****`
     */
    BandwidthPackageId: string;
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 后付费计费方式，取值：
     * - **PayByTraffic**：流量计费。
     * - **PayBY95**：95计费。
     * @example `PayByTraffic`
     */
    BillingType: string;
    /**
     * 95计费保底比例。取值范围：**30**~**100**。
     * @example `30`
     */
    Ratio: number;
    /**
     * 资源组ID。
     * @example `rg-acfnvueepcihjiq`
     */
    ResourceGroupId: string;
    /**
     * 资源标签。
     */
    Tags: {
        /**
         * 标签键
         * @example `tag-key`
         */
        Key: string;
        /**
         * 标签值。
         * @example `tag-value`
         */
        Value: string;
    }[];
}
