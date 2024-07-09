export interface UnassociateVpcCidrBlockRequest {
    /**
     * 要删除附加网段的VPC所在地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `ch-hangzhou`
     */
    "RegionId": string;
    /**
     * 要删除附加网段的VPC的ID。
     * @example `vpc-o6wrloqsdqc9io3mg****`
     */
    "VpcId": string;
    /**
     * 要删除的附加IPv4网段。
     * > 参数**SecondaryCidrBlock**和参数**Ipv6CidrBlock**必须输入一个且不能都输入。
     * @example `192.168.0.0/16`
     */
    "SecondaryCidrBlock"?: string;
    /**
     * 要删除的附加IPv6网段。
     * > 参数**Ipv6CidrBlock**和参数**SecondaryCidrBlock**必须输入一个且不能都输入。
     * @example `2408:XXXX:0:6a::/56`
     */
    "IPv6CidrBlock"?: string;
}
