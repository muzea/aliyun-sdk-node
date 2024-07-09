export interface ListSlowQueryCategoriesResponse {
    /**
     * 请求ID
     * @example `4406F40B-A0A2-9D5D-531F-3B6936567584`
     */
    requestId: string;
    /**
     * 返回结果
     */
    result: {
        /**
         * 开始时间戳
         * @example `1589986800`
         */
        start: number;
        /**
         * 分析状态
         * - PENDING 准备中
         * - SUCCESS 成功
         * - RUNNING 运行中
         * - FAILED 失败
         * - N/A 未知
         * @example `"PENDING"`
         */
        analyzeStatus: string;
        /**
         * 结束时间戳
         * @example `1589990340`
         */
        end: number;
    };
}
