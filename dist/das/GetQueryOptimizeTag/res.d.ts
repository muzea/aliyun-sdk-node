export interface GetQueryOptimizeTagResponse {
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
     * 阿里云为该请求生成的唯一标识符。
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
    /**
     * 返回的SQL标签数据。
     */
    Data: {
        /**
         * SQL模板ID
         * @example `29d9fef63e347d39c3436658a5fe****`
         */
        SqlId: string;
        /**
         * SQL标签，多个标签间使用英文逗号（,）分隔。
         * @example `DAS_IN_PLAN,DAS_NOT_IMPORTANT`
         */
        Tags: string;
        /**
         * 备注信息。
         * @example `离线同步类慢SQL，无需优化。`
         */
        Comments: string;
    };
}
