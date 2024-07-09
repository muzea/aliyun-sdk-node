export interface ListServicesRequest {
    /**
     * 限定此次返回资源的数量。如果不设定，默认返回20，最大不能超过100。返回结果可以小于指定的数量，但不会多于指定的数量。
     * @example `20`
     */
    "limit"?: number;
    /**
     * 用来标记当前开始读取的位置，置空表示从头开始。第一次查询不需要提供这个参数，后续查询的Token从返回结果中获取。
     * @example `caeba0****be03f84eb48b699f0a4883`
     */
    "nextToken"?: string;
    /**
     * 限定返回的资源名称，名称必须以Prefix作为前缀，例如Prefix是a，则返回的资源名均是以a开始的。
     * @example `prefix_text`
     */
    "prefix"?: string;
    /**
     * 设定结果从startKey之后（包括startKey）按字母排序的第一个开始返回。
     * @example `nextService`
     */
    "startKey"?: string;
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
