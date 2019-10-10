interface DeleteRouteEntryRequest {
    /**
    * 路由表所属地域的ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    *  路由条目所在的路由表的ID。
    * @example `trb-2ze3jgygk9bmsj23s****`
    */ "RouteTableId"?: string;
    /**
    * 路由条目ID。
    * @example `rte-bp1mnnr2al0naomnpvxxx`
    */ "RouteEntryId"?: string;
    /**
    *  路由条目的目标网段，支持IPv4和IPv6网段。
    * @example `0.0.0.0/0`
    */ "DestinationCidrBlock"?: string;
    /**
    * 下一跳实例的ID。
    * @example `ri-2zeo3xzyf38r4urzd****`
    */ "NextHopId"?: string;
    "NextHopList"?: string[];
}
export { DeleteRouteEntryRequest };