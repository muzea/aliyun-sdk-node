export interface ModifyLoadBalancerInternetSpecRequest {
    /**
     * 传统型负载均衡实例的地域ID。
     * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 负载均衡实例的ID。
     * @example `lb-bp1b6c719dfa08ex******`
     */
    "LoadBalancerId": string;
    /**
     * 公网类型实例的付费方式。取值：
     * - **paybybandwidth**：按带宽计费。
     * - **paybytraffic**：按流量计费 。
     * @example `paybytraffic`
     */
    "InternetChargeType"?: string;
    /**
     * 按固定带宽计费方式的公网类型实例的带宽峰值。单位：Mbps。
     * 取值范围：**1**~**5000**（各地域的带宽峰值会有不同）。
     * >按流量计费（即**InternetChargeType**取值为**paybytraffic**）的实例不需要指定该参数。
     * @example `10`
     */
    "Bandwidth"?: number;
    /**
     * 是否是自动支付预付费公网实例的账单。取值：
     * - **true**（默认值）：自动支付订单。
     * - **false**：在订单中心进行支付。
     * @example `false`
     */
    "AutoPay"?: boolean;
}
