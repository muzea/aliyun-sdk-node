export interface DescribeUsageAreaDistributionStatDataResponse {
    /**
     * 用量统计地域分布数据。
     */
    UsageAreaStatList: {
        /**
         * 地域名称，如中国。
         * @example `中国_浙江省`
         */
        Name: string;
        /**
         * 音频通话时长，单位分钟。
         * @example `45`
         */
        AudioCallDuration: number;
        /**
         * 视频通话时长，单位分钟。
         * @example `4776`
         */
        VideoCallDuration: number;
        /**
         * 总通话时长，单位分钟。
         * @example `4821`
         */
        TotalCallDuration: number;
    }[];
    /**
     * 请求ID。
     * @example `231470C1-ACFB-4C9F-844F-4CFE1E3804C5`
     */
    RequestId: string;
}
