interface ModifyIpv6GatewaySpecRequest {
    /**
    * IPv6网关的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-huhehaote`
    */ "RegionId": string;
    /**
    * IPv6网关的ID。
    * @example `ipv6gw-123456xxxxxxxx`
    */ "Ipv6GatewayId": string;
    /**
    * IPv6网关的规格，取值：
    * - **Small**（默认值）：免费版。
    * - **Middle**：企业版。
    * - **Large**：企业增强版。
    * @example `Middle`
    */ "Spec": string;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `123456`
    */ "ClientToken"?: string;
    "OwnerId"?: number;
}
export { ModifyIpv6GatewaySpecRequest };