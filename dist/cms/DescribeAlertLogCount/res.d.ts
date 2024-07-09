export interface DescribeAlertLogCountResponse {
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
     * 报警历史数量统计。
     */
    AlertLogCount: {
        /**
         * 报警历史统计的数量。
         * @example `1`
         */
        Count: number;
        /**
         * 报警历史统计的数量详情。
         */
        Logs: {
            /**
             * 报警历史统计的字段名称。
             * @example `product`
             */
            Name: string;
            /**
             * 报警历史统计的字段值。
             * @example `ECS`
             */
            Value: string;
        }[];
    }[];
}
