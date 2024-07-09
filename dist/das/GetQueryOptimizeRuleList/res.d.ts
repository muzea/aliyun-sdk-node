export interface GetQueryOptimizeRuleListResponse {
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
         * 规则数据列表。
         */
        List: {
            /**
             * 规则类型，当前只支持 **Predefined**（系统预定义）。
             * @example `Predefined`
             */
            Type: string;
            /**
             * 规则名，具体信息请参见[查询治理](~~290038~~)。
             * @example `LARGE_ROWS_EXAMINED`
             */
            Name: string;
            /**
             * 备用参数。
             * @example `None`
             */
            RuleId: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `B6D17591-B48B-4D31-9CD6-9B9796B2****`
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
