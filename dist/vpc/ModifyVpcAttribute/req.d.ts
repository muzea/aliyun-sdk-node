export interface ModifyVpcAttributeRequest {
    /**
     * 要修改信息的VPC的ID。
     * @example `vpc-bp1qtbach57ywecf****`
     */
    "VpcId": string;
    /**
     * 要修改的VPC描述信息。
     * 描述长度为1～256个字符，不能以`http://`或`https://`开头。
     * @example `This is my VPC.`
     */
    "Description"?: string;
    /**
     * 要修改的VPC名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `Vpc-1`
     */
    "VpcName"?: string;
    /**
     * 要修改的VPC的IPv4网段。
     * 您可以在VPC原IPv4网段内放大或缩小网段，且网段支持的掩码为8～28位。当您缩小VPC的IPv4网段时，如果有已经使用的IP地址在目标网段外，则会修改失败。
     * > 修改VPC的网段，不会影响用户的存量业务。
     * @example `192.168.0.0/24`
     */
    "CidrBlock"?: string;
    /**
     * VPC所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 是否开启了IPv6网段。取值：
     * - **true**：开启。
     * - **false**（默认值）：关闭。
     * @example `false`
     */
    "EnableIPv6"?: boolean;
    /**
     * VPC的IPv6网段。
     * @example `2408:XXXX:0:6a::/56`
     */
    "Ipv6CidrBlock"?: string;
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
}
