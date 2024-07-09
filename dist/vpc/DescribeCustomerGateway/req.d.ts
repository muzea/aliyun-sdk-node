export interface DescribeCustomerGatewayRequest {
    /**
     * 用户网关所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     *  用户网关的实例ID。
     * @example `cgw-bp1pvpl9r9adju6l5****`
     */
    "CustomerGatewayId": string;
}
