export interface ListIoTCloudConnectorBackhaulRouteResponse {
    /**
     * 请求id。
     * @example `94032572-8758-575E-B306-86F59D1B826E`
     */
    RequestId: string;
    /**
     * 网络连接id。
     * @example `cciot-xxxx`
     */
    NetLinkId: string;
    /**
     * 数组，返回示例目录。
     */
    Routes: {
        /**
         * 路由条目的目标网段。
         * @example `10.33.190.0/24`
         */
        DestinationCidrBlock: string;
        /**
         * 下一跳实例ID。
         * @example `eni-uf677iw3xihqxiz2ssir`
         */
        NextHopId: string;
        /**
         * 自定义路由条目的下一跳的类型，取值：
         * - **Instance**（默认值）：ECS实例。
         * - **HaVip**：高可用虚拟IP。
         * - **RouterInterface**：路由器接口。
         * - **NetworkInterface**：弹性网卡。
         * - **VpnGateway**：VPN网关。
         * - **IPv6Gateway**：IPv6网关。
         * - **NatGateway**：NAT网关。
         * - **Attachment**：转发路由器。
         * - **VpcPeer**：VPC对等连接。
         * @example `NetworkInterface`
         */
        NextHopType: string;
        /**
         * 描述信息。
         * @example `full cidr block route`
         */
        Description: string;
        /**
         * 路由状态，取值：
         * - **init**: 初始态
         * - **published**: 已下发
         * @example `published`
         */
        Status: string;
    }[];
}
