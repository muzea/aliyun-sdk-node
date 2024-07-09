export interface ModifySslVpnServerResponse {
    /**
     * 公网IP。
     * @example `47.98.XX.XX`
     */
    InternetIp: string;
    /**
     * IDaaS EIAM实例ID。
     * @example `idaas-cn-hangzhou-****`
     */
    IDaaSInstanceId: string;
    /**
     * SSL-VPN服务端的创建时间。
     * @example `1492753580000`
     */
    CreateTime: number;
    /**
     * VPN网关实例ID。
     * @example `vpn-bp1q8bgx4xnkm2ogj****`
     */
    VpnGatewayId: string;
    /**
     * 是否压缩通信。
     * @example `false`
     */
    Compress: boolean;
    /**
     * SSL-VPN服务端的端口。
     * @example `1194`
     */
    Port: number;
    /**
     * 本地客户端地址段。
     * @example `10.20.20.0/24`
     */
    LocalSubnet: string;
    /**
     * SSL-VPN服务端的地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 使用的加密算法。
     * @example `AES-128-CBC`
     */
    Cipher: string;
    /**
     * 请求ID。
     * @example `DF11D6F6-E35A-41C3-9B20-6FC8A901FE65`
     */
    RequestId: string;
    /**
     * 当前连接数。
     * @example `0`
     */
    Connections: number;
    /**
     * SSL-VPN服务端的ID。
     * @example `vss-bp18q7hzj6largv4v****`
     */
    SslVpnServerId: string;
    /**
     * 最大连接数。
     * @example `5`
     */
    MaxConnections: number;
    /**
     * SSL-VPN服务端的名称。
     * @example `test`
     */
    Name: string;
    /**
     * 是否开启了双因子认证。
     * - **true**：已开启。
     * - **false**（默认值）：未开启。
     * @example `false`
     */
    EnableMultiFactorAuth: boolean;
    /**
     * 客户端IP地址池。
     * @example `10.30.30.0/24`
     */
    ClientIpPool: string;
    /**
     * SSL-VPN服务端使用的协议。
     * @example `UDP`
     */
    Proto: string;
    /**
     * SSL-VPN服务端所属的资源组ID。
     * SSL-VPN服务端与其关联的VPN网关实例的资源组相同。您可以调用[ListResourceGroups](~~158855~~)接口查询资源组信息。
     * @example `rg-acfmzs372yg****`
     */
    ResourceGroupId: string;
    /**
     * IDaaS应用ID。
     * @example `app_my6g4qmvnwxzj2f****`
     */
    IDaaSApplicationId: string;
    /**
     * IDaaS EIAM实例的版本。
     * - 仅当SSL服务端绑定的是IDaaS EIAM 2.0实例，系统才会返回该参数。仅取值：**EIAM 2.0**。
     * - 如果SSL服务端绑定的是IDaaS EIAM 1.0实例，系统不会返回该参数。
     * @example `EIAM 2.0`
     */
    IDaaSInstanceVersion: string;
}
