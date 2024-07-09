export interface DescribeAlertsCountResponse {
    /**
     * 请求返回值。
     * @example `123456`
     */
    Data: {
        /**
         * 高威胁告警数。
         * @example `25`
         */
        High: number;
        /**
         * 中威胁告警数。
         * @example `25`
         */
        Medium: number;
        /**
         * 低威胁告警数。
         * @example `25`
         */
        Low: number;
        /**
         * 告警总数。
         * @example `75`
         */
        All: number;
        /**
         * 接入产品数。
         * @example `3`
         */
        ProductNum: number;
    };
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
