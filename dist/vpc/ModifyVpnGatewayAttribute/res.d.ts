export interface ModifyVpnGatewayAttributeResponse {
    /**
     * VPN网关实例所属VPC的ID。
     * @example `vpc-bp1ub1yt9cvakoel****`
     */
    VpcId: string;
    /**
     * VPN网关的状态。
     * - **init**：初始化。
     * - **provisioning**：准备中。
     * - **active**：正常。
     * - **updating**：更新中。
     * - **deleting**：删除中。
     * @example `active`
     */
    Status: string;
    /**
     * - 在VPN网关实例支持创建单隧道模式IPsec-VPN连接的场景下，该地址为VPN网关实例的IP地址，可用于创建IPsec-VPN连接或SSL-VPN连接。
     * - 在VPN网关实例支持创建双隧道模式IPsec-VPN连接的场景下，该地址为用于创建IPsec-VPN连接的第一个IP地址，不能用于创建SSL-VPN连接。
     *     在VPN网关实例支持创建双隧道模式IPsec-VPN连接的场景下，系统会为VPN网关实例分配两个IPsec地址，用于创建双隧道模式的IPsec-VPN连接。
     * @example `116.62.XX.XX`
     */
    InternetIp: string;
    /**
     * VPN网关实例的带宽规格。单位：Mbps。
     * @example `5M`
     */
    Spec: string;
    /**
     * VPN网关实例的创建时间戳。单位：毫秒。
     * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至创建VPN网关实例时的总时长。
     * @example `1492753580000`
     */
    CreateTime: number;
    /**
     * BGP路由是否自动传播到VPC。取值：
     * - **true**：自动传播。
     * - **false**：不自动传播。
     * @example `true`
     */
    AutoPropagate: boolean;
    /**
     * VPN网关实例的ID。
     * @example `vpn-bp1q8bgx4xnkm2ogj****`
     */
    VpnGatewayId: string;
    /**
     * VPN网关实例的IP地址。
     * 当VPN网关的网络类型为私网，且仅支持创建单隧道模式的IPsec-VPN连接时会返回当前参数。
     * @example `172.27.30.24`
     */
    IntranetIp: string;
    /**
     * VPN网关实例的到期时间戳。单位：毫秒。
     * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至VPN网关实例到期时的总时长。
     * @example `1495382400000`
     */
    EndTime: number;
    /**
     * VPN网关实例关联的交换机ID。
     * @example `vsw-bp1y9ovl1cu9ou4tv****`
     */
    VSwitchId: string;
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-08E683A1B457`
     */
    RequestId: string;
    /**
     * VPN网关实例的描述信息。
     * @example `test`
     */
    Description: string;
    /**
     * VPN网关BGP功能的开启状态。取值：
     * - **true**：开启。
     * - **false**：未开启。
     * @example `true`
     */
    EnableBgp: boolean;
    /**
     * VPN网关实例的付费状态。取值：
     * - **Normal**：正常。
     * - **FinancialLocked**：欠费锁定。
     * @example `Normal`
     */
    BusinessStatus: string;
    /**
     * VPN网关实例的名称。
     * @example `test`
     */
    Name: string;
    /**
     * 系统为VPN网关实例分配的用于创建IPsec-VPN连接的第二个IP地址。
     * 仅支持创建双隧道模式IPsec-VPN连接的VPN网关实例会返回当前参数。
     * @example `116.11.XX.XX`
     */
    DisasterRecoveryInternetIp: string;
    /**
     * VPN网关实例关联的第二个交换机ID。
     * 仅支持创建双隧道模式IPsec-VPN连接的VPN网关实例会返回当前参数。
     * @example `vsw-p0w95ql6tmr2ludkt****`
     */
    DisasterRecoveryVSwitchId: string;
    /**
     * SSL-VPN连接的IP地址。
     * 仅支持创建双隧道模式IPsec-VPN连接的公网网络类型的VPN网关实例开启SSL-VPN功能后，才会返回当前参数。
     * @example `116.33.XX.XX`
     */
    SslVpnInternetIp: string;
    /**
     * VPN网关实例所属的资源组ID。
     * 您可以调用[ListResourceGroups](~~158855~~)接口查询资源组信息。
     * @example `rg-acfmzs372yg****`
     */
    ResourceGroupId: string;
}
