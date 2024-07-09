export interface GetCallMediaTypeResponse {
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
     * MediaType：媒体类型。
     * - audio
     * - video
     * - Null（切换中不确定）
     * @example `video`
     */
    Data: any;
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码，请参见[API错误码](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 请求是否成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
}
