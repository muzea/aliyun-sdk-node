export interface DescribePlayListResponse {
    /**
     * 总播放次数
     * @example `49`
     */
    TotalNum: number;
    /**
     * 请求ID。
     * @example `B960580D-26FA-5547-8AFC-3CDC812DBF27`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNum: number;
    /**
     * 分页大小。默认值20。最大值100。
     * @example `10`
     */
    PageSize: number;
    /**
     * 播放记录列表
     */
    PlayList: {
        /**
         * 播放状态
         * @example `complete`
         */
        Status: string;
        /**
         * 视频ID
         * @example `250314203f0171eebff17035d0b20102`
         */
        VideoId: string;
        /**
         * 卡顿时长
         * @example `20`
         */
        StuckDuration: string;
        /**
         * 播放时长
         * @example `1000`
         */
        PlayDuration: string;
        /**
         * 首帧耗时
         * @example `200`
         */
        FirstFrameDuration: string;
        /**
         * 播放器TraceId
         * @example `0b736abf16724820210842673d9543`
         */
        TraceId: string;
        /**
         * 播放类型
         * @example `vod`
         */
        PlayType: string;
        /**
         * 播放器会话ID
         * @example `91488be2-8381-40c9-8494-e8afe22c4a2d`
         */
        SessionId: string;
        /**
         * 视频时长
         * @example `2000`
         */
        VideoDuration: string;
        /**
         * 启播时间戳
         * @example `1675922209572`
         */
        PlayTs: string;
    }[];
}
