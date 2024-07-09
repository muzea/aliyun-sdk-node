export interface DescribeNatFirewallPolicyPriorUsedResponse {
    /**
     * 访问控制策略生效的优先级最低值。
     * @example `28`
     */
    End: number;
    /**
     * 访问控制策略生效的优先级最高值。
     * @example `1`
     */
    Start: number;
    /**
     * 返回结果的请求ID。
     * @example `BCDF3907-1011-5504-B015-CC7603C0E6B6`
     */
    RequestId: string;
}
