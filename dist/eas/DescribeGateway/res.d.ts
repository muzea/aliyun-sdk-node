export interface DescribeGatewayResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 私有网关所在地域。
     * @example `cn-wulanchabu`
     */
    Region: string;
    /**
     * 私有网关ID。
     * @example `gw-1uhcqmsc7x22******`
     */
    GatewayId: string;
    /**
     * 私有网关创建时间。使用UTC时间。
     * @example `2020-05-19T14:19:42Z`
     */
    CreateTime: string;
    /**
     * 私有网关更新时间。使用UTC时间。
     * @example `2021-02-24T11:52:17Z`
     */
    UpdateTime: string;
    /**
     * 内网访问是否开启。
     * @example `true`
     */
    IntranetEnabled: boolean;
    /**
     * 内网访问域名。
     * @example `gw-1uhcqmsc7x22******-1801786532******-vpc.cn-wulanchabu.pai-eas.aliyuncs.com`
     */
    IntranetDomain: string;
    /**
     * 公网访问是否开启。
     * @example `true`
     */
    InternetEnabled: boolean;
    /**
     * 公网访问域名。
     * @example `gw-1uhcqmsc7x22******-1801786532******.cn-wulanchabu.pai-eas.aliyuncs.com`
     */
    InternetDomain: string;
    /**
     * 私有网关使用的机型。
     * @example `ecs.r7.4xlarge
    `
     */
    InstanceType: string;
    /**
     * 创建私有网关账号的主账号UID。
     * @example `11234*******`
     */
    ParentUid: string;
    /**
     * 创建私有网关账号的UID。
     * @example `20123*******`
     */
    CallerUid: string;
    /**
     * 私有网关状态。
     * @example `PrivateGatewayRunning`
     */
    Status: string;
    /**
     * 内网访问端点列表。
     */
    IntranetLinkedVpcList: {
        /**
         * 专有网络的ID。
         * @example `vpc-bp1g11zvka6zr3i******`
         */
        VpcId: string;
        /**
         * 虚拟交换机ID。
         * @example `vsw-bp1txzxsdck43pp******`
         */
        VSwitchId: string;
        /**
         * Ip地址。
         * @example `192.168.10.11`
         */
        Ip: string;
        /**
         * 状态。可能值：
         * - Creating：创建中。
         * - Running：运行中。
         * @example `Running`
         */
        Status: string;
        /**
         * 安全组ID。
         * @example `sg-2ze4pgstgszvgq******`
         */
        SecurityGroupId: string;
    }[];
    /**
     * 公网访问控制策略列表。
     */
    InternetAclPolicyList: {
        /**
         * 允许访问的IP段。
         * @example `192.168.1.1/32`
         */
        Entry: string;
        /**
         * 状态。
         * @example `Running`
         */
        Status: string;
        /**
         * 说明。
         * @example `test`
         */
        Comment: string;
    }[];
    /**
     * 私有网关别名。
     * @example `mygateway1`
     */
    GatewayName: string;
    /**
     * 自运维集群ID。
     * @example `c935eadf284c14c2da57a2a13ad6******`
     */
    ExternalClusterId: string;
}
