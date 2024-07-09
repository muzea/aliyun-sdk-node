export interface DescribeLiveStreamBitRateDataResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    FrameRateAndBitRateInfos: {
        /**
         * 各直播流的帧率、码率信息。
         */
        FrameRateAndBitRateInfo: {
            /**
             * 统计时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2016-09-13T16:04:00Z`
             */
            Time: string;
            /**
             * 直播流的视频帧率。单位：FPS。
             * @example `30`
             */
            VideoFrameRate: number;
            /**
             * 直播流的音频帧率。单位：FPS。
             * @example `100`
             */
            AudioFrameRate: number;
            /**
             * 直播流的URL。
             * @example `rtmp://guide.aliyundoc.com/liveAppName****​/liveSteamName****`
             */
            StreamUrl: string;
            /**
             * 直播流的码率。单位：Bps。
             * @example `600`
             */
            BitRate: number;
        }[];
    };
}
