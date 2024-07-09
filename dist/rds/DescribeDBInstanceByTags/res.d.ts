export interface DescribeDBInstanceByTagsResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页记录数。
     * @example `10`
     */
    PageRecordCount: number;
    /**
     * 总记录数。
     * @example `30`
     */
    TotalRecordCount: number;
    Items: {
        /**
         * 实例详情列表。
         */
        DBInstanceTag: {
            /**
             * 实例ID。
             * @example `rm-uf6w****`
             */
            DBInstanceId: string;
            Tags: {
                /**
                 * 标签详情列表。
                 */
                Tag: {
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
                }[];
            };
        }[];
    };
}
