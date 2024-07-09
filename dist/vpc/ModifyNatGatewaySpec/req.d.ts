export interface ModifyNatGatewaySpecRequest {
    /**
     * 公网NAT网关所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要修改规格的公网NAT网关的ID。
     * @example `ngw-bp1uewa15k4iy5770****`
     */
    "NatGatewayId": string;
    /**
     * 公网NAT网关的规格，取值：
     * - **Small**：小型。
     * - **Middle**：中型。
     * - **Large**：大型。
     * @example `Middle`
     */
    "Spec": string;
    /**
     * 是否自动付费。
     * - **true**：开启自动付费，自动支付订单。
     * - **false**（默认值）：不开启自动付费，生成订单后需要到订单中心完成支付。
     * @example `false`
     */
    "AutoPay"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * @example `123e4567-e89b-12d3-a456-426655****`
     */
    "ClientToken"?: string;
}
