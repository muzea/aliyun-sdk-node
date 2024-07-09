export interface ListFunctionAsyncInvokeConfigsRequest {
    /**
     * 服务名称。
     * @example `demo-service`
     */
    "serviceName": string;
    /**
     * 函数名称。
     * @example `helloworld`
     */
    "functionName": string;
    /**
     * 最多返回个数。 如果不设定，默认返回20，最大不能超过100。返回结果可以小于指定的数量，但不会多于指定的数量。
     * @example `20`
     */
    "limit"?: number;
    /**
     * 用来返回更多结果。第一次查询不需要提供这个参数，后续查询的Token从返回结果中获取。
     * @example `8bj81uI8n****`
     */
    "nextToken"?: string;
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * 函数代码包的CRC-64值，用于校验完整性。应当由工具自动计算。
     * @example `1506052139770049xxxx`
     */
    "X-Fc-Code-Checksum"?: string;
    /**
     * 请求返回日志。
     * - **Tail**：返回当前请求产生的最后4 KB日志。
     * - **None**：默认值，不返回请求日志。
     * @example `Tail`
     */
    "X-Fc-Log-Type"?: string;
    /**
     * 调用方式。
     * - **Sync**：同步调用。
     * - **Async**：异步调用。
     * @example `Async`
     */
    "X-Fc-Invocation-Type"?: string;
    /**
     * 函数计算调用时间，格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Sat, 14 Jul 2017 07:02:38 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 函数计算调用请求的调用链ID。
     * @example `asdf****`
     */
    "X-Fc-Trace-Id"?: string;
    "AccountID"?: string;
}
