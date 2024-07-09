export interface DeleteFunctionRequest {
    /**
     * 用于确保实际更改的资源和期望更改的资源是一致的，该值来自Create，Get和Update API的响应。
     * @example `e19d5cd5af0378da05f63f891c7467af`
     */
    "If-Match"?: string;
    /**
     * 服务名称。
     * @example `demoService`
     */
    "serviceName": string;
    /**
     * 函数名称。
     * @example `demoFunction`
     */
    "functionName": string;
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * 函数的调用开始日期，格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Wed, 11 May 2022 09:00:00 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 调用函数的ID，与返回参数requestId对应。
     * @example `test-trace-id`
     */
    "X-Fc-Trace-Id"?: string;
}
