export interface ListMetaCollectionsResponse {
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `E25887B7-579C-54A5-9C4F-83A0DE367DDE`
     */
    RequestId: string;
    /**
     * 返回对象
     */
    Data: {
        /**
         * 下一页的token
         * @example `37ae2053d87d380f28ce0dc0853ca51e`
         */
        NextToken: string;
        /**
         * 数组对象
         */
        CollectionList: any[];
    };
    /**
     * 调用是否成功。取值如下：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `Invalid.Collection.NotExists`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `The specified parameters are invalid.`
     */
    ErrorMessage: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
