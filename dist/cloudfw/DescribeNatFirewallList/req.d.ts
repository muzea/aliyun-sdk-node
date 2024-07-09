export interface DescribeNatFirewallListRequest {
    /**
     * 返回消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 当前页面的页码。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页查询时，设置每页包含NAT边界防火墙的数量。
     * 默认值为**10**，表示每页包含**10**条结果。最大值为**50**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * NAT防火墙ID。
     * @example `proxy-nat97a******
    `
     */
    "ProxyId"?: string;
    /**
     * NAT防火墙名称。支持大小写英文字母、中文、数字、下划线（_）、长度为[4,50]个字符,且不能以下划线开头。
     * @example `nat-防火墙测试
    `
     */
    "ProxyName"?: string;
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
     * NAT网关的ID。
     * @example `nat-bp123456g******`
     */
    "NatGatewayId"?: string;
    /**
     * 云防火墙状态。取值：
     * - configuring：创建中
     * - deleting：删除中
     * - normal：正常
     * - abnormal：异常
     * - opening：开启中
     * - closing：关闭中
     * - closed：已关闭
     * @example `normal`
     */
    "Status"?: string;
    /**
     * 当前阿里云账号的成员账号UID。
     * @example `147783******`
     */
    "MemberUid"?: number;
}
