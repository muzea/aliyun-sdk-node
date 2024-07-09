export interface DescribeVpcFirewallCenListRequest {
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * VPC所在的地域ID。
     * > 关于云防火墙支持地域的详细信息，请参见[支持的地域](~~195657~~)。
     * @example `cn-hangzhou`
     */
    "RegionNo"?: string;
    /**
     * 网络实例ID。
     * @example `vpc-8vbwbo90rq0anm6t****`
     */
    "NetworkInstanceId"?: string;
    /**
     * VPC边界防火墙的状态。取值：
     * - **opened**：已开启。
     * - **closed**：已关闭。
     * - **notconfigured**：表示暂未配置VPC边界防火墙。
     * - **configured**：表示已配置但未开启VPC边界防火墙。
     * > 不设置该参数表示查询所有状态的VPC边界防火墙。
     * @example `opened`
     */
    "FirewallSwitchStatus"?: string;
    /**
     * VPC边界防火墙的实例ID。
     * @example `vfw-m5e7dbc4y****`
     */
    "VpcFirewallId"?: string;
    /**
     * VPC边界防火墙的实例名称。
     * @example `测试环境防火墙`
     */
    "VpcFirewallName"?: string;
    /**
     * 云企业网实例ID。
     * @example `cen-x5jayxou71ad73****`
     */
    "CenId"?: string;
    /**
     * 分页查询时，设置当前页面的页码。
     * 默认值为1，表示返回第1页数据。
     * @example `1`
     */
    "CurrentPage"?: string;
    /**
     * 分页查询时，设置每页包含VPC边界防火墙的数量。
     * 默认值为10，表示每页包含10条结果。最大值为50。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 路由模式。取值：
     * - **auto**：表示自动模式。
     * - **manual**：表示手动模式。
     * > 不设置该参数表示查询所有路由模式的VPC边界防火墙。
     * @example `auto`
     */
    "RouteMode"?: string;
    /**
     * 当前阿里云账号的成员账号（其他阿里云账号）UID。
     * @example `258039427902****`
     */
    "MemberUid"?: string;
    /**
     * 转发实例路由器类型。可选值：
     * - **Basic**：基础版转发路由器。
     * - **Enterprise**：企业版转发路由器。
     * @example `Basic`
     */
    "TransitRouterType"?: string;
}
