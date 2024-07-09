export interface DescribeAlertLogHistogramResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The specified resource is not found.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `1C4A3709-BF52-42EE-87B5-7435F0929585`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 查询报警历史的直方图列表。
     */
    AlertLogHistogramList: {
        /**
         * 查询报警历史的开始时间戳。
         * 单位：秒。
         * @example `1610074791`
         */
        From: number;
        /**
         * 查询报警历史的结束时间戳。
         * 单位：秒。
         * @example `1610074800`
         */
        To: number;
        /**
         * 报警历史的数量。
         * @example `20`
         */
        Count: number;
    }[];
}
