export interface ListCustomDomainsRequest {
    /**
     * 设定返回域名的前缀。
     * @example `prefix_text	`
     */
    "prefix"?: string;
    /**
     * 设定结果从startKey之后（包括startKey）按字母排序的第一个开始返回。
     * @example `next_service	`
     */
    "startKey"?: string;
    /**
     * 当符合查询条件的数据未读取完时，服务端会返回nextToken，此时可以使用nextToken继续读取后面的数据。第一次查询不需要提供这个参数。
     * @example `fc-thinkphp-demo.functioncompute.com	`
     */
    "nextToken"?: string;
    /**
     * 限定此次返回资源的数量。取值范围[0,100]，默认值为20。返回结果小于或等于指定的数量。
     * @example `20`
     */
    "limit"?: number;
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * API调用时间，格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Wed, 11 May 2022 09:00:00 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 自定义请求ID。
     * @example `asdf*****`
     */
    "X-Fc-Trace-Id"?: string;
}
