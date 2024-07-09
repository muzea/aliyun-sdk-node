export interface DescribeVpcFirewallDetailResponse {
    /**
     * VPC边界防火墙的互通类型。取值：**expressconnect**，表示高速通道。
     * @example `expressconnect`
     */
    ConnectType: string;
    /**
     * VPC边界防火墙实例ID。
     * @example `vfw-m5e7dbc4y****`
     */
    VpcFirewallId: string;
    /**
     * 本次请求的ID。
     * @example `850A84D6-0DE4-4797-A1E8-00090125g4d2`
     */
    RequestId: string;
    /**
     * 高速通道的带宽规格。单位：Mbps。
     * @example `2`
     */
    Bandwidth: number;
    /**
     * VPC边界防火墙的实例名称。
     * @example `测试防火墙`
     */
    VpcFirewallName: string;
    /**
     * VPC边界防火墙的状态。取值：
     * - **opened**：已开启。
     * - **closed**：已关闭。
     * - **notconfigured**：表示暂未配置VPC边界防火墙。
     * - **configured**：表示已配置VPC边界防火墙。
     * @example `opened`
     */
    FirewallSwitchStatus: string;
    /**
     * 本端VPC的详细信息。
     */
    LocalVpc: {
        /**
         * 本端VPC的实例ID。
         * @example `vpc-8vbwbo90rq0anm6t****`
         */
        VpcId: string;
        /**
         * 本端VPC的实例名称。
         * @example `测试用实例`
         */
        VpcName: string;
        /**
         * 本端VPC所属地域ID。
         * @example `cn-hangzhou`
         */
        RegionNo: string;
        /**
         * 本端VPC中弹性网卡私网IP。
         * @example `192.168.XX.XX`
         */
        EniPrivateIpAddress: string;
        /**
         * 本端VPC中路由器接口ID。
         * @example `vrt-m5eb5me6c3l5sezae****`
         */
        RouterInterfaceId: string;
        /**
         * 本端VPC中弹性网卡的实例ID。
         * @example `eni-8vbhfosfqv2rff42****`
         */
        EniId: string;
        /**
         * 本端VPC的网段列表信息。
         */
        VpcCidrTableList: {
            /**
             * 本端VPC的路由表ID。
             * @example `vtb-1234`
             */
            RouteTableId: string;
            /**
             * 本端VPC的路由条目列表。
             */
            RouteEntryList: {
                /**
                 * 本端VPC中的下一跳实例ID。
                 * @example `vrt-m5eb5me6c3l5sezae****`
                 */
                NextHopInstanceId: string;
                /**
                 * 本端VPC的目标网段。
                 * @example `192.168.XX.XX/24`
                 */
                DestinationCidr: string;
            }[];
        }[];
    };
    /**
     * 对端VPC的详细信息。
     */
    PeerVpc: {
        /**
         * 对端VPC的实例ID。
         * @example `vpc-90rq0anm6t8vbwbo****`
         */
        VpcId: string;
        /**
         * 对端VPC的实例名称。
         * @example `测试vpc2`
         */
        VpcName: string;
        /**
         * 对端VPC所属地域ID。
         * @example `cn-hangzhou`
         */
        RegionNo: string;
        /**
         * 对端VPC中弹性网卡私网IP。
         * @example `192.168.XX.XX`
         */
        EniPrivateIpAddress: string;
        /**
         * 对端VPC中路由器接口ID。
         * @example `vrt-m5eb5me6c3l5sezae****`
         */
        RouterInterfaceId: string;
        /**
         * 对端VPC中弹性网卡的实例ID。
         * @example `eni-8vbhfosfqv2rff42****`
         */
        EniId: string;
        /**
         * 对端VPC的网段列表信息。
         */
        VpcCidrTableList: {
            /**
             * 对端VPC的路由表ID。
             * @example `vtb-1256`
             */
            RouteTableId: string;
            /**
             * 对端VPC路由条目列表信息。
             */
            RouteEntryList: {
                /**
                 * 对端VPC中的下一跳实例ID。
                 * @example `vrt-m5eb5me6c3l5sezae****`
                 */
                NextHopInstanceId: string;
                /**
                 * 对端VPC的目标网段。
                 * @example `192.168.XX.XX/24`
                 */
                DestinationCidr: string;
            }[];
        }[];
    };
    /**
     * 云防火墙成员账号的UID。
     * @example `258039427902****`
     */
    MemberUid: string;
}
