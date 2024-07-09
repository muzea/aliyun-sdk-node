export interface ModifyLoadBalancerInstanceChargeTypeRequest {
    /**
     * 传统型负载均衡实例的地域ID。
     * 您可以通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 传统型负载均衡实例ID。
     * @example `lb-bp1b3jus5hpenznuu****`
     */
    "LoadBalancerId": string;
    /**
     * 变更后的公网计费方式。
     * 仅取值**paybytraffic**：按使用流量计费。
     * > - 当**InstanceChargeType**参数的值为**PayByCLCU**时，只支持按使用流量计费。
     * > - 如果公网计费方式从按固定带宽变更为按使用流量，则所有变配会在次日00:00:00生效。
     * @example `paybytraffic`
     */
    "InternetChargeType"?: string;
    /**
     * 变更后的实例计费方式。
     * 仅取值**PayByCLCU**：按使用量计费。
     * @example `PayByCLCU`
     */
    "InstanceChargeType": string;
    /**
     * 传统型负载均衡实例的规格。
     * 您无需设置该参数。目前仅支持按规格计费转按使用量计费，不支持按使用量计费转按规格计费。
     * @example `slb.s1.small`
     */
    "LoadBalancerSpec"?: string;
    /**
     * 按带宽计费的公网型实例的带宽峰值。
     * 您无需设置该参数，按使用量计费实例的公网计费方式仅支持按使用流量计费。
     * @example `5`
     */
    "Bandwidth"?: number;
}
