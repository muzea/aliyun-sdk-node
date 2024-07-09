export interface ListProduceAuthorizationResponse {
    /**
     * 请求id
     * @example `10AAC56B-C512-5860-9A9E-B949431E7174`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `True`
     */
    Success: boolean;
    /**
     * 总记录数。
     * @example `292`
     */
    TotalItemNum: number;
    /**
     * 当前页码
     * @example `1`
     */
    CurrentPageNum: number;
    /**
     * 分页的大小。
     * @example `20`
     */
    PageSize: number;
    /**
     * 总页数。
     * @example `27`
     */
    TotalPageNum: number;
    /**
     * 交付单授权记录列表
     */
    Data: {
        /**
         * 被授权人用户ID
         * @example `12195411612139999`
         */
        AuthorizedUserId: string;
        /**
         * 被授权人用户名称
         * @example `test@alibaba-inc.com`
         */
        AuthorizedUserName: string;
    }[];
}
