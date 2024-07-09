export interface DescribeVpcFirewallCenListResponse {
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
         * VPC边界防火墙的互通类型。取值：cen，表示云企业网。
         * @example `cen`
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
         * 云企业网实例ID。
         * @example `cen-x5jayxou71ad73****`
         */
        CenId: string;
        /**
         * VPC边界防火墙的实例名称。
         * @example `测试防火墙`
         */
        VpcFirewallName: string;
        /**
         * 创建VPC边界防火墙的操作结果代码。取值：
         * - **Unauthorized**：表示存在未授权的网络实例, 不允许创建VPC边界防火墙。
         * - **RegionDisable**：表示网络实例所在的地域是VPC边界防火墙不支持的地域, 不允许创建VPC边界防火墙。
         * - **OpsDisable**：表示不允许创建VPC边界防火墙。
         * - **VbrNotSupport**：表示云企业网中的VBR不支持创建VPC边界防火墙。
         * - 空字符串，表示该网络实例可以正常创建VPC边界防火墙。
         * @example `Unauthorized`
         */
        ResultCode: string;
        /**
         * 云企业网实例名称。
         * @example `测试云企业网`
         */
        CenName: string;
        /**
         * VPC边界防火墙开关的状态。取值：
         * - **opened**：已开启。
         * - **closed**：已关闭。
         * - **notconfigured**：表示暂未配置VPC边界防火墙。
         * @example `opened`
         */
        FirewallSwitchStatus: string;
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
             * - **Basic**：基础版转发路由器。
             * - **Enterprise**：企业版转发路由器。
             * @example `Basic`
             */
            TransitRouterType: string;
            /**
             * 网络实例ID。
             * @example `vpc-2zefk9fbn8j7v585g****`
             */
            NetworkInstanceId: string;
            /**
             * 路由模式。取值：
             * - **auto**：表示自动模式。
             * - **manual**：表示手动模式。
             * @example `auto`
             */
            RouteMode: string;
            /**
             * VPC所属地域ID。
             * @example `cn-hangzhou`
             */
            RegionNo: string;
            /**
             * VPC的授权状态。取值：**authorized**，表示已授权。
             * @example `authorized`
             */
            AuthorizationStatus: string;
            /**
             * 路由模式为手动模式时指定的vSwitch的ID。
             * @example `vsw-zeq4o875u****`
             */
            ManualVSwitchId: string;
            /**
             * VPC所属阿里云账号的UID。
             * @example `158039427902****`
             */
            OwnerId: number;
            /**
             * 网络实例的类型。取值：
             * - **VPC**（Virtual Private Cloud）。
             * - **VBR**（Virtual Border Router）。
             * - **CCN**（Cloud Connect Network）。
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
             * 网络实例的名称。
             * @example `测试业务VPC`
             */
            NetworkInstanceName: string;
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
             * VPC边界防火墙防护的网段列表。
             */
            DefendCidrList: string[];
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
         * 当前阿里云账号的成员账号（其他阿里云账号）UID。
         * @example `258039427902****`
         */
        MemberUid: string;
        /**
         * 是否可以自动开墙，即云防火墙会根据路由学习，自动防护VPC流量。取值：
         * - **passed**：可以自动开墙。
         * - **failed**：不可以自动开墙。
         * - **unknown**：未知状态。
         * @example `failed`
         */
        PrecheckStatus: string;
    }[];
}
