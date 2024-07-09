export interface DescribePlayTopVideosResponse {
    /**
     * 分页的页码。
     * @example `1`
     */
    PageNo: number;
    /**
     * 请求ID。
     * @example `4B0BCF9F-2FD5-4817-****-7BEBBE3AF90B"`
     */
    RequestId: string;
    /**
     * 每页大小。
     * @example `100`
     */
    PageSize: number;
    /**
     * TOP视频的总条数。
     * @example `2`
     */
    TotalNum: number;
    TopPlayVideos: {
        /**
         * TOP视频的当日播放数据。
         */
        TopPlayVideoStatis: {
            /**
             * 视频名称。
             * @example `阿里云视频`
             */
            Title: string;
            /**
             * 播放次数。
             * @example `107`
             */
            VV: string;
            /**
             * 播放总时长。单位：毫秒。
             * @example `4640369`
             */
            PlayDuration: string;
            /**
             * 视频ID。
             * @example `2a8d4cb9ecbb487681473a15****8fda`
             */
            VideoId: string;
            /**
             * 播放用户数。
             * @example `1`
             */
            UV: string;
        }[];
    };
}
