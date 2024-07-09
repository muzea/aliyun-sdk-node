export interface GetFunctionAsyncInvokeConfigRequest {
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
     * 服务的版本或别名。
     * @example `test`
     */
    "qualifier"?: string;
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
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
}
