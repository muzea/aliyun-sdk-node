export interface DeleteNatGatewayRequest {
    /**
     * NAT网关所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要删除的NAT网关的实例ID。
     * @example `ngw-bp1uewa15k4iy5770****`
     */
    "NatGatewayId": string;
    /**
     * 是否强制删除NAT网关，取值：
     * - **true**：强制删除。当取值为**true**时，说明如下：
     *     - 如果NAT网关有SNAT规则，系统会自动帮您删除SNAT规则。
     *     - 如果NAT网关有DNAT规则，系统会自动帮您删除DNAT规则。
     *     - 如果NAT网关有绑定EIP，系统会自动帮您解绑。
     *     - 如果NAT网关有未删除的NAT带宽包，系统会自动帮您删除NAT带宽包。
     * - **false**（默认值）：不强制删除。当取值为**false**时，说明如下：
     *     - 如果NAT网关有未删除的NAT带宽包，请先删除NAT带宽包。
     *     - 如果NAT网关有SNAT规则，请先删除SNAT规则。
     *     - 如果NAT网关有DNAT规则，请先删除DNAT规则。
     *     - 如果NAT网关有绑定EIP，请先解绑EIP。
     * @example `false`
     */
    "Force"?: boolean;
}
