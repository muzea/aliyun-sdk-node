export interface GetMetaCollectionDetailResponse {
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `0000-ABCD-E****`
     */
    RequestId: string;
    /**
     * 集合对象。
     */
    Collection: any;
    /**
     * 调用是否成功。取值如下：
     * true：调用成功。
     * false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `9999`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `album.xxxx does not exist.`
     */
    ErrorMessage: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
