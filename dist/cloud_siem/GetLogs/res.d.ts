export interface GetLogsResponse {
    /**
     * 请求是否成功，取值：
     * - true：成功
     * - false：失败
     * @example `True`
     */
    Success: boolean;
    /**
     * HTTP状态码。
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
     * @example `93A8B186-A5F1-5B20-9BCF-5605C5E9****`
     */
    RequestId: string;
    /**
     * 查询分析的结果。
     * @example `123456`
     */
    Data: {
        /**
         * 当前页加载的数据内容。
         */
        PageInfo: {
            /**
             * 当前页数，从1开始。
             * @example `1`
             */
            CurrentPage: number;
            /**
             * 每页返回记录数。
             * @example `20`
             */
            PageSize: number;
            /**
             * 日志总数。
             * @example `200`
             */
            TotalCount: number;
        };
        /**
         * 日志内容。
         */
        ResponseData: {
            /**
             * 整体查询结果的状态，取值：
             * - true：本次查询已经完成，整体返回结果为完整结果
             * - false：本次查询已经完成，整体返回结果为不完整结果，需要重复请求以获得完整结果
             * @example `true`
             */
            CompleteOrNot: boolean;
            /**
             * 本次查询请求返回的日志行数。
             * @example `4`
             */
            Count: number;
            /**
             * 本次查询消耗的毫秒数。
             * @example `28`
             */
            Cost: number;
            /**
             * 是否包含分析语句，取值：
             * - true：包含
             * - false：不包含
             * @example `true`
             */
            HasSql: boolean;
            /**
             * 日志索引字段列表。
             */
            Keys: string[];
            /**
             * 本次查询产生的原始数据。
             */
            Lines: any[];
        };
    };
}
