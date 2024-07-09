export interface ListTagKeysResponse {
    /**
     * 列表的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 本次请求的ID。
     * @example `97935DF1-0289-4AA2-9DD1-72377838B16B`
     */
    RequestId: string;
    /**
     * 每页的行数。
     * @example `20`
     */
    PageSize: number;
    /**
     * 标签的总数。
     * @example `6`
     */
    TotalCount: number;
    /**
     * 标签信息。
     */
    TagKeys: {
        /**
         * 标签键下标签值的总数。
         * @example `1`
         */
        TagCount: number;
        /**
         * 标签键。
         * @example `a`
         */
        TagKey: string;
    }[];
}
