export interface CreateNatFirewallControlPolicyResponse {
    /**
     * 安全访问控制策略的唯一标识ID。
     * > 修改安全访问控制策略，需要提供该策略的唯一标识ID，该ID可调用DescribeNatFirewallControlPolicy接口获取。
     * @example `6504d2fb-ab36-49c3-92a6-*****`
     */
    AclUuid: string;
    /**
     * 返回结果的请求ID。
     * @example `0DC783F1-B3A7-578D-8A63-*****`
     */
    RequestId: string;
}
