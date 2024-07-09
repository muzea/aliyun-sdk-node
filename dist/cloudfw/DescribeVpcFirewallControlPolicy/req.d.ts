export interface DescribeVpcFirewallControlPolicyRequest {
    /**
     * 请求和接收消息的语言类型。
     * 取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * VPC边界防火墙的实例ID。取值：
     * - 当VPC边界防火墙防护通过云企业网连接的两个VPC之间的流量时，该参数值使用云企业网实例ID。
     * - 当VPC边界防火墙防护通过高速通道连接的两个VPC之间的流量时，该参数值使用VPC边界防火墙实例ID。
     * > 您可以调用[DescribeVpcFirewallAclGroupList](~~159760~~)接口获取该ID。
     * @example `vfw-a42bbb7b887148c9****`
     */
    "VpcFirewallId": string;
    /**
     * 分页查询时，设置当前页的页码。
     * @example `1`
     */
    "CurrentPage": string;
    /**
     * 分页查询时，设置每页包含VPC边界防火墙的访问控制策略数量。
     * 可设置值最大为50。
     * @example `10`
     */
    "PageSize": string;
    /**
     * VPC边界防火墙访问控制策略中的访问源地址。支持使用模糊查询。
     * > Source可以是单个CIDR地址或地址簿名称。
     * @example `192.0.XX.XX/24`
     */
    "Source"?: string;
    /**
     * VPC边界防火墙访问控制策略中的目的地址。支持模糊查询。
     * > Destination可以是单个CIDR地址或域名，也可以是地址薄名称。
     * @example `192.0.XX.XX/24`
     */
    "Destination"?: string;
    /**
     * VPC边界防火墙访问控制策略的描述信息。支持模糊查询。
     * @example `test`
     */
    "Description"?: string;
    /**
     * VPC边界防火墙访问控制策略中访问流量的协议类型。取值：
     * - **TCP**
     * - **UDP**
     * - **ICMP**
     * - **ANY**（查询所有协议类型）
     * > 不设置该参数表示查询所有协议类型。
     * @example `TCP`
     */
    "Proto"?: string;
    /**
     * VPC边界防火墙访问控制策略中设置的访问流量通过云防火墙的方式（动作）。取值：
     * - **accept**：放行
     * - **drop**：拒绝
     * - **log**：观察
     * > 不设置该参数表示查询所有动作。
     * @example `accept`
     */
    "AclAction"?: string;
    /**
     * 当前阿里云账号的成员账号UID。
     * @example `258039427902****`
     */
    "MemberUid"?: string;
    /**
     * VPC边界防火墙访问控制策略的唯一标识ID。
     * @example `4037fbf7-3e39-4634-92a4-d0155247****`
     */
    "AclUuid"?: string;
    /**
     * 访问控制策略的启用状态。取值：
     * - **true**：启用访问控制策略
     * - **false**：不启用访问控制策略
     * @example `true`
     */
    "Release"?: string;
    /**
     * 访问控制策略的策略有效期的重复类型。取值：
     * - **Permanent**（默认）：总是
     * - **None**：指定单次时间
     * - **Daily**：每天
     * - **Weekly**：每周
     * - **Monthly**：每月
     * @example `Permanent`
     */
    "RepeatType"?: string;
}
