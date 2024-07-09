export interface ListTagKeysResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `50177258-E817-4D2F-A5C6-3FD7BC4806E3`
     */
    RequestId: string;
    /**
     * 分页查询时，显示当前页的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 标签的总数量。
     * @example `5`
     */
    TotalCount: number;
    /**
     * 标签列表。
     */
    TagKeys: {
        /**
         * 标签键的总数量。
         * @example `2`
         */
        TagCount: number;
        /**
         * 标签键名称。
         * @example `key2`
         */
        TagKey: string;
    }[];
}
