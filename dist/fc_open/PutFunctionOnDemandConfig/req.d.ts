export interface PutFunctionOnDemandConfigRequest {
    /**
     * 服务名称。
     * @example `demo-service`
     */
    "serviceName": string;
    /**
     * 函数的名称。
     * @example `demo-function`
     */
    "functionName": string;
    /**
     * 服务别名或LATEST，不支持版本。
     * @example `prod`
     */
    "qualifier": string;
    /**
     * 请求body参数。
     */
    "body"?: {
        /**
         * 按量实例的上限值。具体信息，请参见[实例伸缩限制](~~185038~~)。
         * @example `10`
         */
        maximumInstanceCount: number;
    };
    /**
     * 如果传入的ETag和Object的ETag匹配，则正常传输Object，并返回200 OK；如果传入的ETag和Object的ETag不匹配，则返回412 Precondition Failed。
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
     * 调用链ID，链路请求的唯一标识。
     * @example `r9s89isisi****`
     */
    "X-Fc-Trace-Id"?: string;
}
