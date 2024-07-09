export interface SendChatappMassMessageResponse {
    /**
     * 请求ID。
     * @example `90E63D28-E31D-1EB2-8939-A9486641****`
     */
    RequestId: string;
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~196974~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 错误提示信息。
     * @example `User not authorized to operate on the specified resource.`
     */
    Message: string;
    /**
     * 批量消息ID。
     * @example `890000010002****`
     */
    GroupMessageId: string;
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
}
