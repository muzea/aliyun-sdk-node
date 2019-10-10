interface ModifyLoadBalancerInternetSpecRequest {
    /**
    * 负载均衡实例的地域。
    * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 负载均衡实例的ID。
    * @example `lb-bp1b6c719dfa08exfuca5`
    */ "LoadBalancerId": string;
    "OwnerId"?: number;
    /**
    * 公网类型实例的付费方式。取值：
    * - paybybandwidth：按带宽计费。
    * - paybytraffic：按流量计费 。
    * > 如果不指定该参数，则表示保持原有的计费方式。
    * @example `paybytraffic`
    */ "InternetChargeType"?: string;
    /**
    * 按固定带宽计费方式的公网类型实例的带宽峰值。
    * 实例中的监听共享该带宽，详情参见[共享实例带宽](~~57846~~)。
    * 取值：1~5000 Mbps（各地域的带宽峰值会有不同）。
    * >按流量计费的实例不需要指定该参数（即**InternetChargeType**为**paybytraffic**）。
    * @example `10`
    */ "Bandwidth"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
    /**
    * 是否是自动支付预付费公网实例的账单。
    * 取值：**true|false（默认）**。
    * @example `false`
    */ "AutoPay"?: boolean;
    "Ratio"?: number;
}
export { ModifyLoadBalancerInternetSpecRequest };