export interface DescribeQualityOsSdkVersionDistributionStatDataResponse {
    /**
     * 质量统计中操作系统及SDK版本的数据列表。
     */
    QualityOsSdkVersionStatDataList: {
        /**
         * SDK版本名称，1.0.0、1.1.1等。
         * @example `2.1.0.210316.dev--release/rtcsdk_v2.1`
         */
        Name: string;
        /**
         * 操作系统名称，iOS、android等。
         * @example `macOS`
         */
        Os: string;
        /**
         * 通话时长占比，用四位小数表示，例如1.0000表示通话时长占比为100%。
         * @example `0.0984`
         */
        CallDurationRatio: string;
        /**
         * 加入频道成功率，用四位小数表示。
         * @example `0.8276`
         */
        JoinChannelSucRate: string;
        /**
         * 5秒加入频道成功率，用四位小数表示。
         * @example `0.8276`
         */
        JoinChannelSucFiveSecRate: string;
        /**
         * 视频首次出图时间，单位：毫秒。
         * @example `5643`
         */
        VideoFirstPicDuration: number;
        /**
         * 音频卡顿率，用四位小数表示。
         * @example `0.0011`
         */
        AudioStuckRate: string;
        /**
         * 视频卡顿率，用四位小数表示。
         * @example `0.0054`
         */
        VideoStuckRate: string;
        /**
         * 音频延时，单位：毫秒。
         * @example `248`
         */
        AudioDelay: number;
        /**
         * 视频延时，单位：毫秒。
         * @example `333`
         */
        VideoDelay: number;
        /**
         * 音频优质传输率，用四位小数表示。
         * @example `0.9987`
         */
        AudioHighQualityTransmissionRate: string;
        /**
         * 视频优质传输率，用四位小数表示。
         * @example `0.9997`
         */
        VideoHighQualityTransmissionRate: string;
    }[];
    /**
     * 请求ID。
     * @example `231470C1-ACFB-4C9F-844F-4CFE1E3804C5`
     */
    RequestId: string;
}
