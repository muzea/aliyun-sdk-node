export interface DescribeVpnGatewayRequest {
    /**
     *  VPN网关所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     *  VPN网关实例ID。
     * @example `vpn-bp1r3v1xqkl0w519g****`
     */
    "VpnGatewayId": string;
    /**
     * 是否包含未生效的订单数据。取值：
     * - **false**（默认值）：不包含未生效的订单数据。
     * - **true**：包含未生效的订单数据。
     * @example `true`
     */
    "IncludeReservationData"?: boolean;
}
