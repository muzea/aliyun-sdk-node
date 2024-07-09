export interface ListReservedCapacitiesRequest {
    /**
     * 下次查询token。
     * @example `8bj81uI8n****`
     */
    "nextToken"?: string;
    /**
     * 返回结果数量限制。取值范围[1, 100]。
     * @example `20`
     */
    "limit"?: string;
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * 函数计算的API被调用的时间，格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Wed, 11 May 2022 09:00:00 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 自定义请求ID。
     * @example `asdf****`
     */
    "X-Fc-Trace-Id"?: string;
}
