interface DeleteIpv6InternetBandwidthRequest {
    /**
    * IPv6网关的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-huhehaote`
    */ "RegionId": string;
    /**
    * IPv6地址的实例ID。
    * @example `ipv6-123456xxxxxxxx`
    */ "Ipv6AddressId"?: string;
    /**
    * IPv6地址的公网带宽。
    * @example `2`
    */ "Ipv6InternetBandwidthId"?: string;
    "OwnerId"?: number;
}
export { DeleteIpv6InternetBandwidthRequest };