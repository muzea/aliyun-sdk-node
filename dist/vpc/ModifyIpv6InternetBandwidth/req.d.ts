interface ModifyIpv6InternetBandwidthRequest {
    /**
    * IPv6网关的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-huhehaote`
    */ "RegionId": string;
    /**
    * IPv6地址的公网带宽，单位：Mbps，取值范围：**1-5000**。
    * - 当**InternetChargeType**为**PayByBandwidth**，IPv6地址的公网带宽为1-5000。
    * - 当**InternetChargeType**为**PayByTraffic**，IPv6地址的公网带宽范围同时受到IPv6网关规格的制约。
    *     - **Small**（默认免费版），公网带宽范围为1-500。
    *     - **Medium**（企业版），公网带宽范围为1-1000。
    *     - **Large**（企业增强版），公网带宽范围为1-2000。
    * @example `4`
    */ "Bandwidth": number;
    /**
    * IPv6地址的实例ID。
    * @example `ipv5-1233456xxxxxxxx`
    */ "Ipv6AddressId"?: string;
    /**
    * @example `123`
    */ "Ipv6InternetBandwidthId"?: string;
    /**
    * 请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `123456`
    */ "ClientToken"?: string;
    "OwnerId"?: number;
}
export { ModifyIpv6InternetBandwidthRequest };