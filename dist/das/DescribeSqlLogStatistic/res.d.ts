export interface DescribeSqlLogStatisticResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回消息。
     * > 请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B6D17591-B48B-4D31-9CD6-9B9796B2****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * * true：执行成功
     * * false：执行失败
     * @example `true`
     */
    Success: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 时间戳，格式为Unix时间戳，单位为毫秒。
         * @example `1712568564928`
         */
        Timestamp: number;
        /**
         * 总的热存储数据，单位字节（Byte）。
         * @example `1118042`
         */
        HotSqlSize: number;
        /**
         * 总的冷存储数据，单位字节（Byte）。
         * @example `8585901`
         */
        ColdSqlSize: number;
        /**
         * 最近一天该的数据引入量，单位字节（Byte）。
         * @example `297245`
         */
        ImportSqlSize: number;
        /**
         * 免费的热存储数据，单位字节（Byte）。
         * @example `297245`
         */
        FreeHotSqlSize: number;
        /**
         * 免费的冷存储数据，单位字节（Byte）。
         * @example `5041450`
         */
        FreeColdSqlSize: number;
    };
}
