export interface ListVpcEndpointZonesResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `0ED8D006-F706-4D23-88ED-E11ED28DCAC0`
     */
    RequestId: string;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 总记录数。
     * @example `12`
     */
    TotalCount: number;
    /**
     * 可用区信息集合。
     */
    Zones: {
        /**
         * 可用区中的交换机，系统会自动在该交换机下创建一个终端节点网卡。
         * @example `vsw-hjkshjvdkdvd****`
         */
        VSwitchId: string;
        /**
         * 终端节点网卡的IP地址。
         * @example `192.168.2.23`
         */
        EniIp: string;
        /**
         * 可用区状态，取值：
         * - **Creating**：创建中。
         * - **Wait**：等待连接。
         * - **Connected**：已连接。
         * - **Deleting**：删除中。
         * - **Disconnecting**：断开连接中。
         * - **Disconnected**：已断开。
         * - **Connecting**：连接中。
         * @example `Wait`
         */
        ZoneStatus: string;
        /**
         * 可用区ID。
         * @example `cn-huhehaote-a`
         */
        ZoneId: string;
        /**
         * 终端节点网卡ID。
         * @example `eni-hp3c8qj1tyct8aqy****`
         */
        EniId: string;
        /**
         * 可用区域名。
         * 终端节点连接建立成功后，可以通过该可用区域名访问终端节点服务中的服务资源。
         * @example `ep-hp3f033dp24c5yc9****-cn-huhehaote.epsrv-hp3itcpowf37m3d5****.cn-huhehaote-a.privatelink.aliyuncs.com`
         */
        ZoneDomain: string;
        /**
         * 终端节点所属的地域ID。
         * @example `cn-huhehaote`
         */
        RegionId: string;
        /**
         * 终端节点服务是否支持IPv6功能。取值：
         * - **true**：是。
         * - **false**（默认值）：否。
         * @example `false`
         */
        ZoneIpv6Address: string;
    }[];
}
