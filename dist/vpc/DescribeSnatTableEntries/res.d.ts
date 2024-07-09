export interface DescribeSnatTableEntriesResponse {
    /**
     * 每页包含的条目数。
     * @example `5`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `6D7E89B1-1C5B-412B-8585-4908E222EED5`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    SnatTableEntries: {
        /**
         * 查询的SNAT列表详细信息。
         */
        SnatTableEntry: {
            /**
             * SNAT条目状态，取值：
             * - **Pending**：配置中，可能是创建中或修改中。
             * - **Available**：可用。
             * - **Deleting**：删除中。
             * @example `Pending`
             */
            Status: string;
            /**
             * SNAT条目的名称。
             * @example `SnatEntry-1`
             */
            SnatEntryName: string;
            /**
             * - 当查询公网NAT网关时，该返回参数为通过SNAT功能访问互联网的交换机ID。
             * - 当查询VPC NAT网关时，该返回参数为通过SNAT功能访问外部网络的交换机ID。
             * @example `vsw-3xbdsffvfgdfds****`
             */
            SourceVSwitchId: string;
            /**
             * SNAT条目的源网段。
             * @example `116.22.XX.XX/24`
             */
            SourceCIDR: string;
            /**
             * SNAT条目的ID。
             * @example `snat-kmd6nv8fy****`
             */
            SnatEntryId: string;
            /**
             * SNAT条目所属的SNAT表ID。
             * @example `stb-gz3r3odawdgffde****`
             */
            SnatTableId: string;
            /**
             * - 当查询公网NAT网关的SNAT条目时，该返回参数为SNAT条目中的EIP。
             *
             * - 当查询VPC NAT网关的SNAT条目时，该返回参数为SNAT条目中的NAT IP地址。
             * @example `116.22.XX.XX`
             */
            SnatIp: string;
            /**
             * SNAT条目所属的NAT网关的ID。
             * @example `ngw-bp1uewa15k4iy5770****`
             */
            NatGatewayId: string;
            /**
             * 是否打开IP亲和性。取值：
             * - **0**：关闭IP亲和性。
             * - **1**：打开IP亲和性。
             * > 打开IP亲和性开关后，如果SNAT条目绑定多个EIP或NAT IP，同一个客户端将使用相同的EIP或NAT IP进行访问，否则客户端将从绑定的EIP或NAT IP中随机选取进行访问。
             * @example `1`
             */
            EipAffinity: string;
        }[];
    };
}
