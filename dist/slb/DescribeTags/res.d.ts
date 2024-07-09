export interface DescribeTagsResponse {
    /**
     * 请求ID。
     * @example `365F4154-92F6-4AE4-92F8-7FF3******`
     */
    RequestId: string;
    /**
     * 默认50，最大100。
     * @example `50`
     */
    PageSize: number;
    /**
     * 实例列表页码，起始值1，默认值1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 根据过滤条件得到的实例总个数。
     * @example `1`
     */
    TotalCount: number;
    TagSets: {
        /**
         * Tag列表。
         */
        TagSet: {
            /**
             * 标签Value。
             * @example `api`
             */
            TagValue: string;
            /**
             * 该标签绑定的实例总数。
             * @example `10`
             */
            InstanceCount: number;
            /**
             * 标签Key。
             * @example `test`
             */
            TagKey: string;
        }[];
    };
}
