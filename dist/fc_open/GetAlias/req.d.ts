export interface GetAliasRequest {
    /**
     * 服务的名称。
     * @example `service_name`
     */
    "serviceName": string;
    /**
     * 别名的名称。
     * @example `alias_test`
     */
    "aliasName": string;
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
     * @example `r4isu4sls****`
     */
    "X-Fc-Trace-Id"?: string;
}
