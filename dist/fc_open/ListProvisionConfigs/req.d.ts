export interface ListProvisionConfigsRequest {
    /**
     * 限定此次返回资源的数量。如果不设定，默认返回20，最大不能超过100。返回结果可能小于指定的数量，但不会多于指定的数量。
     * @example `20`
     */
    "limit"?: number;
    /**
     * 用来返回更多结果。第一次查询不需要提供这个参数，后续查询的token从返回结果中获取。
     * @example `demoNextToken`
     */
    "nextToken"?: string;
    /**
     * 限定返回的资源名称必须属于该service。
     * @example `serviceName`
     */
    "serviceName"?: string;
    /**
     * 限定返回的资源名称必须属于该qualifier。qualifier只能是aliasName，且必须和serviceName共同使用。
     * @example `prod`
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
     * 函数计算调用请求的调用链ID。
     * @example `rid281s******`
     */
    "X-Fc-Trace-Id"?: string;
}
