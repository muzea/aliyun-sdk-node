export interface ModifyLoadBalancerPayTypeRequest {
    /**
     * 负载均衡实例的地域ID。
     * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 负载均衡实例的ID。
     * @example `lb-bp1b6c719dfa08ex*****`
     */
    "LoadBalancerId": string;
    /**
     * 负载均衡实例付费模式，取值：
     * <props="china">- **PrePay**：包年包月。</props>
     * - **PayOnDemand**（默认值）：按量付费。
     * 按量计费转为包年包月计费，该参数取值只能为**PrePay**，且该实例之前的计费模式必须为**PayOnDemand**。
     * @example `PrePay`
     */
    "PayType"?: string;
    /**
     * 计费周期。
     * 取值：**year**或**month** 。
     * >只有当**PayType**的参数取值为**PrePay**时有效，即仅对按量计费实例有效。
     * @example `month`
     */
    "PricingCycle"?: string;
    /**
     * 计费时长。
     * * 如果**PricingCycle**为**month**，取值**1**~**9**。
     * * 如果**PricingCycle**为**year**，取值**1**~**5**。
     * >只有当**PayType**的参数取值为**PrePay**时有效，即仅对按量计费实例有效。
     * @example `1`
     */
    "Duration"?: number;
    /**
     * 是否自动付费。取值：
     * - **true**：自动付费。
     * - **false（默认值）**：不自动付费。
     * >只有当**PayType**的参数取值为**PrePay**时有效，即仅对按量计费实例有效。
     * @example `false`
     */
    "AutoPay"?: boolean;
}
