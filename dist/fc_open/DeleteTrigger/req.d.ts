export interface DeleteTriggerRequest {
    /**
     * 用于确保实际更改的资源和期望更改的资源是一致的，该值来自[CreateTrigger](~~415729~~)、[GetTrigger](~~415732~~)和[UpdateTrigger](~~415731~~)的响应。
     * @example `e19d5cd5af0378da05f63f891c74****`
     */
    "If-Match"?: string;
    /**
     * 服务的名称。
     * @example `demoService`
     */
    "serviceName": string;
    /**
     * 函数的名称。
     * @example `demoFunction`
     */
    "functionName": string;
    /**
     * 触发器的名称。
     * @example `demoTrigger`
     */
    "triggerName": string;
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * 客户端发起请求的时间。格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Wed, 11 May 2022 09:00:00 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 自定义请求ID。
     * @example `my-test-trace-id`
     */
    "X-Fc-Trace-Id"?: string;
}
