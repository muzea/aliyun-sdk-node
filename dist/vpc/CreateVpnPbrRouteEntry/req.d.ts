interface CreateVpnPbrRouteEntryRequest {
    /**
    * VPN策略路由所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * VPN网关的ID。
    * @example `vpn-bp1a3kqjiiq9legfx****`
    */ "VpnGatewayId": string;
    /**
    * 策略路由的源网段。
    * @example `192.168.1.0/24`
    */ "RouteSource": string;
    /**
    * 策略路由的目标网段。
    * @example `10.0.0.0/24`
    */ "RouteDest": string;
    /**
    * 策略路由的下一跳。
    * @example `vco-bp15oes1py4i66rmd****`
    */ "NextHop": string;
    /**
    * 策略路由的权重值，取值：**0**|**100**。
    * @example `0`
    */ "Weight": number;
    /**
    * 是否发布策略路由到VPC，取值：
    * - **true**：发布策略路由到VPC。
    * - **false**：不发布策略路由到VPC。
    * @example `true`
    */ "PublishVpc": boolean;
    "OwnerId"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
    */ "ClientToken"?: string;
    /**
    * @example `111`
    */ "Description"?: string;
    /**
    * 覆盖模式。
    * @example `Ipsec`
    */ "OverlayMode"?: string;
}
export { CreateVpnPbrRouteEntryRequest };