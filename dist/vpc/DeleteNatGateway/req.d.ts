interface DeleteNatGatewayRequest {
    /**
    * NAT网关所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  NAT网关的ID。
    * @example `ngw-bp1uewa15k4iy5770ya89`
    */ "NatGatewayId": string;
    "OwnerId"?: number;
    /**
    * 是否强制删除NAT网关。
    * @example `false`
    */ "Force"?: boolean;
}
export { DeleteNatGatewayRequest };