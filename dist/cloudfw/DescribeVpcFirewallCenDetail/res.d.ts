export interface DescribeVpcFirewallCenDetailResponse {
    /**
     * VPC边界防火墙的互通类型。取值：**cen**，表示云企业网。
     * @example `cen`
     */
    ConnectType: string;
    /**
     * VPC边界防火墙的实例名称。
     * @example `测试防火墙`
     */
    VpcFirewallName: string;
    /**
     * VPC边界防火墙的实例ID。
     * @example `vfw-m5e7dbc4y****`
     */
    VpcFirewallId: string;
    /**
     * VPC边界防火墙的开关状态。取值：
     * - **opened**：已开启。
     * - **closed**：已关闭。
     * - **notconfigured**：未配置。
     * @example `opened`
     */
    FirewallSwitchStatus: string;
    /**
     * 本次请求的ID。
     * @example `850A84D6-0DE4-4797-A1E8-00090125g4d2`
     */
    RequestId: string;
    /**
     * VPC的详细信息。
     */
    LocalVpc: {
        /**
         * VPC的实例ID。
         * @example `vpc-8vbwbo90rq0anm6t****`
         */
        VpcId: string;
        /**
         * 云企业网转发路由器（CEN-TR）的版本。取值：
         * - **Basic**：基础版。
         * - **Enterprise**：企业版。
         * @example `Basic`
         */
        TransitRouterType: string;
        /**
         * 路由模式,。取值：
         * - auto：表示自动模式。
         * - manual：表示手动模式。
         * @example `auto`
         */
        RouteMode: string;
        /**
         * 创建VPC边界防火墙的VPC实例ID。
         * @example `vpc-2zefk9fbn8j7v585g****`
         */
        NetworkInstanceId: string;
        /**
         * VPC所属地域ID。
         * @example `cn-hangzhou`
         */
        RegionNo: string;
        /**
         * 路由模式为手动模式时指定的vSwitch的ID。
         * @example `vsw-zeq4o875u****`
         */
        ManualVSwitchId: string;
        /**
         * VPC所属阿里云账户的UID。
         * @example `158039427902****`
         */
        OwnerId: string;
        /**
         * 网络实例的类型。取值：**VPC**。
         * @example `VPC`
         */
        NetworkInstanceType: string;
        /**
         * VPC的实例名称。
         * @example `测试用实例`
         */
        VpcName: string;
        /**
         * 路由模式是否支持手动模式。取值：
         * - **1**：支持。
         * - **0**：不支持。
         * @example `0`
         */
        SupportManualMode: string;
        /**
         * CEN-TR的实例ID。
         * @example `tr-2zetwxskej633l3u1****`
         */
        TransitRouterId: string;
        /**
         * 网络实例的连接ID。
         * @example `tr-attach-sxig7bye51fid5****`
         */
        AttachmentId: string;
        /**
         * 网络实例的名称。
         * @example `测试业务vpc`
         */
        NetworkInstanceName: string;
        /**
         * 网络实例的连接名称
         * @example `本地测试`
         */
        AttachmentName: string;
        /**
         * VPC的网段列表信息。
         */
        VpcCidrTableList: {
            /**
             * VPC的路由表ID。
             * @example `vtb-1234`
             */
            RouteTableId: string;
            /**
             * VPC的路由条目列表。
             */
            RouteEntryList: {
                /**
                 * VPC中的下一跳实例ID。
                 * @example `vrt-m5eb5me6c3l5sezae****`
                 */
                NextHopInstanceId: string;
                /**
                 * VPC的目标网段。
                 * @example `192.168.XX.XX/24`
                 */
                DestinationCidr: string;
            }[];
        }[];
        /**
         * 弹性网卡列表。
         */
        EniList: {
            /**
             * VPC中弹性网卡的实例ID。
             * @example `eni-8vbhfosfqv2rff42****`
             */
            EniId: string;
            /**
             * VPC中弹性网卡的私网IP。
             * @example `192.168.XX.XX`
             */
            EniPrivateIpAddress: string;
            /**
             * VPC中弹性网卡的虚拟交换机ID。
             * @example `vsw-wz9viido7j436b0n1****`
             */
            EniVSwitchId: string;
        }[];
        /**
         * VPC边界防火墙防护的网段列表。
         */
        DefendCidrList: string[];
    };
    /**
     * 防火墙所使用VPC。
     */
    FirewallVpc: {
        /**
         * VPC实例ID。
         * @example `vpc-bp1245k5oagy2bp74****`
         */
        VpcId: string;
        /**
         * VPC的网段。
         * @example `10.0.0.0/8`
         */
        VpcCidr: string;
        /**
         * 虚拟交换机ID。
         * @example `vsw-bp1sqg9wms9wxcs1****`
         */
        VswitchId: string;
        /**
         * 虚拟交换机的网段。
         * @example `10.0.0.1/24`
         */
        VswitchCidr: string;
        /**
         * 可用区ID。
         * @example `cn-hangzhou-i`
         */
        ZoneId: string;
        /**
         * CEN基础版创建VPC防火墙时是否允许配置防火墙VPC网段。取值：
         * - **1**：允许。
         * - **0**：不允许。
         * @example `0`
         */
        AllowConfiguration: number;
    };
}
