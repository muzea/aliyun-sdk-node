export interface GetProvisionConfigRequest {
    /**
     * 服务名称。
     * @example `demoService`
     */
    "serviceName": string;
    /**
     * 别名名称。
     * @example `prod`
     */
    "qualifier": string;
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
     * 函数计算调用请求的调用链ID。
     * @example `rid281s******`
     */
    "X-Fc-Trace-Id"?: string;
}
