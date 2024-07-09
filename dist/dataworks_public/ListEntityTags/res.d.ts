export interface ListEntityTagsResponse {
    /**
     * 标签列表。
     */
    Data: any[];
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
