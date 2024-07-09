export interface DescribeChannelAreaDistributionStatDataResponse {
    /**
     * 地域统计列表。
     */
    AreaStatList: {
        /**
         * 地域名称，例如：中国_浙江省_杭州市。
         * @example `中国_浙江省_杭州市`
         */
        AreaName: string;
        /**
         * 通信人数。
         * @example `1`
         */
        CallUserCount: number;
        /**
         * 发布端人数。
         * @example `1`
         */
        PubUserCount: number;
        /**
         * 订阅端人数。
         * @example `1`
         */
        SubUserCount: number;
        /**
         * 优质传输率，用小数表示，例如0.9999表示优质传输率为99.99%。
         * @example `0.9999`
         */
        HighQualityTransmissionRate: string;
    }[];
    /**
     * 请求ID。
     * @example `231470C1-ACFB-4C9F-844F-4CFE1E3804C5`
     */
    RequestId: string;
}
