export interface CreateNetworkAclResponse {
    /**
     * 网络ACL的ID。
     * @example `nacl-a2do9e413e0spzasx****`
     */
    NetworkAclId: string;
    /**
     * 请求ID。
     * @example `0ED8D006-F706-4D23-88ED-E11ED28DCAC0`
     */
    RequestId: string;
    /**
     * 网络ACL的属性。
     */
    NetworkAclAttribute: {
        /**
         * 网络ACL的状态。取值：
         * - **Available**：可用。
         * - **Modifying**：配置中。
         * @example `Modifying`
         */
        Status: string;
        /**
         * 网络ACL关联的VPC的ID。
         * @example `vpc-a2d33rfpl72k5xsscd****`
         */
        VpcId: string;
        /**
         * 网络ACL创建的时间。
         * @example `2021-12-25 11:33:27`
         */
        CreationTime: string;
        /**
         * 网络ACL的描述信息。
         * @example `This is my NetworkAcl.`
         */
        Description: string;
        /**
         * 网络ACL的名称。
         * @example `acl-1	`
         */
        NetworkAclName: string;
        /**
         * 网络ACL的ID。
         * @example `nacl-a2do9e413e0spdefr****`
         */
        NetworkAclId: string;
        /**
         * 网络ACL所属的地域ID。
         * @example `cn-hangzhou	`
         */
        RegionId: string;
        IngressAclEntries: {
            /**
             * 入方向规则列表。
             */
            IngressAclEntry: {
                /**
                 * 入方向规则条目的ID。
                 * @example `nae-a2dk86arlydmexscd****`
                 */
                NetworkAclEntryId: string;
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
                 * @example `This is IngressAclEntries.	`
                 */
                Description: string;
                /**
                 * 源地址段。
                 * @example `10.0.0.0/24	`
                 */
                SourceCidrIp: string;
                /**
                 * 协议类型，取值：
                 * - **icmp**：网络控制报文协议。
                 * - **gre**：通用路由封装协议。
                 * - **tcp**：传输控制协议。
                 * - **udp**：用户数据报协议。
                 * - **all**：所有协议。
                 * @example `all`
                 */
                Protocol: string;
                /**
                 * 入方向规则的目的端口范围。
                 * - 当入方向规则的**Protocol**（协议类型）为**all**、**icmp**或**gre**时，端口范围为-1/-1，表示不限制端口。
                 * - 当入方向规则的**Protocol**（协议类型）为**tcp**或**udp**时，端口范围为**1**~**65535**，格式为**1/200**或**80/80**，表示端口1到端口200或端口80。
                 * @example `-1/-1`
                 */
                Port: string;
            }[];
        };
        EgressAclEntries: {
            /**
             * 出方向规则列表。
             */
            EgressAclEntry: {
                /**
                 * 出方向规则条目的ID。
                 * @example `nae-a2d447uw4tillxsdc****`
                 */
                NetworkAclEntryId: string;
                /**
                 * 出方向规则条目的名称。
                 * @example `acl-2`
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
                 * - **all**：所有协议。
                 * @example `all`
                 */
                Protocol: string;
                /**
                 * 目标地址段。
                 * @example `10.0.0.0/24`
                 */
                DestinationCidrIp: string;
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
             * 关联的资源列表。
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
                 * 关联资源的实例ID。
                 * @example `vsw-bp1de348lntdwgthy****`
                 */
                ResourceId: string;
            }[];
        };
    };
}
