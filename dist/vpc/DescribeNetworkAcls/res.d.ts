export interface DescribeNetworkAclsResponse {
    /**
     * 分页查询时每页的行数。
     * @example `10`
     */
    PageSize: string;
    /**
     * 请求ID。
     * @example `F7DDDC17-FA06-4AC2-8F35-59D2470FCFC1`
     */
    RequestId: string;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: string;
    /**
     * 列表条目数。
     * @example `2`
     */
    TotalCount: string;
    NetworkAcls: {
        /**
         * 网络ACL的详细信息。
         */
        NetworkAcl: {
            /**
             * 网络ACL的状态。取值：
             * - **Available**：可用。
             * - **Modifying**：配置中。
             * @example `Available`
             */
            Status: string;
            /**
             * 关联的VPC的ID。
             * @example `vpc-m5ebpc2xh64mqm27e****`
             */
            VpcId: string;
            /**
             * 网络ACL的创建时间。
             * @example `2021-12-25 11:44:17`
             */
            CreationTime: string;
            /**
             * 网络ACL的描述信息。
             * @example `This is my NetworkAcl.`
             */
            Description: string;
            /**
             * 网络ACL的名称。
             * @example `acl-1`
             */
            NetworkAclName: string;
            /**
             * 网络ACL的ID。
             * @example `nacl-a2do9e413e0spxscd****`
             */
            NetworkAclId: string;
            /**
             * 网络ACL所属阿里云账号ID。
             * @example `253460731706911258`
             */
            OwnerId: number;
            /**
             * 网络ACL所属的地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            IngressAclEntries: {
                /**
                 * 入方向规则信息。
                 */
                IngressAclEntry: {
                    /**
                     * 入方向规则条目的ID。
                     * @example `nae-a2dk86arlydmezasw****`
                     */
                    NetworkAclEntryId: string;
                    /**
                     * 规则类型，取值为**custom**，表示自定义。
                     * @example `custom`
                     */
                    EntryType: string;
                    /**
                     * 入方向规则条目的名称。
                     * @example `acl-3	`
                     */
                    NetworkAclEntryName: string;
                    /**
                     * 授权策略，取值：
                     * - **accept**：允许。
                     * - **drop**：拒绝。
                     * @example `accept`
                     */
                    Policy: string;
                    /**
                     * 入方向规则的描述信息。
                     * @example `This is IngressAclEntries.`
                     */
                    Description: string;
                    /**
                     * 源地址段。
                     * @example `10.0.0.0/24	`
                     */
                    SourceCidrIp: string;
                    /**
                     * BGP组的IP版本。取值：
                     * - **IPv4**：IPv4版本。
                     * - **IPv6**：IPv6版本。
                     * @example `IPv4`
                     */
                    IpVersion: string;
                    /**
                     * 协议类型，取值：
                     * - **icmp**：网络控制报文协议。
                     * - **gre**：通用路由封装协议。
                     * - **tcp**：传输控制协议。
                     * - **udp**：用户数据报协议。
                     * - **all**：支持所有协议。
                     * @example `all`
                     */
                    Protocol: string;
                    /**
                     * 入方向规则的目的端口范围。
                     * - 当入方向规则的**Protocol**（协议类型）为**all**、**icmp**或**gre**时，端口范围为-1/-1，表示不限制端口。
                     * - 当入方向规则的**Protocol**（协议类型）为**tcp**或**udp**时，端口范围为**1**~**65535**，格式为**1/200**或**80/80**，表示端口1到端口200或端口80。
                     * @example `-1/-1	`
                     */
                    Port: string;
                }[];
            };
            EgressAclEntries: {
                /**
                 * 出方向规则信息。
                 */
                EgressAclEntry: {
                    /**
                     * 出方向规则条目的ID。
                     * @example `nae-a2d447uw4tillfvgb****`
                     */
                    NetworkAclEntryId: string;
                    /**
                     * 规则类型，取值为**custom**，表示自定义。
                     * @example `custom`
                     */
                    EntryType: string;
                    /**
                     * 出方向规则条目的名称。
                     * @example `acl-2	`
                     */
                    NetworkAclEntryName: string;
                    /**
                     * 授权策略，取值：
                     * - **accept**：允许。
                     * - **drop**：拒绝。
                     * @example `accept`
                     */
                    Policy: string;
                    /**
                     * 出方向规则的描述信息。
                     * @example `This is EgressAclEntries.`
                     */
                    Description: string;
                    /**
                     * 协议类型，取值：
                     * - **icmp**：网络控制报文协议。
                     * - **gre**：通用路由封装协议。
                     * - **tcp**：传输控制协议。
                     * - **udp**：用户数据报协议。
                     * - **all**：支持所有协议。
                     * @example `all`
                     */
                    Protocol: string;
                    /**
                     * 目标地址段。
                     * @example `10.0.0.0/24	`
                     */
                    DestinationCidrIp: string;
                    /**
                     * 实例的IP协议版本。取值：
                     * - **Ipv4**： IPv4版本。
                     * - **Ipv6**： IPv6版本。
                     * @example `IPV4`
                     */
                    IpVersion: string;
                    /**
                     * 出方向规则的目的端口范围。
                     * - 当出方向规则的**Protocol**（协议类型）为**all**、**icmp**或**gre**时，端口范围为-1/-1，表示不限制端口。
                     * - 当出方向规则的**Protocol**（协议类型）为**tcp**或**udp**时，端口范围为**1**~**65535**，格式为**1/200**或**80/80**，表示端口1到端口200或端口80。
                     * @example `-1/-1	`
                     */
                    Port: string;
                }[];
            };
            Resources: {
                /**
                 * 关联的资源。
                 */
                Resource: {
                    /**
                     * 关联资源的状态。取值：
                     * - **BINDED**：已绑定。
                     * - **BINDING**：绑定中。
                     * - **UNBINDING**：已解绑。
                     * @example `BINDED`
                     */
                    Status: string;
                    /**
                     * 关联资源的类型。
                     * @example `VSwitch`
                     */
                    ResourceType: string;
                    /**
                     * 关联资源的ID。
                     * @example `vsw-bp1de348lntdwcdf****`
                     */
                    ResourceId: string;
                }[];
            };
            Tags: {
                /**
                 * 标签列表信息。
                 */
                Tag: {
                    /**
                     * 标签键。
                     * @example `FinanceDept`
                     */
                    Key: string;
                    /**
                     * 标签值。
                     * @example `FinanceJoshua`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
}
