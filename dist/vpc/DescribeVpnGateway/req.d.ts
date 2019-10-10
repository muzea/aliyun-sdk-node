interface DescribeVpnGatewayRequest {
    /**
    *  VPN网关所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    *  VPN网关的ID。
    * @example `vpn-bp1q8bgx4xnkm2ogj****`
    */ "VpnGatewayId": string;
    "OwnerId"?: number;
}
export { DescribeVpnGatewayRequest };