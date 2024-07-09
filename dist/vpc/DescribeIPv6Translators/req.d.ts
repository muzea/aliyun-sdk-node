export interface DescribeIPv6TranslatorsRequest {
    /**
     * IPv6转换服务实例的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * IPv6转换服务实例的ID。
     * @example `ipv6trans-bp1858ys****`
     */
    "Ipv6TranslatorId"?: string;
    /**
     * IPv6转换服务实例的名称。
     * @example `ipv6_1`
     */
    "Name"?: string;
    /**
     * IPv6转换服务实例的规格，取值：**small**（小型）。
     * @example `small`
     */
    "Spec"?: string;
    /**
     * IPv6转换服务实例的状态，取值：
     * - **init**：初始化。
     * - **provisioning**：准备中。
     * - **active**：可用。
     * - **updating**：更新中。
     * - **upgrading**：升级中。
     * - **deleting**：删除中。
     * - **deleted**：已删除。
     * @example `active`
     */
    "Status"?: string;
    /**
     *  为IPv6转换服务实例分配的IPv6地址。
     * @example `2400:3200:1600::XXXX`
     */
    "AllocateIpv6Addr"?: string;
    /**
     *  为IPv6转换服务实例分配的IPv4地址。
     * @example `47.99.XX.XX`
     */
    "AllocateIpv4Addr"?: string;
    /**
     * IPv6转换服务实例的付费类型。取值：
     * - **Prepay**：包年包月。
     * - **Postpay**：按量计费。
     * @example `Prepay`
     */
    "PayType"?: string;
    /**
     *  列表的页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * IPv6转换服务实例的业务状态，取值：
     * - **Normal**：正常。
     * - **FinancialLocked**：被锁定。
     * @example `Normal`
     */
    "BusinessStatus"?: string;
}
