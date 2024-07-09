export interface RunCloudBenchTaskResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回消息。
     * >请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
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
    Data: {
        /**
         * 详细信息列表，包括信息总数、错误码等。
         */
        PreCheckItem: {
            /**
             * 任务的运行状态。取值：
             * - **SUCCESS**：成功。
             * - **IGNORED**：忽略。
             * - **RUNNING**：运行中。
             * - **EXCEPTION**：异常。
             * @example `SUCCESS`
             */
            Status: string;
            /**
             * 检查项的顺序，取值范围：**0**~**10**。
             * @example `0`
             */
            Order: number;
            /**
             * 返回的状态码。
             * @example `200`
             */
            Code: number;
            /**
             * 请求返回消息。
             * >请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
             * @example `Successful`
             */
            Message: string;
            /**
             * 检查项。取值：
             * - **SqlArchiveStatusChecker**：检查SQL洞察数据是否可用。
             * - **BenchClientEnvChecker**：检查压测机上程序运行环境是否可用。
             * - **SpecChecker**：检查压测目标规格和压测机规格是否可用。
             * - **SourceInstanceChecker**：检查压测源实例账号和网络是否可用。
             * - **BenchTargetChecker**：检查压测目标实例账号和网络是否可用。
             * @example `BenchTargetChecker`
             */
            Name: string;
            /**
             * 检查项的详细信息。
             * @example `"Data": { "total": 1, "list":[...] }, "Code": 200, "Success": true }`
             */
            Details: string;
        }[];
    };
}
