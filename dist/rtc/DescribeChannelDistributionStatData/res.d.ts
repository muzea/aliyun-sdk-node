export interface DescribeChannelDistributionStatDataResponse {
    /**
     * 频道分布统计列表。
     */
    StatList: {
        /**
         * 统计维度。
         * @example `OS`
         */
        Name: string;
        /**
         * 通信人数。
         * @example `1`
         */
        CallUserCount: number;
        /**
         * 通信人数占比，用小数表示，例如1.0000表示通信人数占比为100%。
         * @example `1.0000`
         */
        CallUserRatio: string;
    }[];
    /**
     * 请求ID。
     * @example `231470C1-ACFB-4C9F-844F-4CFE1E3804C5`
     */
    RequestId: string;
}
