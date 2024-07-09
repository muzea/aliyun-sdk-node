export interface DeleteAliasRequest {
    /**
     * 服务名称。
     * @example `demo-service`
     */
    "serviceName": string;
    /**
     * 别名。
     * @example `test`
     */
    "aliasName": string;
    /**
     * 如果传入的ETag和Object的ETag匹配，则正常传输Object，并返回200 OK；如果传入的ETag和Object的ETag不匹配，则返回412 Precondition Failed。
     * Object的ETag值用于验证数据是否发生了更改，您可以基于ETag值验证数据完整性。默认值：无。
     * @example `e19d5cd5af0378da05f63f891c7467af`
     */
    "If-Match"?: string;
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
     * @example `r9s89isisi****`
     */
    "X-Fc-Trace-Id"?: string;
}
