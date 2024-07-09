export interface DescribeRtcDurationDataResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    DurationDataPerInterval: {
        /**
         * 通信时长统计信息。
         */
        DurationModule: {
            /**
             * 屏幕共享时长，单位：分钟。
             * @example `200`
             */
            ContentDuration: number;
            /**
             * 高清通信时长，视频分辨率为1280X720及以下，单位：分钟。
             * @example `200`
             */
            V720Duration: number;
            /**
             * 标清通信时长，视频分辨率为640X480及以下，单位：分钟。
             * @example `300`
             */
            V360Duration: number;
            /**
             * 纯音频通信时长，单位：分钟。
             * @example `200`
             */
            AudioDuration: number;
            /**
             * 时间戳，UTC格式，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2020-02-04T05:00:00Z`
             */
            TimeStamp: string;
            /**
             * 全高清通信时长，视频分辨率为1920X1080及以下，单位：分钟。
             * @example `300`
             */
            V1080Duration: number;
            /**
             * 通信总时长，单位：分钟。
             * @example `1000`
             */
            TotalDuration: number;
        }[];
    };
}
