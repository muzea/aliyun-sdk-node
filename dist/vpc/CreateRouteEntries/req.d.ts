export interface CreateRouteEntriesRequest {
    /**
     * 路由表所属地域的ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 路由条目信息列表。
     */
    "RouteEntries": {
        /**
         * 自定义路由条目的目标网段，支持IPv4、IPv6和前缀列表的目标网段。最多支持输入50个目标网段。需满足以下要求：
         *
         * - 目标网段不能指向100.64.0.0/10或被100.64.0.0/10包含。
         *
         * - 同一张路由表内的不同路由条目的目标网段不能相同。
         * @example `192.168.0.0/24`
         */
        DstCidrBlock: string;
        /**
         *  要添加自定义路由条目的路由表ID。 最多支持输入50个路由表ID。
         * @example `vtb-bp145q7glnuzd****`
         */
        RouteTableId: string;
        /**
         * IP协议的版本。最多支持输入50个IP协议的版本。取值：
         * - **4**：IPv4协议。
         * - **6**：IPv6协议。
         * @example `4`
         */
        IpVersion: number;
        /**
         * 自定义路由条目的下一跳实例的ID。最多支持输入50个实例ID。
         * @example `i-j6c2fp57q8rr4jlu****`
         */
        NextHop: string;
        /**
         * 自定义路由条目的下一跳的类型。最多支持输入50个下一跳类型。取值：
         * - **Instance**（默认值）：ECS实例。
         * - **HaVip**：高可用虚拟IP。
         * - **RouterInterface**：路由器接口。
         * - **NetworkInterface**：弹性网卡。
         * - **VpnGateway**：VPN网关。
         * - **IPv6Gateway**：IPv6网关。
         * - **NatGateway**：NAT网关。
         * - **Attachment**：转发路由器。
         * - **VpcPeer**：VPC对等连接。
         * - **Ipv4Gateway**：IPv4网关。
         * - **GatewayEndpoint**：网关终端节点。
         * - **CenBasic**：CEN不支持转发路由器。
         * - **Ecr**：专线网关。
         * @example `RouterInterface`
         */
        NextHopType: string;
        /**
         * 要添加的自定义路由条目的名称。最多支持输入50个名称。
         * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
         * @example `test`
         */
        Name: string;
        /**
         * 自定义路由条目的描述信息。最多支持输入50个描述。
         * 描述长度为1～256个字符，不能以`http://`或`https://`开头。
         * @example `test`
         */
        Description: string;
    }[];
}
