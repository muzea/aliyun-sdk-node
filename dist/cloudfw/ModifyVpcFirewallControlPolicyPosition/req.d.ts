export interface ModifyVpcFirewallControlPolicyPositionRequest {
    /**
     * 请求和接收消息的语言类型。
     * 取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * VPC边界防火墙的访问控制策略组ID。您可调用[DescribeVpcFirewallAclGroupList](~~159760~~)接口获取该ID。
     * 取值：
     * - VPC边界防火墙防护云企业网时，策略组ID使用云企业网实例ID。
     *
     *    例如cen-ervw0g12b5jbw*\*\*\*
     * - VPC边界防火墙防护高速通道时，策略组ID使用VPC边界防火墙实例ID。
     *   例如vfw-a42bbb7b887148c9*\*\*\*
     * @example `vfw-a42bbb7b887148c9****`
     */
    "VpcFirewallId": string;
    /**
     * 访问控制策略优先级修改后，该策略的新优先级。
     * > 新优先级的取值范围，请参见[查询优先级生效范围API](~~474145~~)
     * @example `1`
     */
    "NewOrder": string;
    /**
     * 访问控制策略优先级修改前，该策略的原优先级。
     * > 此参数不推荐使用, 建议使用AclUuid参数指定要修改的策略。
     * @example `5`
     */
    "OldOrder"?: string;
    /**
     * 访问控制策略的唯一标识ID。
     * 修改访问控制策略时，需要提供该策略的唯一标识ID。您可调用[DescribeVpcFirewallControlPolicy](~~159758~~)接口获取该ID。
     * @example `2746d9ff-5d7c-449d-a2a9-ccaa15fe****`
     */
    "AclUuid"?: string;
}
