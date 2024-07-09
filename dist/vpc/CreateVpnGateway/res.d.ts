export interface CreateVpnGatewayResponse {
    /**
     * VPN网关实例ID。
     * @example `vpn-uf68lxhgr7ftbqr3p****`
     */
    VpnGatewayId: string;
    /**
     * 请求ID。
     * @example `EB2C156A-41F8-49CC-A756-D55AFC8BFD69`
     */
    RequestId: string;
    /**
     * VPN网关的名称。
     * @example `MYVPN`
     */
    Name: string;
    /**
     * 订单ID。
     * <props="china">如果您未选择自动支付VPN网关的账单，请前往[阿里云用户中心](https://usercenter2.aliyun.com/home)完成支付。</props>
     * <props="intl">如果您未选择自动支付VPN网关的账单，请前往[阿里云用户中心](https://usercenter2-intl.aliyun.com/billing/#/account/overview)完成支付。</props>
     * @example `208240895400460`
     */
    OrderId: number;
}
