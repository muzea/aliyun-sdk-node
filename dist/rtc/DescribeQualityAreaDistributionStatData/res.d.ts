export interface DescribeQualityAreaDistributionStatDataResponse {
    /**
     * 质量分布数据列表。
     */
    QualityStatDataList: {
        /**
         * 地域名称。
         * @example `中国_浙江省`
         */
        Name: string;
        /**
         * 通话时长占比，用四位小数表示，例如1.0000表示通话时长占比为100%。
         * @example `0.6654`
         */
        CallDurationRatio: string;
        /**
         * 加入频道成功率，用四位小数表示。
         * @example `0.9356`
         */
        JoinChannelSucRate: string;
        /**
         * 5秒加入频道成功率，用四位小数表示。
         * @example `0.9338`
         */
        JoinChannelSucFiveSecRate: string;
        /**
         * 视频首次出图时间，单位：毫秒。
         * @example `1363`
         */
        VideoFirstPicDuration: number;
        /**
         * 音频卡顿率，用四位小数表示。
         * @example `0.0021`
         */
        AudioStuckRate: string;
        /**
         * 视频卡顿率，用四位小数表示。
         * @example `0.0058`
         */
        VideoStuckRate: string;
        /**
         * 音频延时，单位：毫秒。
         * @example `347`
         */
        AudioDelay: number;
        /**
         * 视频延时，单位：毫秒。
         * @example `291`
         */
        VideoDelay: number;
        /**
         * 音频优质传输率，用四位小数表示。
         * @example `0.9933`
         */
        AudioHighQualityTransmissionRate: string;
        /**
         * 视频优质传输率，用四位小数表示。
         * @example `0.9967`
         */
        VideoHighQualityTransmissionRate: string;
    }[];
    /**
     * 请求ID。
     * @example `231470C1-ACFB-4C9F-844F-4CFE1E3804C5`
     */
    RequestId: string;
}
