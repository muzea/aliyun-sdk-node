export interface ListFullNatEntriesResponse {
    /**
     * 请求ID。
     * @example `F03E41F6-1A74-311F-8D98-124EEE9F37B8`
     */
    RequestId: string;
    /**
     * VPC NAT网关的实例ID。
     * @example `ngw-gw8054kn57y3hq3bv****`
     */
    NatGatewayId: string;
    /**
     * 查询的FULLNAT条目所属的FULLNAT表的ID。
     * @example `fullnat-gw8fz23jezpbblf1j****`
     */
    FullNatTableId: string;
    /**
     * 查询的FULLNAT条目的结果个数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 是否拥有下一个查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一个查询开始的令牌。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 查询的最大结果个数。
     * @example `1`
     */
    MaxResults: number;
    /**
     * 查询的FULLNAT条目的列表信息。
     */
    FullNatEntries: {
        /**
         * FULLNAT条目中提供地址转换的NAT IP地址。
         * @example `192.168.XX.XX`
         */
        NatIp: string;
        /**
         * FULLNAT条目中进行端口映射的前端端口，取值范围：**1**~**65535**。
         * @example `80`
         */
        NatIpPort: string;
        /**
         * FULLNAT条目中进行FULLNAT地址转换的后端IP地址。
         * @example `192.168.XX.XX`
         */
        AccessIp: string;
        /**
         * FULLNAT条目中进行端口映射的后端端口，取值范围：**1**~**65535**。
         * @example `80`
         */
        AccessPort: string;
        /**
         * 转发协议类型，取值：
         * - **TCP**：转发TCP协议的报文。
         * - **UDP**：转发UDP协议的报文。
         * @example `TCP`
         */
        IpProtocol: string;
        /**
         * 弹性网卡ID。
         * @example `eni-gw80wedm8pq0tpr2****`
         */
        NetworkInterfaceId: string;
        /**
         * 弹性网卡的类型，目前仅取值为**Endpoint**（反向终端节点）。
         * @example `Endpoint`
         */
        NetworkInterfaceType: string;
        /**
         * FULLNAT条目的名称。
         * 名称长度在2~128个字符之间，以英文字母或中文开头，可包含数字、短划线（-）和下划线（_）。
         * @example `test`
         */
        FullNatEntryName: string;
        /**
         * FULLNAT条目的描述信息。
         * 长度为2~128个字符，必须以大小写字母或中文开头，但不能以`http://`或`https://`开头。
         * @example `abc`
         */
        FullNatEntryDescription: string;
        /**
         * FULLNAT条目的创建时间。
         * @example `2021-10-27T02:44:40Z`
         */
        CreationTime: string;
        /**
         * FULLNAT条目的ID。
         * @example `fullnat-gw8fz23jezpbblf1j****`
         */
        FullNatEntryId: string;
        /**
         * FULLNAT条目的状态，取值：
         * - **Pending**：配置中。
         * - **Available**：可用。
         * - **Deleting**：删除中。
         * - **Deleted**：已删除。
         * @example `Available`
         */
        FullNatEntryStatus: string;
        /**
         * FullNAT条目所属的FullNAT列表的ID。
         * @example `fulltb-gw88z7hhlv43rmb26****`
         */
        FullNatTableId: string;
    }[];
}
