export interface GetAsyncErrorRequestListByCodeResponse {
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
     * @example `{         "fail": false,         "data": [             {                 "sqlId": "ad78a4e7d3ce81590c9dc2d5f4bc****",                 "instanceId": "rm-2ze8g2am97624****"             },             {                 "sqlId": "0f92feacd92c048b06a16617a633****",                 "instanceId": "rm-2ze8g2am97624****"             }         ],         "resultId": "async__c39d43ece52d35267cc4b92a0c26****",         "isFinish": true,         "state": "SUCCESS",         "complete": true,         "timestamp": 1644559407740     }`
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
         * 产生指定MySQL错误码的SQL ID列表。
         */
        result: {
            /**
             * SQL ID。
             * @example `ad78a4e7d3ce81590c9dc2d5f4bc****`
             */
            sqlId: string;
            /**
             * 实例ID。
             * @example `rm-2ze8g2am97624****`
             */
            instanceId: string;
        }[];
        /**
         * 异步请求ID。
         * @example `async__c39d43ece52d35267cc4b92a0c26****`
         */
        resultId: string;
        /**
         * 异步请求是否执行完成：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        isFinish: boolean;
        /**
         * 异步请求的执行状态：
         * - **RUNNING**：正在运行。
         * - **SUCCESS**：成功。
         * - **FAIL**：失败。
         * @example `SUCCESS`
         */
        state: string;
        /**
         * 异步请求是否完成：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        complete: boolean;
        /**
         * 执行时间，格式为Unix时间戳，单位为毫秒。
         * @example `1644559407740`
         */
        timestamp: number;
    };
    /**
     * 请求ID。
     * @example `9CB97BC4-6479-55D0-B9D0-EA925AFE****`
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
