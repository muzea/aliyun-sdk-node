interface DescribeSslVpnServersRequest {
    /**
    * SSL-VPN服务端所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    * SSL-VPN服务端的ID。
    * @example `vss-bp15j3du13gq1dgey****`
    */ "SslVpnServerId"?: string;
    /**
    * VPN网关的ID。
    * @example `vpn-bp1on0xae9d771ggi****`
    */ "VpnGatewayId"?: string;
    /**
    * SSL-VPN服务端的名称。
    * @example `test`
    */ "Name"?: string;
    /**
    * 列表的页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeSslVpnServersRequest };