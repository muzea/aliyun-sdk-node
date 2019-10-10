interface DescribeVpnConnectionsRequest {
    /**
    * IPsec连接所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    *  VPN网关的ID。
    * @example `vpn-bp1q8bgx4xnkx****`
    */ "VpnGatewayId"?: string;
    /**
    * 用户网关的ID。
    * @example `cgw-bp1mvj4g9kogw****`
    */ "CustomerGatewayId"?: string;
    /**
    *  列表的页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * IPsec连接的ID。
    * @example `vco-bp15oes1py4i6****`
    */ "VpnConnectionId"?: string;
}
export { DescribeVpnConnectionsRequest };