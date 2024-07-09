export interface StopStatefulAsyncInvocationRequest {
    /**
     * 异步任务所属的服务名称。
     * @example `demo-service`
     */
    "serviceName": string;
    /**
     * 异步任务所属的函数名称。
     * @example `demo-function`
     */
    "functionName": string;
    /**
     * 异步任务的任务ID。
     * @example `demo-id`
     */
    "invocationId": string;
    /**
     * 异步任务所属的服务别名或版本。
     * @example `LATEST`
     */
    "qualifier"?: string;
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * 函数的调用开始日期，格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Sat, 14 Jul 2017 07:02:38 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 函数计算调用请求的调用链ID。
     * @example `asdf****`
     */
    "X-Fc-Trace-Id"?: string;
}
