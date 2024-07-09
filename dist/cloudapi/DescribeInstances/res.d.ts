export interface DescribeInstancesResponse {
    /**
     * 当前页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求id
     * @example `CEB6EC62-B6C7-5082-A45A-45A204724AC2`
     */
    RequestId: string;
    /**
     * 每页数目。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总数。
     * @example `1`
     */
    TotalCount: number;
    Instances: {
        /**
         * 实例信息列表。
         */
        InstanceAttribute: {
            /**
             * 实例状态
             * @example `RUNNING`
             */
            Status: string;
            /**
             * 是否开启内网VPC SLB
             * @example `true`
             */
            VpcSlbIntranetEnable: boolean;
            /**
             * 出口地址
             * @example `10.0.0.1`
             */
            ClassicEgressAddress: string;
            /**
             * 可用区域
             * @example `多可用区 2`
             */
            ZoneLocalName: string;
            /**
             * 用户VPC Id
             * @example `vpc-t***hx****yu9****t0g4`
             */
            UserVpcId: string;
            /**
             * 是否开启内网VPC
             * @example `true`
             */
            VpcIntranetEnable: boolean;
            /**
             * VPC实例所属账号ID。
             * @example `1408453217640291****`
             */
            VpcOwnerId: number;
            /**
             * 实例id
             * @example `api-shared-vpc-020`
             */
            InstanceId: string;
            /**
             * 实例rps限制
             * @example `500`
             */
            InstanceRpsLimit: number;
            /**
             * 实例类型
             * - VPC_SHARED：共享实例(VPC)
             * - VPC_DEDICATED：专享实例(VPC)
             * @example `VPC_SHARED`
             */
            InstanceType: string;
            /**
             * 所在的region
             * @example `cn-beijing`
             */
            RegionId: string;
            /**
             * 实例规格
             * @example `api.s1.small`
             */
            InstanceSpec: string;
            /**
             * 实例的计费方式。可能值：
             * - PrePaid：包年包月。
             * - PayAsYouGo：按量付费。
             * @example `PrePaid`
             */
            InstanceChargeType: string;
            /**
             * https安全策略
             * @example `HTTPS2_TLS1_2`
             */
            HttpsPolicies: string;
            /**
             * 内网VPC出口网段
             * @example `100.104.254.0/26`
             */
            VpcEgressAddress: string;
            /**
             * IPV6出访能力是否支持
             * @example `true`
             */
            EgressIpv6Enable: boolean;
            /**
             * 实例过期时间。
             * @example `1659801600000`
             */
            ExpiredTime: string;
            /**
             * 实例名称
             * @example `test`
             */
            InstanceName: string;
            /**
             * 可用区ID
             * @example `cn-hangzhou-MAZ5(g,h)`
             */
            ZoneId: string;
            /**
             * 是否支持ipv6
             * @example `true`
             */
            SupportIpv6: boolean;
            /**
             * 公网出口地址
             * @example `47.241.89.244`
             */
            InternetEgressAddress: string;
            /**
             * 实例创建时间
             * @example `2021-10-22 15:36:53.0`
             */
            CreatedTime: string;
            InstanceSpecAttributes: {
                /**
                 * 实例规格
                 */
                SpecAttribute: {
                    /**
                     * 变量值
                     * @example `2500`
                     */
                    Value: string;
                    /**
                     * 变量名
                     * @example `最大每秒请求数`
                     */
                    LocalName: string;
                }[];
            };
            /**
             * 用户交互机Id
             * @example `vsw-t4***eh****d7q****i2f`
             */
            UserVswitchId: string;
            /**
             * 访问控制策略名称。
             * @example `test`
             */
            AclName: string;
            /**
             * 访问控制的类型：
             * - black：黑名单
             * - white：白名单
             * @example `white`
             */
            AclType: string;
            /**
             * 是否开启访问控制功能。取值：
             * - **on**：开启访问控制。
             * - **off**：关闭访问控制。
             * @example `on`
             */
            AclStatus: string;
            /**
             * 访问控制策略ID。
             * @example `acl-uf6f9zfxfxtp5j9ng3yv4`
             */
            AclId: string;
            /**
             * 可访问API网关实例的内网网段
             * @example `[\"172.36.0.0/16\",\"172.31.16.0/20\"]`
             */
            IntranetSegments: string;
            /**
             * IPV6访问控制策略名称
             * @example `testIPV6`
             */
            IPV6AclName: string;
            /**
             * IPV6访问控制策略ID
             * @example `acl-124resFfs235`
             */
            IPV6AclId: string;
            /**
             * IPV6访问控制策略类型
             * - black：黑名单
             * - white：白名单
             * @example `black`
             */
            IPV6AclType: string;
            /**
             * 是否开启IPV6访问控制功能。取值：
             * - **on**：开启访问控制。
             * - **off**：关闭访问控制。
             * @example `off`
             */
            IPV6AclStatus: string;
            /**
             * 专享实例类型
             * - vpc_connect：VPC融合类型专享实例
             * - normal：传统类型专享实例
             * @example `vpc_connect`
             */
            DedicatedInstanceType: string;
            /**
             * 专享实例所在网段
             * - 172.16.0.0/12
             * - 192.168.0.0/16
             * @example `192.168.0.0/16`
             */
            InstanceCidrBlock: string;
            /**
             * VPC融合类型专享实例联通的用户VPC ID
             * @example `vpc-m5eo7khlb4h4f8y9egsdg`
             */
            ConnectVpcId: string;
            NetworkInterfaceAttributes: {
                /**
                 * VPC融合类型专享实例连通的用户VPC内的网络信息
                 */
                NetworkInterfaceAttribute: {
                    /**
                     * 虚拟交换机ID
                     * @example `vsw-2zeqals6rbj51bhjn8b89`
                     */
                    VswitchId: string;
                    /**
                     * 安全组的ID，同一个安全组内的服务可以互相访问。
                     * @example `sg-2zeehz13zcyj1kfk3o85`
                     */
                    SecurityGroupId: string;
                    /**
                     * vSwitch的网段。
                     * @example `192.168.17.0/24`
                     */
                    CidrBlock: string;
                    /**
                     * 可用区ID
                     * @example `cn-shenzhen-d`
                     */
                    ZoneId: string;
                }[];
            };
            /**
             * 纳管该专享实例的专享实例集群的ID
             * @example `apigateway-cluster-sh-1523cafbgffd`
             */
            InstanceClusterId: string;
            /**
             * 可运维开始时间，格式为<i>HH:mmZ</i>（UTC时间）。
             * @example `22:00Z`
             */
            MaintainStartTime: string;
            /**
             * 可运维结束时间，格式为<i>HH:mmZ</i>（UTC时间）。
             * @example `01:00Z`
             */
            MaintainEndTime: string;
            /**
             * VPC融合类型专享实例，可以访问到的用户VPC的内网网段。
             * @example `[\"172.16.0.0/24\",\"172.16.1.0/24\"]`
             */
            ConnectCidrBlocks: string;
            PrivateDnsList: {
                PrivateDns: string[];
            };
            Tags: {
                TagInfo: {
                    Key: string;
                    Value: string;
                }[];
            };
        }[];
    };
}
