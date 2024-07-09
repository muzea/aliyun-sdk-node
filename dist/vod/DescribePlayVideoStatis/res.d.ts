export interface DescribePlayVideoStatisResponse {
    /**
     * 请求ID。
     * @example `A92D3600-A3E7-43D6-****-B6E3B4A1FE6B`
     */
    RequestId: string;
    VideoPlayStatisDetails: {
        /**
         * 视频在指定时间段内每日的播放统计数据。
         */
        VideoPlayStatisDetail: {
            /**
             * 播放总时长。单位：毫秒。
             * @example `967277`
             */
            PlayDuration: string;
            /**
             * 播放日期，格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2024-06-12T16:00:00Z`
             */
            Date: string;
            /**
             * 播放次数。
             * @example `24`
             */
            VV: string;
            /**
             * 视频名称。
             * @example `阿里云视频`
             */
            Title: string;
            /**
             * 播放用户数。
             * @example `1`
             */
            UV: string;
            /**
             * 播放时长分布。
             * @example `<=1m:79.2%;>1<=5m:16.7%;>5<=10m:4.2%`
             */
            PlayRange: string;
        }[];
    };
}
