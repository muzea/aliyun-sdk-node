export interface DescribeForwardTableEntriesResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 当前查询页码。
     * @example `1`
     */
    PageNumber: string;
    /**
     * 列表条目数。
     * @example `100`
     */
    TotalCount: string;
    /**
     * 分页查询时每页的行数。
     * @example `10`
     */
    PageSize: string;
    /**
     * 查询的DNAT列表详细信息。
     */
    ForwardTableEntries: {
        /**
         *  NAT网关的ID。
         * @example `nat-5tawjw5j7sgd2deujxuk0****`
         */
        NatGatewayId: string;
        /**
         * DNAT条目的ID。
         * @example `fwd-5tf66679oi2uoxcvlg0g2****`
         */
        ForwardEntryId: string;
        /**
         * DNAT条目中提供公网访问的弹性公网IP地址。
         * @example `120.XXX.XXX.70`
         */
        ExternalIp: string;
        /**
         * 进行端口转发的外部端口或端口段。
         * @example `22`
         */
        ExternalPort: string;
        /**
         * 通过DNAT条目进行公网通信的实例的私网IP地址。
         * @example `10.XXX.XXX.3`
         */
        InternalIp: string;
        /**
         * 进行端口转发的内部端口或端口段。
         * @example `22`
         */
        InternalPort: string;
        /**
         * DNAT条目的名称。
         * @example `test0`
         */
        ForwardEntryName: string;
        /**
         * DNAT条目状态，取值：
         * - Pending：配置中，可能是创建中或修改中。
         * - Available：可用。
         * - Deleting：删除中。
         * @example `Available`
         */
        Status: string;
        /**
         * 协议类型，取值：
         * - **TCP**：转发TCP协议的报文。
         * - **UDP**：转发UDP协议的报文。
         * - **Any**：转发所有协议的报文。
         * @example `Any`
         */
        IpProtocol: string;
        /**
         * DNAT探测端口。
         * @example `80`
         */
        HealthCheckPort: string;
        /**
         * 提供公网访问的备用弹性公网IP地址。
         * @example `101.XXX.XXX.7`
         */
        StandbyExternalIp: string;
        /**
         * 备用弹性公网IP的状态
         * - Running：开启
         * - Stopping：关闭中
         * - Stopped：关闭
         * - Starting：启动中
         * @example `Stopped`
         */
        StandbyStatus: string;
    }[];
}
