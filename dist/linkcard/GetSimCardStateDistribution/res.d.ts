export interface GetSimCardStateDistributionResponse {
    /**
     * 接口返回码。
     * 200：表示成功。
     * 其它：表示错误码。错误码详情，请参见错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `InstanceId cannot be empty.`
     */
    ErrorMessage: string;
    /**
     * 请求ID，阿里云为该请求生成的标识符。
     * @example `E4F94B97-1D64-4080-BFD2-67461667AA43`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * true：调用成功。
     * false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 卡总数。
         * @example `100`
         */
        CardCount: number;
        /**
         * 可测试卡数量。
         * @example `20`
         */
        TestCount: number;
        /**
         * 未使用卡数量。
         * @example `10`
         */
        UnusedCount: number;
        /**
         * 已停用卡数量。
         * @example `5`
         */
        StopCount: number;
        /**
         * 已销户卡数量。
         * @example `0`
         */
        DestoryedCount: number;
        /**
         * 使用中卡数量。
         * @example `50`
         */
        UsingCount: number;
        /**
         * 已停机卡数量。
         * @example `10`
         */
        ShutDownCount: number;
    };
}
