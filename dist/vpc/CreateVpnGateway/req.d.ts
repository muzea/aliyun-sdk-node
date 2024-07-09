export interface CreateVpnGatewayRequest {
    /**
     * VPN网关所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * VPN网关的名称，默认值为VPN网关的ID。
     * 长度为2～100个字符，不能以`http://`或`https://`开头，需要以大写或小写字母开头，后面可包含大小写字母、数字、下划线（_）、短划线（-）和半角句号（.），不支持其他特殊字符。
     * @example `MYVPN`
     */
    "Name"?: string;
    /**
     * VPN网关所属的VPC实例ID。
     * @example `vpc-bp1ub1yt9cvakoelj****`
     */
    "VpcId": string;
    /**
     * <props="china">VPN网关的计费方式。仅取值：**PREPAY**，包年包月。</props>
     * <props="intl">VPN网关的计费方式。仅取值：**POSTPAY**，按量计费。</props>
     * <props="partner">VPN网关的计费方式。仅取值：**POSTPAY**，按量计费。</props>
     * <props="china">在您创建VPN网关时，该参数为必填项。</props>
     * @example `中国站示例值：PREPAY，国际站示例值：POSTPAY`
     */
    "InstanceChargeType"?: string;
    /**
     * 购买时长。单位：月。取值：**1**~**9**、**12**、**24**或**36**。
     * <props="china">
     * > **InstanceChargeType**参数的值为**PREPAY**时，该参数必选。</props>
     * @example `1`
     */
    "Period"?: number;
    /**
     * 是否自动支付VPN网关的账单。取值：
     * - **true**：自动支付VPN网关的账单。
     * - **false**（默认值）：不自动支付VPN网关的账单。
     * > 为了成功创建VPN网关实例，建议您开启自动支付。如果您关闭了自动支付，则需要手动支付账单才能成功创建VPN网关实例。
     * @example `false`
     */
    "AutoPay"?: boolean;
    /**
     * VPN网关的带宽规格。单位：Mbps。
     * <props="china">- 如果您要创建公网VPN网关，则取值为：**5**、**10**、**20**、**50**、**100**、**200**、**500**或**1000**。</props>
     * <props="china">- 如果您要创建私网VPN网关，则取值为：**200**或**1000**。</props>
     * <props="intl">- 如果您要创建公网VPN网关，则取值为：**10**、**100**、**200**、**500**或**1000**。</props>
     * <props="intl">- 如果您要创建私网VPN网关，则取值为：**200**或**1000**。</props>
     * >部分地域下VPN网关支持的最大带宽规格为500 Mbps。更多信息，请参见[VPN网关使用限制](~~65290~~)。
     * @example `5`
     */
    "Bandwidth": number;
    /**
     * 是否开启IPsec-VPN功能。取值：
     * - **true**（默认值）：开启IPsec-VPN功能。
     * - **false**：不开启IPsec-VPN功能。
     * @example `true`
     */
    "EnableIpsec"?: boolean;
    /**
     * 是否开启SSL-VPN功能。取值：
     * - **true**：开启SSL-VPN功能。
     * - **false**（默认值）：不开启SSL-VPN功能。
     * @example `false`
     */
    "EnableSsl"?: boolean;
    /**
     * 允许同时连接的最大客户端数量。取值：**5**（默认值）、**10**、**20**、**50**、**100**、**200**、**500**、**1000**。
     * @example `5`
     */
    "SslConnections"?: number;
    /**
     * 指定VPN网关实例关联的交换机实例。
     * - 在支持创建双隧道模式IPsec-VPN连接的地域，本参数必填，您必须指定一个交换机实例，同时您还要指定**DisasterRecoveryVSwitchId**参数的值。
     * - 在支持创建单隧道模式IPsec-VPN连接的地域，如果您不指定交换机实例，系统将从VPC下自动选择一个交换机实例。
     * @example `vsw-bp1j5miw2bae9s2vt****`
     */
    "VSwitchId"?: string;
    /**
     * VPN网关类型。取值：
     * - **Normal**（默认值）：普通型。
     * <props="china">- **NationalStandard**：国密型。</props>
     * @example `Normal`
     */
    "VpnType"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4****`
     */
    "ClientToken"?: string;
    /**
     * VPN网关的网络类型。取值：
     * - **public**（默认值）：公网VPN网关。
     * - **private**：私网VPN网关。
     * @example `public`
     */
    "NetworkType"?: string;
    /**
     * 指定VPN网关实例关联的第二个交换机实例。
     * - 如果当前地域支持创建双隧道模式的IPsec-VPN连接，则本参数必填。
     * - 您需要从VPN网关实例关联的VPC实例下指定两个分布在不同可用区的交换机实例，以实现IPsec-VPN连接可用区级别的容灾。
     * - 对于仅支持一个可用区的地域 ，不支持可用区级别的容灾，建议您在该可用区下指定两个不同的交换机实例以实现IPsec-VPN连接的高可用，支持指定相同的交换机实例。
     * 关于支持双隧道模式IPsec-VPN连接的地域和可用区的信息，请参见[IPsec-VPN连接升级为双隧道模式](~~2358946~~)。
     * @example `vsw-p0wiz7obm0tbimu4r****`
     */
    "DisasterRecoveryVSwitchId"?: string;
    /**
     * VPN网关所属的资源组ID。
     * - 您可以调用[ListResourceGroups](~~158855~~)接口查询资源组ID。
     * - 如果您未指定资源组ID，VPN网关创建完成后将归属于默认资源组。
     * - VPN网关创建完成后，如果您在VPN网关下创建SSL服务端、SSL客户端证书、IPsec服务端或IPsec连接（指IPsec连接绑定VPN网关的场景），则这些资源将直接归属在VPN网关所属的资源组下，且不支持修改。
     *   如果您修改了VPN网关所属的资源组，则上述资源所属的资源组也将一并被修改。
     * @example `rg-acfmzs372yg****`
     */
    "ResourceGroupId"?: string;
}
