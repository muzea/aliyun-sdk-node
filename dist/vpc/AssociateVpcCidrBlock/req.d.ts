export interface AssociateVpcCidrBlockRequest {
    /**
     * 需要添加附加网段的VPC所在地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `ch-hangzhou`
     */
    "RegionId": string;
    /**
     * 需要添加附加网段的VPC的ID。
     * @example `vpc-o6wrloqsdqc9io3mg****`
     */
    "VpcId": string;
    /**
     * 需要添加的附加IPv4网段，网段要求如下：
     * - 使用192.168.0.0/16、172.16.0.0/12和10.0.0.0/8三个标准网段及其子网作为VPC的附加IPv4网段。
     * - 使用除100.64.0.0/10、224.0.0.0/4、127.0.0.0/8、169.254.0.0/16及其子网外的自定义地址段作为专有网络的附加IPv4网段。
     * 配置限制如下：
     * - 不能以0开头，掩码长度有效范围为8~28位。
     * - 附加网段不得与VPC主网段及已添加的附加网段重叠。
     * > 不通过IPAM地址池为VPC添加附加网段时，参数**SecondaryCidrBlock**和参数**Ipv6CidrBlock**必须输入一个且不能都输入。
     * @example `192.168.0.0/16`
     */
    "SecondaryCidrBlock"?: string;
    /**
     * 通过输入掩码的方式从IPAM地址池为VPC添加附加网段。
     * > 指定IPAM地址池为VPC添加附加网段，参数SecondaryCidrBlock或SecondaryCidrMask至少输入一个。
     * @example `16`
     */
    "SecondaryCidrMask"?: number;
    /**
     * VPC的指定IPv6网段。
     * > 参数**SecondaryCidrBlock**和参数**Ipv6CidrBlock**必须输入一个且不能都输入。
     * @example `2408:XXXX:0:6a::/56`
     */
    "IPv6CidrBlock"?: string;
    /**
     * VPC的IPv6地址段类型，取值：
     * - **BGP**（默认值）：阿里云BGP IPv6。
     * - **ChinaMobile**：中国移动（单线）。
     * - **ChinaUnicom**：中国联通（单线）。
     * - **ChinaTelecom**：中国电信（单线）。
     * > 如果是开通了单线带宽白名单的用户，该字段可以设置为**ChinaTelecom**（中国电信）、**ChinaUnicom**（中国联通）和**ChinaMobile**（中国移动）。
     * @example `BGP`
     */
    "Ipv6Isp"?: string;
    /**
     * IP地址的版本类型。取值：
     * - **IPV4**：IPv4地址。
     * - **IPV6**：IPv6地址，当**IpVersion**参数输入**IPV6**，**SecondaryCidrBlock**参数不传值时可以为VPC添加附加IPv6网段。
     * @example `IPV4`
     */
    "IpVersion"?: string;
    /**
     * IPv4类型的IPAM地址池实例ID。
     * @example `ipam-pool-sycmt3p2a9v63i****`
     */
    "IpamPoolId"?: string;
}
