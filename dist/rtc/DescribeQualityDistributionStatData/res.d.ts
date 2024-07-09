export interface DescribeQualityDistributionStatDataResponse {
    /**
     * 质量统计数据列表。
     */
    QualityStatDataList: {
        /**
         * 统计维度。取值：
         * - 当StatDim为CHANNELONLINE时，取值：**ONE_TO_FIVE**（1~5人）、**SIX_TO_TEN**（6~10人）、**ELEVEN_TO_TWENTY**（11~20人）、**TWENTYONE_TO_FIFTY**（21~50人）、**ABOVE_FIFTY**（50人以上）。
         * - 当StatDim为NETWORK时，取值：**WiFi**、**4G**等。
         * - 当StatDim为OS时，取值：**iOS**、**Android**等。
         * @example `ONE_TO_FIVE`
         */
        Name: string;
        /**
         * 通话时长占比，用四位小数表示，例如1.0000表示通话时长占比为100%。
         * @example `1.0000`
         */
        CallDurationRatio: string;
        /**
         * 加入频道成功率，用四位小数表示。
         * @example `0.9575`
         */
        JoinChannelSucRate: string;
        /**
         * 5秒加入频道成功率，用四位小数表示。
         * @example `0.9560`
         */
        JoinChannelSucFiveSecRate: string;
        /**
         * 视频首次出图时间，单位：毫秒。
         * @example `1299`
         */
        VideoFirstPicDuration: number;
        /**
         * 音频卡顿率，用四位小数表示。
         * @example `0.0014`
         */
        AudioStuckRate: string;
        /**
         * 视频卡顿率，用四位小数表示。
         * @example `0.0264`
         */
        VideoStuckRate: string;
        /**
         * 音频延时，单位：毫秒。
         * @example `554`
         */
        AudioDelay: number;
        /**
         * 视频延时，单位：毫秒。
         * @example `517`
         */
        VideoDelay: number;
        /**
         * 音频优质传输率，用四位小数表示。
         * @example `0.9953`
         */
        AudioHighQualityTransmissionRate: string;
        /**
         * 视频优质传输率，用四位小数表示。
         * @example `0.9981`
         */
        VideoHighQualityTransmissionRate: string;
    }[];
    /**
     * 请求ID。
     * @example `231470C1-ACFB-4C9F-844F-4CFE1E3804C5`
     */
    RequestId: string;
}
