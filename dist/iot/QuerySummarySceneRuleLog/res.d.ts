export interface QuerySummarySceneRuleLogResponse {
    /**
     * 接口返回码。Success表示成功，其它表示错误码。详情请参见[错误码](~~135200~~)。
     * @example `Success`
     */
    Code: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `2279A994-3E7D-4EC6-BD17-FA0D0EC2EC77`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request parameter error`
     */
    ErrorMessage: string;
    /**
     * 表示是否调用成功。true表示调用成功，false表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * 当前页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 返回结果中每页显示的记录数量。
         * @example `10`
         */
        PageSize: number;
        /**
         * 场景联动规则日志总数量。
         * @example `3`
         */
        Total: number;
        LogList: {
            /**
             * 场景联动规则日志列表。
             */
            LogInfo: {
                /**
                 * 场景联动规则日志出现的时间。
                 * @example `1582373706`
                 */
                LogTime: number;
                /**
                 * 场景联动规则的执行结果。
                 * - true：表示成功。
                 * - false：表示失败。
                 * @example `true`
                 */
                Result: string;
                /**
                 * 场景联动规则日志的轨迹ID。
                 * @example `a6a5b5df1582373508176121******`
                 */
                TraceId: string;
            }[];
        };
    };
}
