export interface ModifyVpcFirewallDefaultIPSConfigRequest {
    /**
     * 访问者源IP地址。
     * @example `192.0.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * VPC边界防火墙的实例ID。取值：
     * - VPC边界防火墙防护云企业网内的网络实例（网络实例包含VPC、VBR和CCN）和指定VPC之间的互访流量时，实例ID使用云企业网实例ID。您可以通过调用[DescribeVpcFirewallCenList](~~345777~~)接口，查询云企业网的实例ID。
     * - VPC边界防火墙防护通过高速通道连接的两个VPC之间的互访流量时，实例ID使用VPC边界防火墙实例ID。您可以通过调用[DescribeVpcFirewallList](~~342932~~)接口，查询VPC边界防火墙的实例ID。
     * @example `vfw-m5e7dbc4y****`
     */
    "VpcFirewallId": string;
    /**
     * 基础规则开关。取值：
     * - **1**：开。
     * - **0**：关。
     * @example `1`
     */
    "BasicRules": string;
    /**
     * 虚拟补丁开关。取值：
     * - **1**：开。
     * - **0**：关。
     * @example `1`
     */
    "EnableAllPatch": string;
    /**
     * IPS防御模式。取值：
     * - **1**：拦截模式。
     * - **0**：观察模式。
     * @example `0`
     */
    "RunMode": string;
    /**
     * 当前阿里云账号的成员账号UID。
     * @example `258039427902****`
     */
    "MemberUid"?: string;
}
