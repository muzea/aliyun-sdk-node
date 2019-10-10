interface DescribeRouteEntryListRequest {
    /**
    * 路由条目所在路由表的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 路由表ID。
    * @example `vtb-bp1r9pvl4xen8s9ju****`
    */ "RouteTableId": string;
    /**
    * 路由条目ID。
    * @example `rte-bp1mnnr2al0naomnp****`
    */ "RouteEntryId"?: string;
    /**
    * 路由条目的目标网段，支持IPv4和IPv6网段。
    * >仅中国站支持IPv6网段。
    * @example `192.168.2.0/24`
    */ "DestinationCidrBlock"?: string;
    /**
    * 路由条目的名称。
    * @example `abc`
    */ "RouteEntryName"?: string;
    /**
    * IP协议的版本，取值：
    * - **IPv4**：IPv4协议。
    * - **IPv6**：IPv6协议。
    * >仅中国站支持IPv6协议。
    * @example `IPv4`
    */ "IpVersion"?: string;
    /**
    * 路由条目的类型，取值：
    * - **Custom**：自定义路由。
    * - **System**：系统路由。
    * @example `System`
    */ "RouteEntryType"?: string;
    /**
    * 下一跳实例ID。
    * @example `vpn-bp10zyaph5cc8b7c7****`
    */ "NextHopId"?: string;
    /**
    * 下一跳类型，取值：
    * - **Instance**：ECS实例。
    * - **HaVip**：高可用虚拟IP。
    * - **VpnGateway**：VPN网关。
    * - **NatGateway**：NAT网关。
    * - **NetworkInterface**：辅助弹性网卡。
    * - **RouterInterface**：路由器接口。
    * - **IPv6Gateway**：IPv6网关。
    * >仅中国站支持IPv6网关作为下一跳。
    * @example `Instance`
    */ "NextHopType"?: string;
    /**
    * 分页大小，取值范围：**20**~**100**，默认为**50**。
    * @example `50`
    */ "MaxResult"?: number;
    /**
    * 下一个查询开始Token。
    * @example `caeba0bbb2be03f84eb48b699f0a4883`
    */ "NextToken"?: string;
    "OwnerId"?: number;
}
export { DescribeRouteEntryListRequest };