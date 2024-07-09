export interface PlayVideoFileResponse {
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
    /**
     * 错误信息。
     * @example `无`
     */
    Message: string;
    /**
     * 通话类型。
     * - video
     * - voice
     * @example `video`
     */
    Model: boolean;
    /**
     * 请求状态码。
     * * 返回**OK**代表请求成功。
     * * 其他错误码，请参见[API错误码](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 接口调用是否成功。
     * - true
     * - false
     * @example `true`
     */
    Success: boolean;
}
