export interface ListNatIpCidrsResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `7479A224-4A28-4895-9604-11F48BCE6A88`
     */
    RequestId: string;
    /**
     * 查询到的NAT IP地址段的列表条目数。
     * @example `1`
     */
    TotalCount: string;
    /**
     * NAT IP地址段列表。
     */
    NatIpCidrs: {
        /**
         * NAT IP地址段的创建时间。
         * @example `2021-06-28T20:50Z`
         */
        CreationTime: string;
        /**
         * NAT IP地址段实例ID。
         * @example `vpcnatcidr-gw8ov42ei6xh1jys2****`
         */
        NatIpCidrId: string;
        /**
         * 是否为默认NAT IP地址段。取值：
         * - **true**：是默认NAT IP地址段。
         * - **false**：不是默认NAT IP地址段。
         * @example `true`
         */
        IsDefault: boolean;
        /**
         * NAT IP地址段的状态。取值：**Available**，表示可用状态。
         * @example `Available`
         */
        NatIpCidrStatus: string;
        /**
         * NAT IP地址段的名称。
         * @example `Name`
         */
        NatIpCidrName: string;
        /**
         * NAT IP地址段。
         * @example `172.16.0.0/24`
         */
        NatIpCidr: string;
        /**
         * NAT IP地址段所属的VPC NAT网关实例ID。
         * @example `ngw-gw8v16wgvtq26vh59****`
         */
        NatGatewayId: string;
        /**
         * NAT IP地址段的描述信息。
         * @example `test`
         */
        NatIpCidrDescription: string;
    }[];
}
