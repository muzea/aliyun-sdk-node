export interface DescribeTrFirewallsV2DetailResponse {
    /**
     * VPC边界防火墙实例名称。
     * @example `cloudfirewall-manual`
     */
    FirewallName: string;
    /**
     * 返回结果的请求ID。
     * @example `7E53A7FB-3EB9-5E33-8E50-B8F417D1E02B`
     */
    RequestId: string;
    /**
     * VPC边界防火墙实例ID。
     * @example `vfw-tr-9c7c711abdfa4d80****`
     */
    FirewallId: string;
    /**
     * 防火墙状态。取值：
     * - Creating：创建中
     * - Deleting：删除中
     * - Ready：就绪
     * @example `Ready`
     */
    FirewallStatus: string;
    /**
     * 云企业网实例ID。
     * @example `cen-37nddhri7jf0d2****`
     */
    CenId: string;
    /**
     * 转发路由器实例ID。
     * @example `tr-wz9y8sgug8b1xb416****`
     */
    TransitRouterId: string;
    /**
     * 转发路由器实例I的地域ID。
     * @example `cn-shanghai`
     */
    RegionNo: string;
    /**
     * 防火墙ENI ID。
     * @example `eni-uf621u00nafypeex****`
     */
    FirewallEniId: string;
    /**
     * 防火墙ENI 所在的VPC ID。
     * @example `vpc-2zeppcci782zeh2bk****`
     */
    FirewallEniVpcId: string;
    /**
     * 防火墙ENI 所在的VSWITCH ID。
     * @example `vsw-uf6ptq1kl1c1d9pw9****`
     */
    FirewallEniVswitchId: string;
    /**
     * 防火墙描述。
     * @example `VPC边界防火墙`
     */
    FirewallDescription: string;
    /**
     * 路由模式。取值：
     * - **managed**：表示自动模式
     * - **manual**：表示手动模式
     * @example `managed`
     */
    RouteMode: string;
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
     * 自动模式下防火墙VPC网段。
     * @example `10.0.0.0/16`
     */
    FirewallVpcCidr: string;
    /**
     * 自动模式下防火墙VPC中存放防火墙ENI的子网网段。
     * @example `10.0.1.0/24`
     */
    FirewallSubnetCidr: string;
    /**
     * 自动模式下防火墙VPC中用于连接TR的子网主用网段。
     * @example `10.0.2.0/24`
     */
    TrAttachmentMasterCidr: string;
    /**
     * 自动模式下防火墙VPC中用于连接TR的子网备用网段。
     * @example `10.0.3.0/24`
     */
    TrAttachmentSlaveCidr: string;
}
