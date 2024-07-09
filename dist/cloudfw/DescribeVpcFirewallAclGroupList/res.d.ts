export interface DescribeVpcFirewallAclGroupListResponse {
    /**
     * VPC防火墙访问控制策略组的总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 结果的请求ID。
     * @example `CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D`
     */
    RequestId: string;
    /**
     * VPC防火墙访问控制策略组的信息。
     */
    AclGroupList: {
        /**
         * VPC边界防火墙的访问控制策略组ID。
         * 取值：
         * - VPC边界防火墙防护云企业网时，策略组ID使用云企业网实例ID。
         *   例如：cen-ervw0g12b5jbw*\*\*\*
         * - VPC边界防火墙防护高速通道时，策略组ID使用VPC边界防火墙实例ID。
         *   例如：vfw-a42bbb7b887148c9*\*\*\*
         * @example `vfw-a42bbb7b887148c9****`
         */
        AclGroupId: string;
        /**
         * VPC边界防火墙的访问控制策略组名称。
         * - VPC边界防火墙防护云企业网时，策略组名称使用云企业网名称。
         * - VPC边界防火墙防护高速通道时，策略组名称使用VPC边界防火墙名称。
         * @example `group_test`
         */
        AclGroupName: string;
        /**
         * 当前阿里云账号的成员账号ID。
         * @example `258039427902****`
         */
        MemberUid: string;
        /**
         * VPC边界防火墙访问控制策略组的策略数量。
         * @example `9`
         */
        AclRuleCount: number;
        /**
         * 是否是默认防火墙。取值：
         * - **true**：是默认防火墙。
         * - **false**：不是默认防火墙。
         * @example `true`
         */
        IsDefault: boolean;
    }[];
}
