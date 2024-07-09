export interface DescribeVpnGatewayResponse {
    /**
     * VPN网关类型。
     * <props="intl">取值：**Normal**，表示普通型。</props>
     * <props="china">取值：</props>
     * <props="china">
     * - **Normal**：普通型。
     * </props>
     * <props="china">
     * - **NationalStandard**：国密型。
     * </props>
     * @example `Normal`
     */
    VpnType: string;
    /**
     * VPN网关的状态。取值：
     * - **init**：初始化。
     * - **provisioning**：准备中。
     * - **active**：正常。
     * - **updating**：更新中。
     * - **deleting**：删除中。
     * @example `init`
     */
    Status: string;
    /**
     * VPN网关所属VPC的ID。
     * @example `vpc-bp19m2yx1m5q0avyq****`
     */
    VpcId: string;
    /**
     * SSL-VPN并发连接用户数的规格。
     * @example `5`
     */
    SslMaxConnections: number;
    /**
     * VPN网关的带宽规格。单位：Mbps。
     * @example `5`
     */
    Spec: string;
    /**
     * - 在VPN网关实例支持创建单隧道模式IPsec-VPN连接的场景下，该地址为VPN网关实例的IP地址，可用于创建IPsec-VPN连接或SSL-VPN连接。
     * - 在VPN网关实例支持创建双隧道模式IPsec-VPN连接的场景下，该地址为用于创建IPsec-VPN连接的第一个IP地址，不能用于创建SSL-VPN连接。
     *     在VPN网关实例支持创建双隧道模式IPsec-VPN连接的场景下，系统会为VPN网关实例分配两个IPsec地址，用于创建双隧道模式的IPsec-VPN连接。
     * @example `47.22.XX.XX`
     */
    InternetIp: string;
    /**
     * 创建VPN网关的时间戳。单位：毫秒。
     * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至创建VPN网关时的总时长。
     * @example `1495382400000`
     */
    CreateTime: number;
    /**
     * 是否将BGP路由自动传播到VPC。取值：
     * - **true**：自动传播。
     * - **false**：不自动传播。
     * @example `true`
     */
    AutoPropagate: boolean;
    /**
     * 付费类型。仅取值：
     * <props="intl">**POSTPAY**，按量计费。</props>
     * <props="partner">**POSTPAY**，按量计费。</props>
     * <props="china">**Prepay**，包年包月。</props>
     * @example `中国站示例值：Prepay，国际站示例值：POSTPAY`
     */
    ChargeType: string;
    /**
     * VPN网关实例ID。
     * @example `vpn-bp1r3v1xqkl0w519g****`
     */
    VpnGatewayId: string;
    /**
     * 系统自动生成的VPN网关标签。
     * - **VpnEnableBgp**：表示VPN网关是否支持BGP功能。
     *     - **true**：支持。
     *     - **false**：不支持。
     * - **VisuallySsl**：表示VPN网关是否支持查看SSL客户端的连接信息。
     *     - **true**：支持。
     *     - **false**：不支持。
     * - **PbrPriority**：表示VPN网关是否支持为策略路由配置策略优先级。
     *     - **true**：支持。
     *     - **false**：不支持。
     * - **VpnNewImage**：表示VPN网关是否为新型VPN网关。
     *     - **true**：是。
     *     - **false**：否。
     * - **description**：表示VPN网关的描述信息，仅供系统内部使用。
     * - **VpnVersion**：表示VPN网关的版本号。
     * @example `{\"VpnEnableBgp\":\"true\",\"VisuallySsl\":\"true\",\"PbrPriority\":\"true\",\"VpnNewImage\":\"true\",\"description\":\"转发1.3.7\",\"VpnVersion\":\"v1.2.4\"}`
     */
    Tag: string;
    /**
     * 是否开启了IPsec-VPN功能。取值：
     * - **enable**：已开启。
     * - **disable**：未开启。
     * @example `enable`
     */
    IpsecVpn: string;
    /**
     * VPN网关到期时间戳。单位：毫秒。
     * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至VPN网关到期时的总时长。
     * @example `1544666102000`
     */
    EndTime: number;
    /**
     * VPN网关所属交换机的ID。
     * @example `vsw-bp1dmzugdikc6hdgx****`
     */
    VSwitchId: string;
    /**
     * 请求ID。
     * @example `27E4E088-8DE0-4672-BF5C-0A412389DB9E`
     */
    RequestId: string;
    /**
     * VPN网关的描述信息。
     * @example `vpngatewaydescription`
     */
    Description: string;
    /**
     * VPN网关BGP功能的开启状态。取值：
     * - **true**：已开启。
     * - **false**：未开启。
     * @example `true`
     */
    EnableBgp: boolean;
    /**
     * VPN网关的付费状态。取值：
     * - **Normal**：正常。
     * - **FinancialLocked**：欠费锁定。
     * @example `Normal`
     */
    BusinessStatus: string;
    /**
     * SSL-VPN功能的开启状态。取值：
     * - **enable**：已开启。
     * - **disable**：未开启。
     * @example `enable`
     */
    SslVpn: string;
    /**
     * VPN网关的名称。
     * @example `vpngatewayname`
     */
    Name: string;
    /**
     * 未生效的订单数据。
     * >仅**IncludeReservationData**传入**true**才会返回该组参数。
     */
    ReservationData: {
        /**
         * 未生效订单状态。取值：
         * - **1**：表示续费或续费变配的订单未生效。
         * - **2**：表示临时升配的订单已生效。在到达还原时间后，系统会将VPN网关规格恢复到临时升配前的规格。此时**ReservationIpsec**、**ReservationMaxConnections**、**ReservationSpec**、**ReservationSsl**表示为VPN网关临时升配前的规格。
         * @example `1`
         */
        Status: string;
        /**
         * 未生效订单类型。取值：
         * - **RENEWCHANGE**：续费变配。
         * - **TEMP_UPGRADE**：临时升配。
         * - **RENEW**：续费。
         * @example `TEMP_UPGRADE`
         */
        ReservationOrderType: string;
        /**
         * 未生效订单IPsec-VPN功能开启状态。取值：
         * - **enable**：已开启。
         * - **disable**：未开启。
         * @example `enable`
         */
        ReservationIpsec: string;
        /**
         * 未生效订单的带宽规格。单位：Mbps。
         * @example `5`
         */
        ReservationSpec: string;
        /**
         * 未生效订单SSL-VPN功能开启状态。取值：
         * - **enable**：已开启。
         * - **disable**：未开启。
         * @example `enable`
         */
        ReservationSsl: string;
        /**
         * 未生效订单SSL-VPN并发连接用户数的规格。
         * @example `5`
         */
        ReservationMaxConnections: number;
        /**
         * 如果未生效订单类型为**TEMP_UPGRADE**（临时升配）时，该参数表示为临时升配的还原时间。
         * 如果未生效订单类型为**RENEWCHANGE**（续费变配）或**RENEW**（续费）时，该参数表示为续费或续费变配开始生效时间。
         * @example `2020-07-20T16:00:00Z`
         */
        ReservationEndTime: string;
    };
    Tags: {
        /**
         * 您自定义的VPN网关标签。
         */
        Tag: {
            /**
             * 标签键。
             * @example `aaa`
             */
            Key: string;
            /**
             * 标签值。
             * @example `bbb`
             */
            Value: string;
        }[];
    };
    /**
     * VPN网关的网络类型。
     * - **public**：公网VPN网关。
     * - **private**：私网VPN网关。
     * @example `public`
     */
    NetworkType: string;
    /**
     * 系统为VPN网关实例分配的用于创建IPsec-VPN连接的第二个IP地址。
     * 仅支持创建双隧道模式IPsec-VPN连接的VPN网关实例会返回当前参数。
     * @example `47.91.XX.XX`
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
     * @example `47.74.XX.XX`
     */
    SslVpnInternetIp: string;
    /**
     * VPN网关所属的资源组ID。
     * 您可以调用[ListResourceGroups](~~158855~~)接口查询资源组信息。
     * @example `rg-acfmzs372yg****`
     */
    ResourceGroupId: string;
    EniInstanceIds: {
        /**
         * 系统为VPN网关实例创建的弹性网卡ENI（Elastic Network Interfaces）列表。
         */
        EniInstanceId: string[];
    };
}
