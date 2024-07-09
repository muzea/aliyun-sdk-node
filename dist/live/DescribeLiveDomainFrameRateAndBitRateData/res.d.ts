export interface DescribeLiveDomainFrameRateAndBitRateDataResponse {
    /**
     * 请求ID。
     * @example `C3F2C2C4-59BB-4B62-81FF-345BE557E3E3`
     */
    RequestId: string;
    FrameRateAndBitRateInfos: {
        /**
         * 播流的帧率和码率信息。
         */
        FrameRateAndBitRateInfo: {
            /**
             * 直播流的视频帧率。单位：FPS。
             * @example `24.9`
             */
            VideoFrameRate: number;
            /**
             * 直播流的URL。
             * @example `rtmp://demo.aliyundoc.com/test/liveStream****_3_4`
             */
            StreamUrl: string;
            /**
             * 直播流的音频帧率。单位：FPS。
             * @example `42.9`
             */
            AudioFrameRate: number;
            /**
             * 直播流的码率。单位：Bps。
             * @example `30693.96`
             */
            BitRate: number;
        }[];
    };
}
