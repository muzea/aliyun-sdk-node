export interface ListBucketsRequest {
    /**
     * 限定返回的bucket name必须以prefix作为前缀。可以不设定该参数，不设定时则不过滤前缀信息。
     * @example `image`
     */
    "Prefix"?: string;
    /**
     * 翻页页码，从1开始。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 限定此次返回bucket的最⼤数。可以不设定该参数，不设定时默认值为10，取值不能⼤于100。
     * @example `5`
     */
    "PageSize"?: string;
}
