export interface ListLayersRequest {
    /**
     * 层名称的前缀。限定返回的资源名称，假设Prefix为a，则返回的资源名必须以a开头。
     * @example `prefix-Layer`
     */
    "prefix"?: string;
    /**
     * 起始层的名称。设定结果从startKey之后（包括startKey）按字母排序的第一个开始返回。
     * @example `start-layer-name`
     */
    "startKey"?: string;
    /**
     * 用来返回更多结果。第一次查询不需要提供这个参数，后续查询的Token从返回结果中获取。
     * @example `next-layer-name`
     */
    "nextToken"?: string;
    /**
     * 限定此次返回资源的数量。如果不设定，默认返回20，最大不能超过100。返回结果可以小于指定的数量，但不会多于指定的数量。
     * @example `20`
     */
    "limit"?: number;
    /**
     * 是否只获取公共层，默认为false。
     * @example `true`
     */
    "public"?: boolean;
    /**
     * 是否获取官方公共层，当official设为true时，public字段不生效，默认为false。
     * @example `true`
     */
    "official"?: boolean;
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
     * 请求的调用链ID。
     * @example `rid281s******`
     */
    "X-Fc-Trace-Id"?: string;
}
