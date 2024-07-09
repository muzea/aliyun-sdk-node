export interface QueryGateVerifyStatisticPublicResponse {
    /**
     * 状态码。取值：
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[服务端API返回码](~~85198~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `请求成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `8906582E-6722`
     */
    RequestId: string;
    /**
     * 包括统计日期范围内的总的调用量、调用成功量、调用失败量、调用未知量，及每一天的用量统计。
     */
    Data: {
        /**
         * 日期范围内的失败调用量。
         * @example `20`
         */
        TotalFail: number;
        /**
         * 日期范围内总调用量。
         * @example `20`
         */
        Total: number;
        /**
         * 日期范围内的成功调用量。
         * @example `0`
         */
        TotalSuccess: number;
        /**
         * 日期范围内的未知调用量。
         * @example `0`
         */
        TotalUnknown: number;
        /**
         * 每日的调用明细。
         */
        DayStatistic: {
            /**
             * 日期，精确到天。格式为YYYYMMDD，例如20220103。
             * @example `20220103`
             */
            StatisticDateStr: string;
            /**
             * 该日期的成功调用量。
             * @example `0`
             */
            TotalSuccess: number;
            /**
             * 该日期的失败调用量。
             * @example `20`
             */
            TotalFail: number;
            /**
             * 该日期的未知调用量。
             * @example `0`
             */
            TotalUnknown: number;
        }[];
    };
}
