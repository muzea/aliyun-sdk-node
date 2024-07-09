export interface SimpleQueryResponse {
    /**
     * 当文件总数大于设置的MaxResults时，用于翻页的token。
     * 下一次列出文件信息时以此值为NextToken，将未返回的结果返回。
     * 当文件未全部返回时，此参数才有值。
     * @example `MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpwZw==`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `2C5C1E0F-D8B8-4DA0-8127-EC32C771****`
     */
    RequestId: string;
    /**
     * 文件信息列表。仅在请求的Aggregations为空时返回。
     */
    Files: any[];
    /**
     * 聚合字段信息列表。仅在请求的Aggregations不为空时返回。
     */
    Aggregations: {
        /**
         * 聚合字段名称。
         * @example `Size`
         */
        Field: string;
        /**
         * 聚合字段的聚合操作符。
         * @example `sum`
         */
        Operation: string;
        /**
         * 聚合的统计结果。
         * @example `200`
         */
        Value: number;
        /**
         * 分组聚合的结果列表。仅在请求的Aggregations中存在group类型的Operation时才会返回。
         */
        Groups: {
            /**
             * 分组聚合的值。
             * @example `100`
             */
            Value: string;
            /**
             * 分组聚合的总个数。
             * @example `5`
             */
            Count: number;
        }[];
    }[];
    /**
     * 命中的记录数。
     * @example `10`
     */
    TotalHits: number;
}
