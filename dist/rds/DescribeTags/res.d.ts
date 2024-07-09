export interface DescribeTagsResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    Items: {
        /**
         * 标签列表。
         */
        TagInfos: {
            /**
             * 标签值。
             * @example `value1`
             */
            TagValue: string;
            /**
             * 标签键。
             * @example `key1`
             */
            TagKey: string;
            DBInstanceIds: {
                /**
                 * 该标签所绑定的实例ID列表。
                 */
                DBInstanceIds: string[];
            };
        }[];
    };
}
