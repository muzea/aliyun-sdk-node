export interface ListServiceVersionsRequest {
    /**
     * 服务的名称。
     * @example `demo-service`
     */
    "serviceName": string;
    /**
     * 限定此次返回资源的数量。如果不设定，默认返回20，最大不能超过100。返回结果可以小于指定的数量，但不会多于指定的数量。
     * @example `20`
     */
    "limit"?: number;
    /**
     * 用来返回更多结果。第一次查询不需要提供这个参数，后续查询的Token从返回结果中获取。
     * @example `8bj81uI8n****`
     */
    "nextToken"?: string;
    /**
     * 设定结果从startKey之后（包括startKey）按版本号排序的第一个开始返回。
     * @example `nextservice`
     */
    "startKey"?: string;
    /**
     * 限定返回的版本排序方向：
     *   - **FORWARD**：从小到大排序。
     *   - **BACKWARD**：默认值，从大到小排序。
     * @example `BACKWARD`
     */
    "direction"?: string;
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
