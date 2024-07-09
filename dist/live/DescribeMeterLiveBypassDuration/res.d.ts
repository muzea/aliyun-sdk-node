export interface DescribeMeterLiveBypassDurationResponse {
    /**
     * 纯音频汇总时长，基础规格，单位：分钟。
     * @example `20`
     */
    AudioSummaryDuration: number;
    /**
     * 用量统计信息。
     */
    Data: {
        /**
         * 纯音频时长，基础规格，单位：分钟。
         * @example `20`
         */
        AudioDuration: number;
        /**
         * 单流转推-语音时长，单位：分钟。
         * @example `20`
         */
        Single_Audio: number;
        /**
         * 单流转推-视频时长，单位：分钟。
         * @example `30`
         */
        Single_Video: number;
        /**
         * 时间片起始时刻。
         * @example `2022-10-10T20:00:00Z`
         */
        Timestamp: string;
        /**
         * 全部时长，单位：分钟 。
         * @example `150`
         */
        TotalDuration: number;
        /**
         * 标清时长，视频分辨率为640×480及以下，单位：分钟。
         * @example `30`
         */
        V480Duration: number;
        /**
         * 高清时长，视频分辨率为1280×720及以下，单位：分钟。
         * @example `40`
         */
        V720Duration: number;
        /**
         * 全高清时长，视频分辨率为1920×1080及以下，单位：分钟。
         * @example `10`
         */
        V1080Duration: number;
    }[];
    /**
     * 该条任务请求ID。
     * @example `4B460F8B-993C-4F48-B98A-910811DEBFEB`
     */
    RequestId: string;
    /**
     * 单流转推-语音汇总时长，单位：分钟。
     * @example `20`
     */
    SingleAudioSummaryDuration: number;
    /**
     * 单流转推-视频汇总时长，单位：分钟。
     * @example `30`
     */
    SingleVideoSummaryDuration: number;
    /**
     * 汇总时长，单位：分钟。
     * @example `150`
     */
    TotalSummaryDuration: number;
    /**
     * 标清汇总时长，视频分辨率为640×480及以下，单位：分钟。
     * @example `30`
     */
    V480SummaryDuration: number;
    /**
     * 高清汇总时长，视频分辨率为1280×720及以下，单位：分钟。
     * @example `40`
     */
    V720SummaryDuration: number;
    /**
     * 全高清汇总时长，视频分辨率为1920×1080及以下，单位：分钟。
     * @example `10`
     */
    V1080SummaryDuration: number;
}
