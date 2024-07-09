export interface DescribeVpcFirewallListResponse {
    /**
     * VPC边界防火墙的总数量。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 本次请求的ID。
     * @example `850A84D6-0DE4-4797-A1E8-00090125k8g2`
     */
    RequestId: string;
    /**
     * VPC边界防火墙的详细信息。
     */
    VpcFirewalls: {
        /**
         * VPC边界防火墙的互通类型。取值：**expressconnect**，表示高速通道。
         * @example `expressconnect`
         */
        ConnectType: string;
        /**
         * VPC边界防火墙的实例ID。
         * @example `vfw-m5e7dbc4y****`
         */
        VpcFirewallId: string;
        /**
         * 地域开放状态。取值：
         * - **enable**：已开放，表示该地域允许配置VPC边界防火墙。
         * - **disable**：未开放，表示该地域不允许配置VPC边界防火墙。
         * @example `enable`
         */
        RegionStatus: string;
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
         * VPC边界防火墙开关的状态。取值：
         * - **opened**：已开启。
         * - **closed**：已关闭。
         * - **notconfigured**：表示暂未配置VPC边界防火墙。
         * @example `opened`
         */
        FirewallSwitchStatus: string;
        /**
         * 本端VPC的详细信息。
         */
        LocalVpc: {
            /**
             * 本端VPC的实例名称。
             * @example `测试用实例`
             */
            VpcName: string;
            /**
             * 本端VPC的实例ID。
             * @example `vpc-8vbwbo90rq0anm6t****`
             */
            VpcId: string;
            /**
             * 本端VPC的授权状态。取值：authorized，表示已授权。
             * @example `authorized`
             */
            AuthorizationStatus: string;
            /**
             * 本端VPC所属阿里云账号的UID。
             * @example `158039427902****`
             */
            OwnerId: number;
            /**
             * 本端VPC所属地域ID。
             * @example `cn-hangzhou`
             */
            RegionNo: string;
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
                     * 本端VPC的下一跳实例ID。
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
             * 对端VPC的实例名称。
             * @example `测试vpc2`
             */
            VpcName: string;
            /**
             * 对端VPC的实例ID。
             * @example `vpc-8vbwbo90rq0anm6t****`
             */
            VpcId: string;
            /**
             * 对端VPC的授权状态。取值：**authorized**，表示已授权。
             * @example `authorized`
             */
            AuthorizationStatus: string;
            /**
             * 对端VPC所属的阿里云账号的UID。
             * @example `158039427902****`
             */
            OwnerId: number;
            /**
             * 对端VPC所属地域ID。
             * @example `cn-hangzhou`
             */
            RegionNo: string;
            /**
             * 对端VPC网段列表信息。
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
                     * 对端VPC的下一跳实例ID。
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
         * IPS配置信息。
         */
        IpsConfig: {
            /**
             * 基础规则开关。取值：
             * - **1**：开启状态。
             * - **0**：关闭状态。
             * @example `1`
             */
            BasicRules: number;
            /**
             * 虚拟补丁开关。取值：
             * - **1**：开启状态。
             * - **0**：关闭状态。
             * @example `1`
             */
            EnableAllPatch: number;
            /**
             * IPS防御模式。取值：
             * - **1**：拦截模式。
             * - **0**：观察模式。
             * @example `0`
             */
            RunMode: number;
        };
        /**
         * 阿里云成员账号的UID。
         * @example `258039427902****`
         */
        MemberUid: string;
        /**
         * 创建VPC边界防火墙的操作结果代码。取值：
         * - **Unauthorized**：表示存在未授权的VPC, 不允许创建VPC边界防火墙。
         * - **RegionDisable**：表示VPC所在的地域是VPC边界防火墙不支持的地域, 不允许创建VPC边界防火墙。
         * - **空字符串**：表示该网络实例可以正常创建VPC边界防火墙。
         * @example `Unauthorized`
         */
        ResultCode: string;
        /**
         * 连接子类型。取值：
         * - **vpc2vpc**：高速通道。
         * - **vpcpeer**：对等连接。
         * @example `vpcpeer`
         */
        ConnectSubType: string;
    }[];
}
