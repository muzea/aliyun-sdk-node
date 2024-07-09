export interface DescribeSyncReportDetailResponse {
    /**
     * 返回详情结果
     */
    result: {
        /**
         * 历史数据异常记录占比列表
         */
        historyData: {
            /**
             * 指定时间段异常数据记录占比
             * @example `84.6`
             */
            errorPercent: number;
            /**
             * 开始时间秒级时间戳
             * @example `1586673466`
             */
            startTime: number;
            /**
             * 结束时间秒级时间戳
             * @example `1586673466`
             */
            endTime: number;
        }[];
        /**
         * 是否样本展示
         * @example `true`
         */
        sampleDisplay: boolean;
        /**
         * 例如：实时行为记录的bhv_time不合法。
         * @example `bhvTimeBehavior`
         */
        type: string;
        /**
         * 错误数
         * @example `246165`
         */
        errorCount: number;
        /**
         * 异常记录占比
         * @example `84.6`
         */
        errorPercent: number;
        /**
         * 是否默认展示
         * @example `false`
         */
        defaultDisplay: boolean;
    }[];
    /**
     * 错误码
     * @example `InternalServerError`
     */
    code: string;
    /**
     * 请求id
     * @example `8F81A922-6C81-46D6-B78C-CC35E16B1691`
     */
    requestId: string;
    /**
     * 错误详情
     * @example `An internal server error occurred`
     */
    message: string;
}
