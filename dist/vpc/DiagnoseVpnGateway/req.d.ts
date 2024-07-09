export interface DiagnoseVpnGatewayRequest {
    /**
     * VPN网关实例所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-qingdao`
     */
    "RegionId": string;
    /**
     * 待诊断的资源ID。
     * @example `vco-uf66xniofskqtuoz1****`
     */
    "ResourceId": string;
    /**
     * 待诊断的资源类型。
     * 仅取值：**IPsec**，表示IPsec连接。
     * @example `IPsec`
     */
    "ResourceType": string;
    /**
     * VPN网关实例ID。
     * @example `vpn-m5efhj0k1p47ctuhl****`
     */
    "VpnGatewayId": string;
    /**
     * 检查指定地址间的私网连通性。取值：
     * - **PrivateSourceIp**：源IP地址。源IP地址需为VPC侧的地址。
     * - **PrivateDestinationIp**：目的IP地址。目的IP地址需为本地数据中心侧的地址。
     * @example `{"PrivateSourceIp":"192.168.1.1","PrivateDestinationIp":"192.168.0.1"}`
     */
    "IPsecExtendInfo"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * >若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
}
