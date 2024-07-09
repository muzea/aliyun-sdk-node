export interface DescribeUsageOsSdkVersionDistributionStatDataResponse {
    /**
     * 用量统计SDK版本数据列表。
     */
    UsageOsSdkVersionStatList: {
        /**
         * SDK版本名称，1.0.0、1.1.1等。
         * @example `1.0.0`
         */
        Name: string;
        /**
         * 操作系统，如iOS、android等。
         * @example `macOS`
         */
        Os: string;
        /**
         * 音频通话时长，单位分钟。
         * @example `3`
         */
        AudioCallDuration: number;
        /**
         * 视频通话时长，单位分钟。
         * @example `473`
         */
        VideoCallDuration: number;
        /**
         * 总通话时长，单位分钟。
         * @example `476`
         */
        TotalCallDuration: number;
        /**
         * 通话时长占比，四位小数表示，如0.0984。
         * @example `0.0984`
         */
        CallDurationRatio: string;
    }[];
    /**
     * 请求ID。
     * @example `231470C1-ACFB-4C9F-844F-4CFE1E3804C5`
     */
    RequestId: string;
}
