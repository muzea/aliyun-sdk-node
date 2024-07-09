export interface DescribeTagKeysResponse {
    /**
     * 本次请求的ID。
     * @example `6623EA1F-30FB-5BC8-BEC9-74D55F6F08F1`
     */
    RequestId: string;
    /**
     * 当前页面的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页包含标签键的数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询到的标签键的总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 标签键详情列表。
     */
    TagKeys: {
        /**
         * 标签键关联的DDoS高防（中国内地）实例的数量。
         * @example `2`
         */
        TagCount: number;
        /**
         * 标签键。
         * @example `aa1`
         */
        TagKey: string;
    }[];
}
