export interface CreateTrFirewallV2Request {
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 云防火墙的名称。
     * @example `VPC边界防火墙云企业网企业版`
     */
    "FirewallName"?: string;
    /**
     * 路由模式。取值：
     * - **managed**：表示自动模式
     * - **manual**：表示手动模式
     * @example `managed`
     */
    "RouteMode"?: string;
    /**
     * 转发路由器实例ID。
     * @example `tr-m5etmb2q7e0mxcur****`
     */
    "TransitRouterId"?: string;
    /**
     * 转发路由器实例I的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionNo"?: string;
    /**
     * 自动模式下防火墙VPC网段。
     * @example `10.0.0.0/16`
     */
    "FirewallVpcCidr"?: string;
    /**
     * 自动模式下防火墙VPC中存放防火墙ENI的子网网段。
     * @example `10.0.1.0/24`
     */
    "FirewallSubnetCidr"?: string;
    /**
     * 自动模式下防火墙VPC中用于连接TR的子网备用网段。
     * @example `10.0.0.16/28`
     */
    "TrAttachmentSlaveCidr"?: string;
    /**
     * 自动模式下防火墙VPC中用于连接TR的子网主用网段。
     * @example `10.0.3.0/24`
     */
    "TrAttachmentMasterCidr"?: string;
    /**
     * 云企业网实例ID。
     * @example `cen-4xbjup276au29r****`
     */
    "CenId"?: string;
    /**
     * 防火墙描述。
     * @example `VPC边界防火墙云企业网企业版`
     */
    "FirewallDescription"?: string;
    /**
     * 手动模式下创建防火墙ENI的VPC ID。
     * @example `vpc-wz9r5qvryn0lg3atb****`
     */
    "FirewallVpcId"?: string;
    /**
     * 手动模式下创建防火墙ENI的VSW ID。
     * @example `vsw-uf6ydz3vqj77mr5l6****`
     */
    "FirewallVswitchId"?: string;
    /**
     * 交换机备可用区。
     * @example `cn-chengdu-b`
     */
    "TrAttachmentSlaveZone"?: string;
    /**
     * 交换机主可用区。
     * @example `cn-chengdu-a`
     */
    "TrAttachmentMasterZone"?: string;
}
