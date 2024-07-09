export interface DescribeSecurityGroupAttributeResponse {
    /**
     * VPC ID。如果返回VPC ID，表示该安全组网络类型为VPC。否则，表示是经典网络类型安全组。
     * @example `vpc-bp1opxu1zkhn00gzv****`
     */
    VpcId: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 安全组内网络连通策略。可能值：
     *
     * - Accept：内网互通。
     * - Drop：内网隔离。
     * @example `Accept`
     */
    InnerAccessPolicy: string;
    /**
     * 安全组描述信息。
     * @example `This is description.`
     */
    Description: string;
    /**
     * 目标安全组ID。
     * @example `sg-bp1gxw6bznjjvhu3****`
     */
    SecurityGroupId: string;
    /**
     * 目标安全组名称。
     * @example `SecurityGroupName Sample`
     */
    SecurityGroupName: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    Permissions: {
        /**
         * 安全组权限规则集合。
         */
        Permission: {
            /**
             * 安全组规则ID。
             * @example `sgr-bp12kewq32dfwrdi****`
             */
            SecurityGroupRuleId: string;
            /**
             * 授权方向。
             * @example `ingress`
             */
            Direction: string;
            /**
             * 源端安全组，用于入方向授权。
             * @example `sg-bp12kc4rqohaf2js****`
             */
            SourceGroupId: string;
            /**
             * 目的端安全组所属阿里云账户ID。
             * @example `1234567890`
             */
            DestGroupOwnerAccount: string;
            /**
             * 目的端前缀列表ID，用于出方向授权。
             * @example `pl-x1j1k5ykzqlixabc****`
             */
            DestPrefixListId: string;
            /**
             * 目的端前缀列表的名称。
             * @example `DestPrefixListName Sample`
             */
            DestPrefixListName: string;
            /**
             * 源端IP地址段，用于入方向授权。
             * @example `0.0.0.0/0`
             */
            SourceCidrIp: string;
            /**
             * 目的端IPv6地址段。
             * @example `2001:db8:1233:1a00::***`
             */
            Ipv6DestCidrIp: string;
            /**
             * 创建时间，UTC时间。
             * @example `2018-12-12T07:28:38Z`
             */
            CreateTime: string;
            /**
             * 源端IPv6地址段。
             * @example `2001:db8:1234:1a00::***`
             */
            Ipv6SourceCidrIp: string;
            /**
             * 目的端安全组，用于出方向授权。
             * @example `sg-bp1czdx84jd88i7v****`
             */
            DestGroupId: string;
            /**
             * 目的端IP地址段，用于出方向授权。
             * @example `0.0.0.0/0`
             */
            DestCidrIp: string;
            /**
             * IP协议。
             * @example `TCP`
             */
            IpProtocol: string;
            /**
             * 规则优先级。
             * @example `1`
             */
            Priority: string;
            /**
             * 目的端安全组名称。
             * @example `testDestGroupName`
             */
            DestGroupName: string;
            /**
             * 网络类型。
             * @example `intranet`
             */
            NicType: string;
            /**
             * 授权策略。
             * @example `Accept`
             */
            Policy: string;
            /**
             * 安全组描述信息。
             * @example `Description Sample 01`
             */
            Description: string;
            /**
             * 端口范围。
             * @example `80/80`
             */
            PortRange: string;
            /**
             * 源端前缀列表的名称。
             * @example `SourcePrefixListName Sample`
             */
            SourcePrefixListName: string;
            /**
             * 源端前缀列表ID，用于入方向授权。
             * @example `pl-x1j1k5ykzqlixdcy****`
             */
            SourcePrefixListId: string;
            /**
             * 源端安全组所属阿里云账户ID。
             * @example `1234567890`
             */
            SourceGroupOwnerAccount: string;
            /**
             * 源端安全组名称。
             * @example `testSourceGroupName1`
             */
            SourceGroupName: string;
            /**
             * 源端端口范围。
             * @example `80/80`
             */
            SourcePortRange: string;
        }[];
    };
    /**
     * 本次调用返回的查询凭证（Token）。当使用`MaxResults`和`NextToken`方式进行分页查询，且该返回值为空时，表示无更多返回的数据信息。
     * @example `AAAAAdDWBF2****`
     */
    NextToken: string;
}
