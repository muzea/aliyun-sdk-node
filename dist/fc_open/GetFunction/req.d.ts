export interface GetFunctionRequest {
    /**
     * 服务的名称。
     * @example `service_name`
     */
    "serviceName": string;
    /**
     * 服务的版本ID或者别名。
     * @example `demoQualifier`
     */
    "qualifier"?: string;
    /**
     * 函数的名称。
     * @example `function_name`
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
     *  自定义请求ID。
     * @example `asdf****`
     */
    "X-Fc-Trace-Id"?: string;
}
