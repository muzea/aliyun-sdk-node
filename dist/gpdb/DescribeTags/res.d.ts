export interface DescribeTagsResponse {
    /**
     * 请求ID。
     * @example `A29EC547-B392-4340-AA4F-7C0A7B626E74`
     */
    RequestId: string;
    /**
     * 标签列表。
     */
    Tags: {
        /**
         * 标签值。
         * @example `test`
         */
        TagValue: string;
        /**
         * 标签键。
         * @example `user`
         */
        TagKey: string;
    }[];
}
