export interface DescribeEventCountByThreatLevelResponse {
    /**
     * 请求返回值。
     * @example `123456`
     */
    Data: {
        /**
         * 事件总数。
         * @example `100`
         */
        EventNum: number;
        /**
         * 未处理事件数。
         * @example `75`
         */
        UndealEventNum: number;
        /**
         * 高风险事件数。
         * @example `20`
         */
        HighLevelEventNum: number;
        /**
         * 中风险事件数。
         * @example `3`
         */
        MediumLevelEventNum: number;
        /**
         * 低分险事件数。
         * @example `52`
         */
        LowLevelEventNum: number;
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
