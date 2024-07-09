export interface UpdateNetworkAclEntriesRequest {
    /**
     * 入方向规则的信息。
     */
    "IngressAclEntries"?: {
        /**
         * 入方向规则条目的ID。
         * **N**的取值为**0**~**99**，即最多可以更新100条入方向规则的信息。
         * @example `nae-2zepn32de59j8m4****`
         */
        NetworkAclEntryId: string;
        /**
         * 规则类型，取值为**custom**，表示自定义。
         * @example `custom`
         */
        EntryType: string;
        /**
         * 入方向规则条目的名称。
         * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
         * @example `acl-3`
         */
        NetworkAclEntryName: string;
        /**
         * 授权策略。取值：
         * - **accept**：允许。
         * - **drop**：拒绝。
         * @example `accept`
         */
        Policy: string;
        /**
         * 源地址网段。
         * @example `10.0.0.0/24`
         */
        SourceCidrIp: string;
        /**
         * IP版本：
         * - **IPv4**
         * - **IPv6**
         * @example `IPv4`
         */
        IpVersion: string;
        /**
         * 入方向规则的描述信息。
         * 描述长度为1～256个字符，不能以`http://`或`https://`开头。
         * @example `This is IngressAclEntries.`
         */
        Description: string;
        /**
         * 协议类型。取值：
         * - **icmp**：网络控制报文协议。
         * - **gre**：通用路由封装协议。
         * - **tcp**：传输控制协议。
         * - **udp**：用户数据报协议。
         * - **all**：支持所有协议。
         * - **icmpv6**: ipv6网络控制报文协议。
         * @example `all`
         */
        Protocol: string;
        /**
         * 入方向规则的源端口范围。
         * - 当入方向规则的**Protocol**（协议类型）为**all**、**icmp**或**gre**时，端口范围为-1/-1，表示不限制端口。
         * - 当入方向规则的**Protocol**（协议类型）为**tcp**或**udp**时，端口范围为**1**~**65535**，格式为**1/200**或**80/80**，表示端口1到端口200或端口80。
         * @example `-1/-1`
         */
        Port: string;
    }[];
    /**
     * 出方向规则的信息。
     */
    "EgressAclEntries"?: {
        /**
         * 出方向规则条目的ID。
         * **N**的取值为**0**~**99**，即最多可以更新100条出方向规则的信息。
         * @example `nae-2zecs97e0brcge46****`
         */
        NetworkAclEntryId: string;
        /**
         * 规则类型，取值为**custom**，表示自定义。
         * @example `custom`
         */
        EntryType: string;
        /**
         * 出方向规则条目的名称。
         * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
         * @example `acl-2`
         */
        NetworkAclEntryName: string;
        /**
         * 授权策略。取值：
         * - **accept**：允许。
         * - **drop**：拒绝。
         * @example `accept`
         */
        Policy: string;
        /**
         * 出方向规则的描述信息。
         * 描述长度为1～256个字符，不能以`http://`或`https://`开头。
         * @example `This is EgressAclEntries.`
         */
        Description: string;
        /**
         * 协议类型。取值：
         * - **icmp**：网络控制报文协议。
         * - **gre**：通用路由封装协议。
         * - **tcp**：传输控制协议。
         * - **udp**：用户数据报协议。
         * - **all**：支持所有协议。
         * - **icmpv6**：ipv6网络控制报文协议
         * @example `all`
         */
        Protocol: string;
        /**
         * 目标地址的网络。
         * @example `10.0.0.0/24`
         */
        DestinationCidrIp: string;
        /**
         * IP版本：
         * - **IPv4**
         * - **IPv6**
         * @example `IPv4`
         */
        IpVersion: string;
        /**
         * 出方向规则的目的端口范围。
         * - 当出方向规则的**Protocol**（协议类型）为**all**、**icmp**或**gre**时，端口范围为-1/-1，表示不限制端口。
         * - 当出方向规则的**Protocol**（协议类型）为**tcp**或**udp**时，端口范围为**1**~**65535**，格式为**1/200**或**80/80**，表示端口1到端口200或端口80。
         * @example `-1/-1`
         */
        Port: string;
    }[];
    /**
     * 是否更新入方向规则。取值：
     * - **true**：更新。
     * - **false**（默认）：不更新。
     * > 该参数不支持增量修改，当ACL已经有一条入方向规则，如果想要再增加一条入方向规则，调用该API时必须把这两条规则都传入，如果只传入新增的入方向规则，会把已有的入方向规则删除。
     * @example `false`
     */
    "UpdateIngressAclEntries"?: boolean;
    /**
     * 是否更新出方向规则。取值：
     * - **true**：更新。
     * - **false**（默认）：不更新。
     * > 该参数不支持增量修改，当ACL已经有一条出方向规则，如果想要再增加一条出方向规则，调用该API时必须把这两条规则都传入，如果只传入新增的出方向规则，会把已有的出方向规则删除。
     * @example `false`
     */
    "UpdateEgressAclEntries"?: boolean;
    /**
     * 网络ACL的ID。
     * @example `nacl-bp1lhl0taikrzxsc****`
     */
    "NetworkAclId": string;
    /**
     * 网络ACL所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否是预检
     * @example `true`
     */
    "DryRun"?: boolean;
}
