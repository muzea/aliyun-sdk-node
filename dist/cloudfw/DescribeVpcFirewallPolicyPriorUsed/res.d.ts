export interface DescribeVpcFirewallPolicyPriorUsedResponse {
    /**
     * 访问控制策略生效的优先级最低值。
     * @example `150`
     */
    End: number;
    /**
     * 访问控制策略生效的优先级最高值。
     * @example `1`
     */
    Start: number;
    /**
     * 结果的请求ID。
     * @example `CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D`
     */
    RequestId: string;
}
