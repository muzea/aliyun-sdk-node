export interface GetAsyncErrorRequestStatResultResponse {
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
     * @example `{         "fail": false,         "data": {             "ad78a4e7d3ce81590c9dc2d5f4bc****": {                 "sqlId": "ad78a4e7d3ce81590c9dc2d5f4bc****",                 "instanceId": "rm-2ze8g2am97624****",                 "count": 1             },             "0f92feacd92c048b06a16617a633****": {                 "sqlId": "0f92feacd92c048b06a16617a633****",                 "instanceId": "rm-2ze8g2am97624****",                 "count": 2             }         },         "resultId": "async__61f45ee381b2fa4e8a6545e3bee9****",         "isFinish": true,         "state": "SUCCESS",         "complete": true,         "timestamp": 1644558576717     }`
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
         * @example `async__61f45ee381b2fa4e8a6545e3bee9****`
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
         * @example `1644558576717`
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
         * 异步请求的返回数据列表。
         */
        result: any[];
    };
    /**
     * 请求的ID。
     * @example `3FC3F8EB-3564-5D1A-B187-3B03E5B0****`
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
