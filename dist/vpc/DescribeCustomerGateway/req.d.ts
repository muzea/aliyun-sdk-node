interface DescribeCustomerGatewayRequest {
    /**
    * 用户网关所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    *  用户网关的ID。
    * @example `vpn-bp1q8bgx4xnkm2ogj****`
    */ "CustomerGatewayId": string;
    "OwnerId"?: number;
}
export { DescribeCustomerGatewayRequest };