export interface GetFunctionOnDemandConfigRequest {
    /**
     * 服务的名称。
     * @example `demo-service`
     */
    "serviceName": string;
    /**
     * 函数的名称。
     * @example `demoFunction`
     */
    "functionName": string;
    /**
     * 服务别名或LATEST，不支持版本。
     * @example `prod`
     */
    "qualifier": string;
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
     * 调用链ID，链路请求的唯一标识。
     * @example `asdf****`
     */
    "X-Fc-Trace-Id"?: string;
}
