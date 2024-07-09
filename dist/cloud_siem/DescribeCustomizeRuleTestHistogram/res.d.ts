export interface DescribeCustomizeRuleTestHistogramResponse {
    /**
     * 请求返回值。
     * @example `123456`
     */
    Data: {
        /**
         * 告警时间区间的开始时间戳。单位：秒。
         * @example `1599897188`
         */
        From: number;
        /**
         * 告警时间区间的结束时间戳。单位：秒。
         * @example `1599997188`
         */
        To: number;
        /**
         * 当前查询结果在该子时间区间内产生的告警数。
         * @example `125`
         */
        Count: number;
    }[];
    /**
     * 请求是否成功。取值：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9AAA9ED9-78F4-5021-86DC-D51C7511****`
     */
    RequestId: string;
}
