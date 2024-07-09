export interface GetNisNetworkRankingResponse {
    /**
     * 请求ID。
     * @example `A7F0D6EC-E19E-58AC-AC9F-08036763960F`
     */
    RequestId: string;
    /**
     * 云网络指标排名数据集合。
     */
    Data: {
        /**
         * 阿里云地域ID。
         * @example `cn-shenzhen`
         */
        RegionNo: string;
        /**
         * 各场景下表示对应的云上资源实例ID，如跨域流量分析场景表示CenID，公网场景表示EipId、EcsId、ClbId等。
         * @example `eip-sample*`
         */
        InstanceId: string;
        /**
         * 带宽包实例ID。
         * @example `cbwp-sample*`
         */
        BandwidthPackageId: string;
        /**
         * 源端IP。
         * @example `42.120.XX.XX`
         */
        SourceIp: string;
        /**
         * 源端端口。
         * @example `443`
         */
        SourcePort: string;
        /**
         * 源端运营商。
         * @example `移动`
         */
        SourceIsp: string;
        /**
         * 目的端IP。
         * @example `2.2.XX.XX`
         */
        DestinationIp: string;
        /**
         * 目的端端口。
         * @example `80`
         */
        DestinationPort: string;
        /**
         * 目的端运营商。
         * @example `阿里云`
         */
        DestinationIsp: string;
        /**
         * 网络协议。
         * @example `6`
         */
        Protocol: string;
        /**
         * 客户端所在国家。
         * @example `中国`
         */
        Country: string;
        /**
         * 客户端所在省份/州。
         * @example `四川省`
         */
        Province: string;
        /**
         * 客户端所在的城市。
         * @example `成都市`
         */
        City: string;
        /**
         * 客户端运营商。
         * @example `移动`
         */
        Isp: string;
        /**
         * 客户端运营商的自治系统编号。
         * @example `129103`
         */
        Asn: string;
        /**
         * IP地址。
         * @example `120.238.XX.XX`
         */
        IP: string;
        /**
         * 目的端地域ID。
         * @example `cn-hangzhou`
         */
        DestinationRegionNo: string;
        /**
         * 边界路由器实例ID。
         * @example `vbr-sample*`
         */
        VbrId: string;
        /**
         * 转发路由器链接ID。
         * @example `tr-sample*`
         */
        AttachmentId: string;
        /**
         * 探测的源可用区。
         * @example `cn-hangzhou-a`
         */
        SourceZone: string;
        /**
         * 探测的目的可用区。
         * @example `cn-hangzhou-b`
         */
        DestinationZone: string;
        /**
         * 流量数(Byte)。
         * @example `1024`
         */
        ByteCount: number;
        /**
         * 流量包数。
         * @example `66`
         */
        PacketCount: number;
        /**
         * 延迟，单位**ms**。
         * @example `23`
         */
        RTT: number;
        /**
         * TCP报文的重传率。
         * @example `0.1`
         */
        RetransmitRate: number;
        /**
         * 入方向带宽，单位：bps。
         * @example `10`
         */
        InBps: number;
        /**
         * 入方向包速率。单位：个/秒。
         * @example `3`
         */
        InPps: number;
        /**
         * 出方向带宽，单位：bps。
         * @example `88`
         */
        OutBps: number;
        /**
         * 出方向包速率。单位：个/秒。
         * @example `8`
         */
        OutPps: number;
        /**
         * 新建连接数。单位：个/秒。
         * @example `18`
         */
        NewSessionPerSecond: number;
        /**
         * 并发连接数。单位：个。
         * @example `66`
         */
        ActiveSessionCount: number;
    }[];
}
