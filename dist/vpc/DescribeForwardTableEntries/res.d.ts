export interface DescribeForwardTableEntriesResponse {
    /**
     * 每页包含的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `A6C4A8B1-7561-4509-949C-20DEB40D71E6`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目数。
     * @example `5`
     */
    TotalCount: number;
    ForwardTableEntries: {
        /**
         * 查询的DNAT列表详细信息。
         */
        ForwardTableEntry: {
            /**
             * DNAT条目的状态，取值：
             * - **Pending**：配置中，可能是创建中或修改中。
             * - **Available**：可用。
             * - **Deleting**：删除中。
             * @example `Available`
             */
            Status: string;
            /**
             * DNAT条目的ID。
             * @example `fwd-119smw5tk****`
             */
            ForwardEntryId: string;
            /**
             * 私网IP地址。
             * - 当查询公网NAT网关的DNAT条目时，该返回参数为通过DNAT条目进行公网通信的ECS实例的私网IP地址。
             * - 当查询VPC NAT网关的DNAT条目时，该返回参数为需要通过DNAT规则进行通信的私网IP地址。
             * @example `192.168.XX.XX`
             */
            InternalIp: string;
            /**
             * - 当查询公网NAT网关的DNAT条目时，该参数为进行端口转发的内部端口或端口段。
             * - 当查询VPC NAT网关的DNAT条目时，该参数为需要映射的目标ECS实例端口。
             * @example `25`
             */
            InternalPort: string;
            /**
             * DNAT条目的名称。
             * @example `ForwardEntry-1`
             */
            ForwardEntryName: string;
            /**
             * DNAT条目所属DNAT表的ID。
             * @example `ftb-11tc6xgmv****`
             */
            ForwardTableId: string;
            /**
             * 协议类型，取值：
             * - **tcp**：转发TCP协议的报文。
             * - **udp**：转发UDP协议的报文。
             * - **any**：转发所有协议的报文。
             * @example `tcp`
             */
            IpProtocol: string;
            /**
             * - 当查询公网NAT网关的DNAT条目时，该返回参数为进行端口转发的外部端口或端口段。
             * - 当查询VPC NAT网关的DNAT条目时，该返回参数为NAT IP地址被外部网络访问的端口。
             * @example `80`
             */
            ExternalPort: string;
            /**
             * - 当查询公网NAT网关的DNAT条目时，该返回参数为DNAT条目中提供公网访问的公网IP地址。
             * - 当查询VPC NAT网关的DNAT条目时，该返回参数为供外部网络访问的NAT IP地址。
             * @example `139.79.XX.XX`
             */
            ExternalIp: string;
            /**
             * DNAT条目所属的NAT网关的ID。
             * @example `ngw-bp1uewa15k4iy5770****`
             */
            NatGatewayId: string;
        }[];
    };
}
