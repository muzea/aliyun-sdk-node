export interface DescribeNetworkAclsResponse {
    /**
     * 请求ID。
     * @example `A1707FC0-430C-423A-B624-284046B20399`
     */
    RequestId: string;
    /**
     * 列表数据总数。
     * @example `3`
     */
    TotalCount: string;
    /**
     * 当前查询每页的行数。
     * @example `2`
     */
    PageSize: string;
    /**
     * 当前查询页码。
     * @example `1`
     */
    PageNumber: string;
    /**
     * 网络ACL的详细信息。
     */
    NetworkAcls: {
        /**
         * 网络ACL的状态。取值：
         * - **Available**：可用。
         * - **Modifying**：配置中。
         * @example `Available`
         */
        Status: string;
        /**
         * 网络ACL的创建时间，使用UTC时间格式，格式为`yyyy-MM-ddTHH:mm:ssZ`。
         * @example `2019-11-01T06:08:46Z`
         */
        CreationTime: string;
        /**
         * 网络ACL的描述信息。
         * @example `This is my NetworkAcl.`
         */
        Description: string;
        /**
         * 网络ACL的ID。
         * @example `nacl-a2do9e413e0spxscd****`
         */
        NetworkAclId: string;
        /**
         * 网络ACL的名称。
         * @example `acl-8`
         */
        NetworkAclName: string;
        /**
         * 入方向规则信息。
         */
        IngressAclEntries: {
            /**
             * 授权策略，取值：
             * - **accept**：允许。
             * - **drop**：拒绝。
             * @example `accept`
             */
            Policy: string;
            /**
             * 入方向规则条目的ID。
             * @example `nae-5dk86arlydmezasw****`
             */
            NetworkAclEntryId: string;
            /**
             * 入方向规则条目的名称。
             * @example `acl-3`
             */
            NetworkAclEntryName: string;
            /**
             * 源地址段。
             * @example `10.0.0.0/24`
             */
            CidrBlock: string;
            /**
             * 协议类型，取值：
             * - **icmp**：网络控制报文协议。
             * - **tcp**：传输控制协议。
             * - **udp**：用户数据报协议。
             * - **all**：支持所有协议。
             * @example `all`
             */
            Protocol: string;
            /**
             * 入方向规则的目的端口范围。
             * - 当入方向规则的**Protocol**（协议类型）为**all**或**icmp**时，端口范围为 **-1/-1**，表示不限制端口。
             * - 当入方向规则的**Protocol**（协议类型）为**tcp**或**udp**时，端口范围为**1~65535**，格式为**1/200**或**80/80**，表示端口1到端口200或端口80。
             * @example `-1/-1`
             */
            PortRange: string;
            /**
             * 规则优先级。取值范围：**1~100**。默认值：**1**。
             * @example `1`
             */
            Priority: number;
            /**
             * 规则类型。取值：
             * - **system**：系统创建
             * - **custom**：用户创建
             * @example `system`
             */
            Type: string;
            /**
             * 入方向规则的描述信息。
             * @example `This is IngressAclEntries.`
             */
            Description: string;
        }[];
        /**
         * 出方向规则信息。
         */
        EgressAclEntries: {
            /**
             * 授权策略，取值：
             * - **accept**：允许。
             * - **drop**：拒绝。
             * @example `accept`
             */
            Policy: string;
            /**
             * 出方向规则条目的ID。
             * @example `nae-a2d447uw4tillfvgb****`
             */
            NetworkAclEntryId: string;
            /**
             * 出方向规则条目的名称。
             * @example `acl-2`
             */
            NetworkAclEntryName: string;
            /**
             * 目标地址段。
             * @example `10.0.0.0/24`
             */
            CidrBlock: string;
            /**
             * 协议类型，取值：
             * - **icmp**：网络控制报文协议。
             * - **tcp**：传输控制协议。
             * - **udp**：用户数据报协议。
             * - **all**：支持所有协议。
             * @example `all`
             */
            Protocol: string;
            /**
             * 出方向规则的目的端口范围。
             * - 当出方向规则的**Protocol**（协议类型）为**all**或**icmp**时，端口范围为 **-1/-1**，表示不限制端口。
             * - 当出方向规则的**Protocol**（协议类型）为**tcp**或**udp**时，端口范围为**1~65535**，格式为**1/200**或**80/80**，表示端口1到端口200或端口80。
             * @example `-1/-1`
             */
            PortRange: string;
            /**
             * 规则优先级。取值范围：**1~100**。默认值：**1**。
             * @example `1`
             */
            Priority: number;
            /**
             * 规则类型。取值：
             * - **system**：系统创建
             * - **custom**：用户创建
             * @example `system`
             */
            Type: string;
            /**
             * 出方向规则的描述信息。
             * @example `This is EgressAclEntries.`
             */
            Description: string;
        }[];
        /**
         * 关联的资源集合。
         */
        Resources: {
            /**
             * 关联资源的状态。取值：
             * - **BINDED**：已绑定。
             * - **BINDING**：绑定中。
             * - **UNBINDING**：解绑中。
             * @example `BINDING`
             */
            Status: string;
            /**
             * 关联资源的类型。
             * @example `Network`
             */
            ResourceType: string;
            /**
             * 关联资源的ID。
             * @example `n-****`
             */
            ResourceId: string;
            /**
             * ENS节点ID。
             * @example `cn-fuzhou-telecom`
             */
            EnsRegionId: string;
        }[];
    }[];
}
