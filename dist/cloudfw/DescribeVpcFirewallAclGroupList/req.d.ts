export interface DescribeVpcFirewallAclGroupListRequest {
    /**
     * 接收消息的语言类型。
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * VPC防火墙的配置状态。
     * - **notconfigured**：VPC边界防火墙未配置（即未创建防火墙） 。
     * - **configured**：VPC边界防火墙已配置（即已创建了防火墙）。
     * - 不填：表示查询所有VPC边界防火墙的访问控制策略。
     * @example `configured`
     */
    "FirewallConfigureStatus"?: string;
    /**
     * 分页查询时，显示的当前页的页码。
     * 默认值为1。
     * @example `1`
     */
    "CurrentPage"?: string;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * 可设置值最大为50。
     * @example `10`
     */
    "PageSize"?: string;
}
