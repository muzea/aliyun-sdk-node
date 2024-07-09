export interface CreateVpcFirewallCenConfigureRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * VPC边界防火墙的实例名称。
     * @example `测试用实例`
     */
    "VpcFirewallName": string;
    /**
     * 创建VPC边界防火墙的VPC实例ID。
     * @example `vpc-bp10zlifxh6j0232w****`
     */
    "NetworkInstanceId": string;
    /**
     * 创建VPC边界防火墙的VPC所属地域ID。
     * > 关于云防火墙支持地域的详细信息，请参见[支持的地域](~~195657~~)。
     * @example `cn-hangzhou`
     */
    "VpcRegion": string;
    /**
     * 设置VPC边界防火墙的开关状态。取值：
     * - **open**（默认）：创建VPC边界防火墙后自动开启防护。
     * - **close**：创建VPC边界防火墙后不自动开启防护。您可以调用接口[ModifyVpcFirewallCenSwitchStatus](~~345780~~)开启防护。
     * @example `open`
     */
    "FirewallSwitch": string;
    /**
     * 云企业网实例ID。
     * @example `cen-x5jayxou71ad73****`
     */
    "CenId": string;
    /**
     * 当前阿里云账号的成员账号UID。
     * @example `258039427902****`
     */
    "MemberUid"?: string;
    /**
     * 指定云防火墙接口所属的vSwitch ID。
     * @example `vsw-qzeaol304m***`
     */
    "VSwitchId"?: string;
    /**
     * 防火墙所使用VPC网段, 需配置子网掩码不大于28位网段来分配给创建防火墙过程所需VPC网段，用以自动创建防火墙安全VPC（Cloud_Firewall_VPC）进行流量引流处理。
     * 如果不填此参数，则默认自动分配网段10.0.0.0/8。
     * > 参数仅本CEN本地域首次创建VPC防火墙时有效。
     * @example `10.0.0.0/8`
     */
    "FirewallVpcCidrBlock"?: string;
    /**
     * 防火墙交换机所属的可用区ID。
     * 如果您的业务延时敏感，您可以自定义防火墙交换机可用区和业务VPC交换机可用区相同，以便降低延时。
     * 如果不填此参数，则默认自动分配交换机可用区。
     * > 参数仅本CEN本地域首次创建VPC防火墙时有效。关于各地域可用区的详细信息，请参见[查询可用区列表API](~~36064~~)。
     * @example `cn-hangzhou-a`
     */
    "FirewallVpcZoneId"?: string;
    /**
     * 防火墙所使用vSwitch网段, 需配置子网掩码不大于29位且不与网络规划冲突的网段来分配给创建防火墙过程所需vSwitch网段，用以自动创建防火墙安全VPC内的交换机（Cloud_Firewall_VSWITCH）进行流量引流处理。交换机网段必须是防火墙VPC网段的子网。
     * 如果不填此参数, 则默认自动分配网段10.219.219.216/29。
     * > 参数仅本CEN本地域首次创建VPC防火墙时有效。
     * @example `10.0.*.*​/28`
     */
    "FirewallVSwitchCidrBlock"?: string;
}
