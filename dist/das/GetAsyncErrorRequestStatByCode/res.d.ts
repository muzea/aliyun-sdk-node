export interface GetAsyncErrorRequestStatByCodeResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * > 请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 返回的数据。
     * @example `{     "fail": false,     "data": [       {         "instanceId": "rm-2ze8g2am97624****",         "count": 1,         "errorCode": "1062"       },       {         "instanceId": "rm-2ze8g2am97624****",         "count": 2,         "errorCode": "1064"      }     ],     "resultId": "async__fcd7c35788e62324622c3b4a03de****",     "isFinish": true,     "state": "SUCCESS",     "complete": true,     "timestamp": 1644560866961   }`
     */
    Data: {
        /**
         * 请求是否失败：
         * - **true**：是。
         * - **false**：否。
         * @example `false`
         */
        fail: boolean;
        /**
         * 异步请求是否执行完成：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        isFinish: boolean;
        /**
         * 异步请求ID。
         * @example `async__fcd7c35788e62324622c3b4a03de****`
         */
        resultId: string;
        /**
         * 异步请求的执行状态：
         * - **RUNNING**：正在运行。
         * - **SUCCESS**：成功。
         * - **FAIL**：失败。
         * @example `SUCCESS`
         */
        state: string;
        /**
         * 执行时间，格式为Unix时间戳，单位为毫秒。
         * @example `1644560866961`
         */
        timestamp: number;
        /**
         * 异步请求是否完成：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        complete: boolean;
        /**
         * 返回的错误码以及每个错误码对应的SQL数量列表。
         */
        result: {
            /**
             * 实例ID。
             * @example `rm-2ze8g2am97624****`
             */
            instanceId: string;
            /**
             * 错误码。
             * @example `1062`
             */
            errorCode: string;
            /**
             * 错误码对应SQL的数量。
             * @example `1`
             */
            count: number;
        }[];
    };
    /**
     * 请求的ID。
     * @example `840F51F7-9C01-538D-94F6-AE712905****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: boolean;
}
