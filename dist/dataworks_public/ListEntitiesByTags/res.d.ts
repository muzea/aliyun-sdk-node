export interface ListEntitiesByTagsResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 分页信息，指定下一页读取的起始点。
         * @example `12345`
         */
        NextToken: string;
        /**
         * 实体列表。
         */
        EntityList: any[];
    };
    /**
     * 请求的 ID，用于定位日志、排查问题。
     * @example `0000-ABCD-E****`
     */
    RequestId: string;
    /**
     * 请求是否成功：
     * true: 成功；
     * false: 失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `101011005`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `Invalid.Entity.EntityTypeNotSupported`
     */
    ErrorMessage: string;
    /**
     * HTTP 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
