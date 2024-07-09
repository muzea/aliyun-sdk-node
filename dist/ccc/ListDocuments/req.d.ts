export interface ListDocumentsRequest {
    /**
     * schema id
     * @example `profile`
     */
    "SchemaId": string;
    /**
     * 搜索条件表达式
     * @example `支持Lucene搜索语法`
     */
    "SearchPattern"?: string;
    /**
     * 自定义排序值
     */
    "Sorts"?: {
        /**
         * 字段名
         * @example `name`
         */
        PropertyName: string;
        /**
         * 排序顺序。取值：
         * - ASC（默认值）：升序。
         * - DESC：降序。
         * @example `desc`
         */
        Order: string;
    }[];
    /**
     * 下一个分页token
     * @example `eyJ0YWJsZUlkIjoiY2Y2MTQxYjA5NDY0NDUxMzk5YjFjMTA5YTMxZWNkMzEiLCJ0b2tlbiI6IjAwMDAwMDAwMDAwNzAzNzcifQ==`
     */
    "NextPageToken"?: string;
    /**
     * 分页大小
     * @example `2`
     */
    "PageSize"?: number;
    /**
     * 请求ID
     * @example `EAF3C248-E123-441B-A545-B6CD02E98EED`
     */
    "RequestId"?: string;
    /**
     * 实例ID。
     * @example `d278629c-c687-4aa3-b044-4fe9b012e7ef`
     */
    "InstanceId": string;
}
