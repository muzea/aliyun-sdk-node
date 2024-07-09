export interface DescribeLiveCenterStreamRateDataResponse {
    /**
     * 帧率码率列表。
     */
    RateDatas: {
        /**
         * 音频帧率。
         * @example `47`
         */
        AudioFps: string;
        /**
         * 音频码率。
         * @example `600`
         */
        AudioRate: string;
        /**
         * 统计时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
         * @example `2024-03-05T18:00:53Z`
         */
        Time: string;
        /**
         * 视频帧率。
         * @example `30`
         */
        VideoFps: string;
        /**
         * 视频码率。
         * @example `1953584`
         */
        VideoRate: string;
    }[];
    /**
     * 请求ID。
     * @example `B6E125BE-E9B8-1103-8684-A3585CB632F1`
     */
    RequestId: string;
}
