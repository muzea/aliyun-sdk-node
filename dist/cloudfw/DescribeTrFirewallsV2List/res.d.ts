export interface DescribeTrFirewallsV2ListResponse {
    /**
     * 返回结果的总条数。
     * @example `6`
     */
    TotalCount: string;
    /**
     * 返回结果的请求ID。
     * @example `1471E2EC-F706-5F11-A79B-BD583ACB8297`
     */
    RequestId: string;
    /**
     * VPC边界防火墙列表。
     */
    VpcTrFirewalls: {
        /**
         * VPC边界防火墙的实例名称。
         * @example `VPC边界防火墙`
         */
        VpcFirewallName: string;
        /**
         * VPC边界防火墙的状态。取值：
         * - **opened**：已开启
         * - **closed**：已关闭
         * - **notconfigured**：表示暂未配置VPC边界防火墙
         * - **configured**：表示已配置VPC边界防火墙
         * - **creating**：表示正在创建VPC边界防火墙
         * - **opening**：表示正在开启VPC边界防火墙
         * - **deleting**：表示正在删除VPC边界防火墙
         * > 不设置该参数表示查询所有状态的VPC边界防火墙
         * @example `opened`
         */
        FirewallSwitchStatus: string;
        /**
         *  云企业网实例的ID。
         * @example `cen-03f8s0z052ka3v****`
         */
        CenId: string;
        /**
         * 云企业网实例名称。
         * @example `cen_swas`
         */
        CenName: string;
        /**
         * 路由模式。取值：
         * - **managed**：表示自动模式
         * - **manual**：表示手动模式
         * @example `managed`
         */
        RouteMode: string;
        /**
         * 地域开放状态。取值：
         * - **enable**：已开放，表示该地域允许配置VPC边界防火墙
         * - **disable**：未开放，表示该地域不允许配置VPC边界防火墙
         * @example `enable`
         */
        RegionStatus: string;
        /**
         * 创建VPC边界防火墙的操作结果代码。取值：
         * - **RegionDisable**：表示网络实例所在的地域是VPC边界防火墙不支持的地域, 不允许创建VPC边界防火墙
         * - **空字符串**，表示该网络实例可以正常创建VPC边界防火墙
         * @example ` RegionDisable`
         */
        ResultCode: string;
        /**
         * 转发路由器实例I的地域ID。
         * @example `cn-hangzhou`
         */
        RegionNo: string;
        /**
         * 转发路由器实例ID。
         * @example `tr-2vcmhjs88nil55fvu****`
         */
        TransitRouterId: string;
        /**
         * VPC边界防火墙实例ID。
         * @example `vfw-tr-99bc4f0fc88b4d00****`
         */
        FirewallId: string;
        /**
         * IPS配置信息。
         */
        IpsConfig: {
            /**
             * 基础规则开关。取值：
             * - **1**：开启状态
             * - **0**：关闭状态
             * @example `1`
             */
            BasicRules: number;
            /**
             * 虚拟补丁开关。取值：
             * - **1**：开启状态
             * - **0**：关闭状态
             * @example `1`
             */
            EnableAllPatch: number;
            /**
             * IPS防御模式。取值：
             * - **1**：拦截模式
             * - **0**：观察模式
             * @example `1`
             */
            RunMode: number;
        };
        /**
         * VPC实例所属账号ID。
         * @example `171761785151****`
         */
        OwnerId: number;
        /**
         * 是否可以自动开墙。取值：
         * - **passed**：可以自动开墙
         * - **failed**：不可以自动开墙
         * - **unknown**：未知状态
         * @example `passed`
         */
        PrecheckStatus: string;
        /**
         * 已防护的资源列表。
         */
        ProtectedResource: {
            /**
             * 已防护的资源个数。
             * @example `1`
             */
            Count: number;
            /**
             * 已防护的VPC列表。
             */
            VpcList: string[];
            /**
             * 已防护的VBR列表。
             */
            VbrList: string[];
            /**
             * 已防护的VPN列表。
             */
            VpnList: string[];
            /**
             * 已防护的对端TR列表。
             */
            PeerTrList: string[];
        };
        /**
         * 未防护的资源列表。
         */
        UnprotectedResource: {
            /**
             * 未防护的资源个数。
             * @example `1`
             */
            Count: number;
            /**
             * 未防护的VPC列表。
             */
            VpcList: string[];
            /**
             * 未防护的VBR列表。
             */
            VbrList: string[];
            /**
             * 未防护的VPN列表。
             */
            VpnList: string[];
            /**
             * 未防护的对端TR列表。
             */
            PeerTrList: string[];
        };
    }[];
}
