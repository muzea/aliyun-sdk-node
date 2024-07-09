export interface GetFunctionCodeRequest {
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
     * 服务的版本ID或者别名。
     * @example `demoQualifier`
     */
    "qualifier"?: string;
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
     * 自定义请求ID。
     * @example `rid281s******`
     */
    "X-Fc-Trace-Id"?: string;
}
