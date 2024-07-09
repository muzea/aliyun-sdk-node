export interface DescribeUsageDistributionStatDataResponse {
    /**
     * 用量统计数据列表。
     */
    UsageStatList: {
        /**
         * 统计维度。取值：
         * - 当StatDim为CHANNEL_ONLINE时，取值：**ONE_TO_FIVE**（1~5人）、**SIX_TO_TEN**（6~10人）、**ELEVEN_TO_TWENTY**（11~20人）、**TWENTY_ONE_TO_FIFTY**（21~50人）、**ABOVE_FIFTY**（50人以上）。
         * - 当StatDim为NETWORK时，取值：**WiFi**、**4G**等。
         * - 当StatDim为OS时，取值：**iOS**、**Android**等。
         * @example `ONE_TO_FIVE`
         */
        Name: string;
        /**
         * 音频通话时长，单位分钟。
         * @example `51`
         */
        AudioCallDuration: number;
        /**
         * 视频通话时长，单位分钟。
         * @example `10585`
         */
        VideoCallDuration: number;
        /**
         * 总通话时长，单位分钟。
         * @example `10636`
         */
        TotalCallDuration: number;
        /**
         * 通话时长占比，四位小数表示，如0.9782。
         * @example `0.9782`
         */
        CallDurationRatio: string;
    }[];
    /**
     * 请求ID。
     * @example `231470C1-ACFB-4C9F-844F-4CFE1E3804C5`
     */
    RequestId: string;
}
