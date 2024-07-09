export interface CreateIPv6TranslatorResponse {
    /**
     * IPv6转换服务实例ID。
     * @example `ipv6trans-bp1i8ahxut1xxxx`
     */
    Ipv6TranslatorId: string;
    /**
     * 请求ID。
     * @example `1AE05898-06E5-4782-xxxxx`
     */
    RequestId: string;
    /**
     * IPv6转换服务实例规格。
     * @example `small`
     */
    Spec: string;
    /**
     * IPv6转换服务实例名称。
     * @example `test_nat64gw`
     */
    Name: string;
    /**
     * 创建IPv6转换服务实例的订单ID。
     * @example `202303300940739`
     */
    OrderId: number;
}
