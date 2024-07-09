export interface ListStatefulAsyncInvocationFunctionsRequest {
    /**
     * 限定此次返回资源的数量。如果不设定，默认返回20，最大不能超过100。返回结果可以小于指定的数量，但不会多于指定的数量。
     * @example `20`
     */
    "limit"?: number;
    /**
     * 用来标记当前开始读取的位置，置空表示从头开始。第一次查询不需要提供这个参数，后续查询的Token从前一次查询的返回结果中获取。
     * @example `""`
     */
    "nextToken"?: string;
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `12348*****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * 函数的调用开始日期，格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Wed, 11 May 2022 09:00:00 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 用于链路追踪的ID。
     * @example `duytnd-Xsdfasfd***`
     */
    "X-Fc-Trace-Id"?: string;
}
