export interface ListTriggersRequest {
    /**
     * 服务的名称。
     * @example `demo-service`
     */
    "serviceName": string;
    /**
     * 函数的名称。
     * @example `demo-function`
     */
    "functionName": string;
    /**
     * 限定此次返回资源的数量。如果不设定，默认返回20，最大不能超过100。返回结果可能小于指定的数量，但不会多于指定的数量。
     * @example `20`
     */
    "limit"?: number;
    /**
     * 用来返回更多结果。第一次查询不需要提供这个参数，后续查询的token从返回结果中获取。
     * @example `f-trigger`
     */
    "nextToken"?: string;
    /**
     * 限定返回的资源名称必须以prefix作为前缀。
     * @example `a`
     */
    "prefix"?: string;
    /**
     * 设定结果从startKey之后（包括startKey）按字母排序的第一个开始返回。
     * @example `a-trigger`
     */
    "startKey"?: string;
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * 客户端发起请求的时间。格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Wed, 11 May 2022 09:00:00 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 自定义请求ID。
     * @example `my-test-trace-id`
     */
    "X-Fc-Trace-Id"?: string;
}
