export interface ListMetaCollectionEntitiesResponse {
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * 下一页的Token。
         * @example `123344`
         */
        NextToken: string;
        /**
         * 实体数组。
         */
        EntityList: any[];
    };
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `E25887B7-579C-54A5-9C4F-83A0DE367DD`
     */
    RequestId: string;
    /**
     * 调用是否成功。取值如下：
     * true：调用成功。
     * false：调用失败。
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
