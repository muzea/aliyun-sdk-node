export interface ModifyVpcFirewallConfigureRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * VPC边界防火墙的实例ID。
     * > 您可以调用[DescribeVpcFirewallList](~~342932~~)接口查询VPC边界防火墙的实例ID。
     * @example `vfw-m5e7dbc4y****`
     */
    "VpcFirewallId": string;
    /**
     * VPC边界防火墙的实例名称。
     * @example `测试环境防火墙`
     */
    "VpcFirewallName": string;
    /**
     * 本端VPC的网段信息，以JSON格式表示，具体包含以下参数：
     * - **RouteTableId**：表示本端VPC的路由表ID。
     * - **RouteEntryList**：该参数使用JSON格式，包含DestinationCidr（表示本端VPC的目标网段）和NextHopInstanceId（表示本端VPC的下一跳实例ID）。
     * > 您可以调用[DescribeVpcFirewallDetail](~~342892~~)接口查询VPC边界防火墙的本端VPC网段信息。
     * @example `[{"RouteTableId":"vtb-1234","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]},{"RouteTableId":"vtb-1235","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]}]`
     */
    "LocalVpcCidrTableList": string;
    /**
     * 对端VPC的网段信息，以JSON格式表示，具体包含以下参数：
     * - **RouteTableId**：表示对端VPC的路由表ID。
     * - **RouteEntryList**：该参数使用JSON格式，包含DestinationCidr（表示对端VPC的目标网段）和NextHopInstanceId（表示对端VPC的下一跳实例ID）。
     * > 您可以调用[DescribeVpcFirewallDetail](~~342892~~)接口查询VPC边界防火墙的对端VPC网段信息。
     * @example `[{"RouteTableId":"vtb-1234","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]},{"RouteTableId":"vtb-1235","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]}]`
     */
    "PeerVpcCidrTableList": string;
    /**
     * 当前阿里云账号的成员账号UID。
     * @example `258039427902****`
     */
    "MemberUid"?: string;
}
