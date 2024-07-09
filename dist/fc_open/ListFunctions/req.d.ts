export interface ListFunctionsRequest {
    /**
     * 服务名称。
     * @example `demoService`
     */
    "serviceName": string;
    /**
     * 服务的版本ID或者别名。
     * @example `LATEST`
     */
    "qualifier"?: string;
    /**
     * 限定此次返回资源的数量。如果不设定，默认返回20，最大不能超过100。返回结果可能小于指定的数量，但不会多于指定的数量。
     * @example `20`
     */
    "limit"?: number;
    /**
     * 用来返回更多结果。第一次查询不需要提供这个参数，后续查询的Token从返回结果中获取。
     * @example `8bj81uI8n****`
     */
    "nextToken"?: string;
    /**
     * 限定返回的资源名称必须以prefix作为前缀。
     * @example `demoFunctionsPrefix`
     */
    "prefix"?: string;
    /**
     * 设定结果从startKey之后（包括startKey）按字母排序的第一个开始返回。
     * @example `demoStartKey`
     */
    "startKey"?: string;
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * 调用开始日期，格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Wed, 11 May 2022 09:00:00 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 自定义请求ID。
     * @example `rid281s******`
     */
    "X-Fc-Trace-Id"?: string;
}
