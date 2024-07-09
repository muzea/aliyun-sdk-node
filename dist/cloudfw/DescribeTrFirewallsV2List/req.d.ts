export interface DescribeTrFirewallsV2ListRequest {
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 转发路由器实例I的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionNo"?: string;
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
    "FirewallSwitchStatus"?: string;
    /**
     * 分页查询时的页码。默认值为**1**。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，显示的每页数据的最大条数。默认值为10.
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * VPC边界防火墙实例ID。
     * @example `vfw-tr-f1799baa9e254651****`
     */
    "FirewallId"?: string;
    /**
     * VPC边界防火墙实例名称。
     * @example `VPC边界防火墙云企业网企业版
    `
     */
    "FirewallName"?: string;
    /**
     * 路由模式。取值：
     * - **managed**：表示自动模式。
     * - **manual**：表示手动模式。
     * > 不设置该参数表示查询所有路由模式的VPC边界防火墙。
     * @example `managed`
     */
    "RouteMode"?: string;
    /**
     * 云企业网实例的ID。
     * @example `cen-rig0t5zi96crkl****`
     */
    "CenId"?: string;
    /**
     * 转发路由器实例ID。
     * @example `tr-uf6egtvyaedvt20xl****`
     */
    "TransitRouterId"?: string;
}
