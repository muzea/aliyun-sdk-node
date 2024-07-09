export interface GetQueryOptimizeSolutionResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回消息。
     * @example `Successful`
     */
    Message: string;
    /**
     * 详细信息列表。
     */
    Data: {
        /**
         * 总数据量。
         * @example `1`
         */
        Total: number;
        /**
         * 备用参数。
         * @example `None`
         */
        PageNo: number;
        /**
         * 备用参数。
         * @example `None`
         */
        PageSize: number;
        /**
         * 备用参数。
         * @example `None`
         */
        Extra: string;
        /**
         * 治理建议列表。
         */
        List: {
            /**
             * 建议级别：
             * - **INFO**：提示。
             * - **WARN**：警告。
             * @example `INFO`
             */
            Level: string;
            /**
             * 规则ID，具体信息请参见[查询治理](~~290038~~)。
             * @example `LARGE_ROWS_EXAMINED`
             */
            RuleId: string;
            /**
             * 解决方案，具体信息请参见[查询治理](~~290038~~)。
             * @example `LARGE_ROWS_EXAMINED_SOLUTION`
             */
            Solution: string;
            /**
             * 备用参数。
             * @example `None`
             */
            SolutionExt: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `30FF4E40-17F3-5A51-AB23-43F30D9B****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
}
