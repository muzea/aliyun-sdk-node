interface AllocateIpv6InternetBandwidthRequest {
    /**
    * IPv6网关的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-huhehaote`
    */ "RegionId": string;
    /**
    * IPv6网关的ID。
    * @example `ipv5gw-123456xxxxxxxx`
    */ "Ipv6GatewayId": string;
    /**
    * IPv6地址的实例ID。
    * @example `ipv6-123456xxxxxxxx`
    */ "Ipv6AddressId": string;
    /**
    * IPv6地址的公网带宽，单位：Mbps，取值范围：**1-5000**。
    * - 当**InternetChargeType**为**PayByBandwidth**，IPv6地址的公网带宽为1-5000。
    * - 当**InternetChargeType**为**PayByTraffic**，IPv6地址的公网带宽范围同时受到IPv6网关规格的制约。
    *     - Small（默认免费版），公网带宽范围为1-500。
    *     - Medium（企业版），公网带宽范围为1-1000。
    *     - Large（企业增强版），公网带宽范围为1-2000。
    * @example `2`
    */ "Bandwidth": number;
    /**
    * IPv6公网带宽的计费方式，取值：
    * - **PayByTraffic**：按使用流量计费。
    * - **PayByBandwidth**（默认值）：按带宽计费。
    * @example `PayByTraffic`
    */ "InternetChargeType"?: string;
    /**
    * 请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `123456`
    */ "ClientToken"?: string;
    "OwnerId"?: number;
}
export { AllocateIpv6InternetBandwidthRequest };