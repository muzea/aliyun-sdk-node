export interface PublishServiceVersionRequest {
    /**
     * 服务的名称。
     * @example `demo-service`
     */
    "serviceName": string;
    /**
     * 版本定义。
     */
    "body"?: {
        /**
         * 版本的描述。
         * @example `test_description`
         */
        description: string;
    };
    /**
     * 确保实际更改的服务和期望更改的服务是一致的，该值来源于[CreateService](~~175256~~)、[UpdateService](~~188167~~)和[GetService](~~189225~~)接口的响应。
     * @example `e19d5cd5af0378da05f63f891c7467af`
     */
    "If-Match"?: string;
    /**
     * 阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * 函数的调用开始日期，格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Wed, 11 May 2022 09:00:00 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 函数计算调用请求的调用链ID
     * @example `rid281s******`
     */
    "X-Fc-Trace-Id"?: string;
}
