export interface DeleteServiceRequest {
    /**
     * 确保实际更改的服务和期望更改的服务是一致的，该值来源于[CreateService](~~175256~~)、[UpdateService](~~188167~~)和[GetService](~~189225~~)接口的响应。
     * @example `service_name`
     */
    "If-Match"?: string;
    /**
     * 服务名称。
     * @example `demo-service`
     */
    "serviceName": string;
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * 函数计算的API被调用的时间，格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Wed, 11 May 2022 09:00:00 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 自定义请求ID。
     * @example `r9s89isisi****`
     */
    "X-Fc-Trace-Id"?: string;
}
