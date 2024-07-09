export interface DoQuickFieldResponse {
    /**
     * 快速分析返回的结果。
     */
    Data: {
        /**
         * 该参数已废弃，无需关注。
         * @example `0`
         */
        QueryMode: number;
        /**
         * 该参数已废弃，无需关注。
         * @example `0`
         */
        Limited: number;
        /**
         * 本次查询请求返回的日志行数。
         * @example `10`
         */
        Count: number;
        /**
         * 该参数已废弃，无需关注。
         * @example `true`
         */
        HasSQL: boolean;
        /**
         * 该参数已废弃，无需关注。
         * @example `* and alert_level : remind | with_pack_meta`
         */
        WhereQuery: string;
        /**
         * 该参数已废弃，无需关注。
         * @example `""`
         */
        PQuery: string;
        /**
         * 本次查询处理的行数。
         * @example `1000`
         */
        ProcessedRows: number;
        /**
         * 本次查询是否完成。取值：
         * - true：完成
         * - false：未完成
         * @example `true`
         */
        CompleteOrNot: boolean;
        /**
         * 该参数已废弃，无需关注。
         * @example `""`
         */
        AggQueryd: string;
        /**
         * 该参数已废弃，无需关注。
         */
        Keys: string[];
        /**
         * 快速查询获取到的日志。
         */
        Logs: any[];
    };
    /**
     * 请求消息ID。
     * @example `06735F17-1EDE-5212-81A3-8585368F****`
     */
    RequestId: string;
}
