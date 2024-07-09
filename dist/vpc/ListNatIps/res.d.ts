export interface ListNatIpsResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `7E78CEEA-BF8F-44D1-9DCD-D9141135B71E`
     */
    RequestId: string;
    /**
     * 查询到的NAT IP地址结果数目。
     * @example `1`
     */
    TotalCount: string;
    /**
     * NAT IP地址列表。
     */
    NatIps: {
        /**
         * 是否是默认NAT IP地址。取值：
         * - **true**：是默认NAT IP地址。
         * - **false**：不是默认NAT IP地址。
         * @example `true`
         */
        IsDefault: boolean;
        /**
         * 查询的NAT IP地址。
         * @example `192.168.0.126`
         */
        NatIp: string;
        /**
         * 查询的NAT IP地址所在的地址段。
         * @example `192.168.0.0/24`
         */
        NatIpCidr: string;
        /**
         * 查询的NAT IP地址实例ID。
         * @example `vpcnatip-gw8a863sut1zijxh0****`
         */
        NatIpId: string;
        /**
         * 查询的NAT IP地址的描述信息。
         * @example `default`
         */
        NatIpDescription: string;
        /**
         * 查询的NAT IP地址所属的VPC NAT网关实例ID。
         * @example `ngw-gw8v16wgvtq26vh59****`
         */
        NatGatewayId: string;
        /**
         * 查询的NAT IP地址的名称。
         * @example `default`
         */
        NatIpName: string;
        /**
         * 查询的NAT IP地址的状态。取值：
         * - **Available**：可用状态。
         * - **Deleted**：已删除。
         * - **Deleting**：删除中。
         * - **Creating**：创建中。
         * - **Associated**：已关联SNAT或DNAT条目。
         * - **Associating**：关联SNAT或DNAT条目中。
         * @example `Available`
         */
        NatIpStatus: string;
    }[];
}
