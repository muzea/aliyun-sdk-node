export interface DescribeLiveStreamDetailFrameRateAndBitRateDataResponse {
    /**
     * 每个时间间隔的详细音视频帧率码率数据。
     */
    FrameRateAndBitRateInfos: {
        /**
         * 直播流的音频码率。单位：Bps。
         * @example `200`
         */
        AudioBitRate: number;
        /**
         * 直播流的音频帧率。单位：FPS。
         * @example `60`
         */
        AudioFrameRate: number;
        /**
         * 直播流的码率。单位：Bps。
         * @example `1420`
         */
        BitRate: number;
        /**
         * 直播流的URL。
         * @example `rtmp://example.com/AppName/exampleStreamName`
         */
        StreamUrl: string;
        /**
         * 统计时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2016-09-13T16:04:00Z`
         */
        Time: string;
        /**
         * 直播流的视频码率。单位：Bps。
         * @example `1200`
         */
        VideoBitRate: number;
        /**
         * 直播流的视频帧率。单位：FPS。
         * @example `30`
         */
        VideoFrameRate: number;
    }[];
    /**
     * 请求ID。
     * @example `BC858082-736F-4A25-867B-E5B67C85ACF7`
     */
    RequestId: string;
}
