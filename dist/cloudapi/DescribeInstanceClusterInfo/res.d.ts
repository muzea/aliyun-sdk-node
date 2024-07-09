export interface DescribeInstanceClusterInfoResponse {
    /**
     * 本次请求的ID
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ015`
     */
    RequestId: string;
    /**
     * 专享实例集群名称
     * @example `test`
     */
    InstanceClusterName: string;
    /**
     * 纳管该专享实例的专享实例集群的ID
     * @example `apigateway-ht-04e41d95e9c1
    `
     */
    InstanceClusterId: string;
    /**
     * 专享实例集群状态
     * @example `RUNNING`
     */
    InstanceClusterStatus: string;
    /**
     * 专享实例集群版本
     * @example `3.5.3.856`
     */
    InstanceClusterVersion: string;
    /**
     * 描述，不超过200个字符
     * @example `v0.0.4`
     */
    Description: string;
    /**
     * 实例所属地域的ID
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 创建时间
     * @example `2022-10-10T18:29:27`
     */
    CreatedTime: string;
    /**
     * 修改时间
     * @example `2023-06-19 10:40:29 +0800`
     */
    ModifiedTime: string;
    /**
     * 专享实例集群的详细信息
     */
    InstanceClusterAttribute: {
        /**
         * https安全策略
         * @example `HTTPS2_TLS1_0`
         */
        HttpsPolicies: string;
        /**
         * 公网出口地址
         * @example `39.106.XX.XX`
         */
        InternetEgressAddress: string;
        /**
         * 内网出口地址
         * @example `100.104.XX.XX/26`
         */
        IntranetEgressAddress: string;
        /**
         * 是否开启内网VPC域名
         */
        VpcIntranetEnable: boolean;
        /**
         * 自定义网段，所配置的网段将被视为私网地址
         * @example `123.0.0.1`
         */
        IntranetSegments: string;
        /**
         * 客户端vpcid
         * @example `vpc-2zew2v4vcg78mXXXX`
         */
        UserVpcId: string;
        /**
         * 客户端vpc的交换机
         * @example `vsw-2zecr5r7ao44tslsXXXX`
         */
        UserVswitchId: string;
        /**
         * VPC实例所属账号ID
         * @example `165438596694XXXX`
         */
        VpcOwnerId: number;
        /**
         * IPV4访问控制策略ID
         * @example `acl-t4n8i4rvvp70kcyuoXXXX`
         */
        IPV4AclId: string;
        /**
         * IPV4访问控制策略名称
         * @example `test-black`
         */
        IPV4AclName: string;
        /**
         * 是否开启IPV4访问控制功能。取值：
         * - on：开启访问控制
         * - off：关闭访问控制
         * @example `on`
         */
        IPV4AclStatus: string;
        /**
         * IPV4访问控制策略类型
         * - black：黑名单
         * - white：白名单
         * @example `black`
         */
        IPV4AclType: string;
        /**
         * IPV6出访能力是否支持
         * @example `true`
         */
        EgressIpv6Enable: boolean;
        /**
         * 是否支持ipv6
         * @example `true`
         */
        SupportIpv6: boolean;
        /**
         * IPV6访问控制策略名称
         * @example `test`
         */
        IPV6AclName: string;
        /**
         * IPV6访问控制策略ID
         * @example `acl-t4nevzhwbpe7cup18XXXX`
         */
        IPV6AclId: string;
        /**
         * 是否开启IPV6访问控制功能。取值：
         * - **on**：开启访问控制
         * - **off**：关闭访问控制
         * @example `on`
         */
        IPV6AclStatus: string;
        /**
         * IPV6访问控制策略类型
         * - black：黑名单
         * - white：白名单
         * @example `white`
         */
        IPV6AclType: string;
        /**
         * 实例集群已开通的VIP列表
         * @example `VPC_INTERNET_IPV6`
         */
        VipTypeList: string;
        /**
         * 是否开启API网关自调用域名
         * @example `false`
         */
        VpcSlbIntranetEnable: boolean;
        /**
         * VPC融合类型实例集群联通的用户VPC ID
         * @example `vpc-p0w3kxxxxxxxxxxxxxxxx`
         */
        ConnectVpcId: string;
        /**
         * VPC融合类型实例集群可以访问到的用户VPC的内网网段
         * @example `["192.168.1.0/24","192.168.0.0/24"]`
         */
        ConnectCidrBlocks: string;
    };
    InstanceList: {
        /**
         * 实例集群包含的专享实例列表
         */
        Instance: {
            /**
             * 实例名称
             * @example `tf-testacceu-central-1apigatewayinstance8752`
             */
            InstanceName: string;
            /**
             * 专享实例ID
             * @example `apigateway-ht-04e41d95e9c1`
             */
            InstanceId: string;
            /**
             * 专享实例状态
             * @example `RUNNING`
             */
            Status: string;
            /**
             * 调用失败时，返回的出错信息
             * @example `Instance not found.`
             */
            ErrorMessage: string;
        }[];
    };
    /**
     * 专享实例集群类型
     * @example `normal`
     */
    InstanceClusterType: string;
}
