export interface DescribeLiveStreamMetricDetailDataResponse {
    /**
     * 查询的加速域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 结束时间。
     * @example `2015-12-10T21:00:00Z`
     */
    EndTime: string;
    /**
     * 下一次返回数据的起始索引，当查询的数据未获取完时返回该值。
     * @example `UjsM9x3aVcJi9a0-ArwJUTTC67C***37C0=`
     */
    NextPageToken: string;
    /**
     * 返回数据行数。
     * @example `5000`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `B955107D-E658-4E77-B913-E0AC3D31693E`
     */
    RequestId: string;
    /**
     * 开始时间。
     * @example `2015-12-10T20:00:00Z`
     */
    StartTime: string;
    StreamDetailData: {
        /**
         * 返回数据组。
         */
        StreamData: {
            /**
             * 应用名称。
             * @example `app`
             */
            AppName: string;
            /**
             * 流每分钟平均带宽，单位：bps。
             * @example `423304182.66`
             */
            Bps: number;
            /**
             * 流每分钟总在线人数。
             * @example `423304182`
             */
            Count: number;
            /**
             * FLV协议带宽，单位：bps。
             * > 指定协议不满足时，不返回。
             * @example `454`
             */
            FlvBps: number;
            /**
             * FLV协议在线人数。
             * > 指定协议不满足时，不返回。
             * @example `32`
             */
            FlvCount: number;
            /**
             * FLV协议流量，单位：Byte。
             * > 指定协议不满足时，不返回。
             * @example `1254`
             */
            FlvTraffic: number;
            /**
             * HLS协议带宽，单位：bps。
             * > 指定协议不满足时，不返回。
             * @example `4456`
             */
            HlsBps: number;
            /**
             * HLS协议在线人数。
             * > 指定协议不满足时，不返回。
             * @example `56`
             */
            HlsCount: number;
            /**
             * HLS协议流量，单位：Byte。
             * > 指定协议不满足时，不返回。
             * @example `568`
             */
            HlsTraffic: number;
            /**
             * 流每分钟新建连接数。
             * @example `450`
             */
            NewConns: string;
            /**
             * P2P协议带宽，单位：bps。
             * >指定协议不满足时，不返回.
             * @example `6845`
             */
            P2pBps: number;
            /**
             * P2P协议在线人数。
             * > 指定协议不满足时，不返回。
             * @example `78`
             */
            P2pCount: number;
            /**
             * P2P协议流量，单位：Byte。
             * > 指定协议不满足时，不返回。
             * @example `4102`
             */
            P2pTraffic: number;
            /**
             * RTMP协议带宽，单位：bps。
             * >指定协议不满足时，不返回。
             * @example `3323`
             */
            RtmpBps: number;
            /**
             * RTMP协议在线人数。
             * > 指定协议不满足时，不返回。
             * @example `63`
             */
            RtmpCount: number;
            /**
             * RTMP协议流量，单位：Byte。
             * > 指定协议不满足时，不返回。
             * @example `5568`
             */
            RtmpTraffic: number;
            /**
             * RTS协议带宽，单位：bps。
             * > 指定协议不满足时，不返回。
             * @example `2361`
             */
            RtsBps: number;
            /**
             * RTS协议在线人数。
             * > 指定协议不满足时，不返回。
             * @example `89`
             */
            RtsCount: number;
            /**
             * RTS协议流量，单位：Byte。
             * > 指定协议不满足时，不返回。
             * @example `2322`
             */
            RtsTraffic: number;
            /**
             * 流名称。
             * @example `test.flv`
             */
            StreamName: string;
            /**
             * 时间片起始时刻。
             * @example `2015-12-10T20:00:00Z`
             */
            TimeStamp: string;
            /**
             * 流每分钟总流量，单位：Byte。
             * @example `423304182`
             */
            Traffic: number;
        }[];
    };
}
