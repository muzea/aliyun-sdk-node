export interface CreateVpcFirewallConfigureRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * VPC边界防火墙的实例名称。
     * @example `测试用实例`
     */
    "VpcFirewallName": string;
    /**
     * 本端VPC的实例ID。
     * @example `vpc-8vbwbo90rq0anm6t****`
     */
    "LocalVpcId": string;
    /**
     * 本端VPC所属地域ID。
     * > 关于云防火墙支持地域的详细信息，请参见[支持的地域](~~195657~~)。
     * @example `cn-hangzhou`
     */
    "LocalVpcRegion": string;
    /**
     * 对端VPC的实例ID。
     * @example `vpc-wb8vbo90rq0anm6t****`
     */
    "PeerVpcId": string;
    /**
     * 对端VPC所属地域ID。
     * > 关于云防火墙支持地域的详细信息，请参见[支持的地域](~~195657~~)。
     * @example `cn-shanghai`
     */
    "PeerVpcRegion": string;
    /**
     * 设置VPC边界防火墙创建后的开启状态。取值：
     * - **open**（默认）：创建VPC边界防火墙后自动开启防护。
     * - **close**：创建VPC边界防火墙后不自动开启防护。您可以调用接口[ModifyVpcFirewallSwitchStatus](~~342935~~)开启防护。
     * @example `open`
     */
    "FirewallSwitch": string;
    /**
     * 本端VPC的网段列表，以JSON格式表示，具体包含以下参数：
     * - **RouteTableId**：表示本端VPC的路由表ID。
     * - **RouteEntryList**：该参数使用JSON格式，包含DestinationCidr（表示本端VPC的目标网段）和NextHopInstanceId（表示本端VPC的下一跳实例ID）。
     * @example `[{"RouteTableId":"vtb-1234","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]},{"RouteTableId":"vtb-1235","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]}]`
     */
    "LocalVpcCidrTableList": string;
    /**
     * 对端VPC的网段列表，以JSON格式表示，具体包含以下参数：
     * - **RouteTableId**：表示对端VPC的路由表ID。
     * - **RouteEntryList**：该参数使用JSON格式，包含DestinationCidr（表示对端VPC的目标网段）和NextHopInstanceId（表示对端VPC的下一跳实例ID）。
     * @example `[{"RouteTableId":"vtb-1234","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]},{"RouteTableId":"vtb-1235","RouteEntryList":[{"DestinationCidr":"192.168.XX.XX/24","NextHopInstanceId":"vrt-m5eb5me6c3l5sezae****"}]}]`
     */
    "PeerVpcCidrTableList": string;
    /**
     * 阿里云成员账号的UID。
     * @example `258039427902****`
     */
    "MemberUid"?: string;
}
