export interface DescribeMeterImpWatchLiveTimeByLiveIdResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 查询观看时长返回结果。
     */
    Data: {
        /**
         * 普通延迟观看时长，如采用rtmp、flv、hls等协议观看，单位分钟。
         * @example `32`
         */
        WatchTimeInLatency: number;
        /**
         * 低延迟观看时长，如rts，单位分钟。
         * @example `43`
         */
        WatchTimeInLowLatency: number;
    }[];
}
