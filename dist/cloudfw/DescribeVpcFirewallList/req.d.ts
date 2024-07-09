export interface DescribeVpcFirewallListRequest {
    /**
     * 请求和接收消息的语言类型。取值：
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
     * VPC实例ID。
     * @example `vpc-8vbwbo90rq0anm6t****`
     */
    "VpcId"?: string;
    /**
     * VPC边界防火墙的状态。取值：
     * - **opened**：已开启。
     * - **closed**：已关闭。
     * - **notconfigured**：表示暂未配置VPC边界防火墙。
     * - **configured**：表示已配置VPC边界防火墙。
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
     * 分页查询时，设置当前页面的页码。
     * 默认值为**1**，表示返回第**1**页数据。
     * @example `1`
     */
    "CurrentPage"?: string;
    /**
     * 分页查询时，设置每页包含VPC边界防火墙的数量。
     * 默认值为**10**，表示每页包含**10**条结果。最大值为**50**。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 当前阿里云账号的成员账号UID。
     * @example `258039427902****`
     */
    "MemberUid"?: string;
    /**
     * 连接子类型。取值：
     * - **vpc2vpc**：高速通道。
     * - **vpcpeer**：对等连接。
     * @example `vpcpeer`
     */
    "ConnectSubType"?: string;
    /**
     * 对端VPC云账号UID。
     * @example `258039427902****`
     */
    "PeerUid"?: string;
}
