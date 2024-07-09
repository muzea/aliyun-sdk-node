export interface DeleteWorkitemAllCommentResponse {
    /**
     * Id of the request
     * @example `A7586FEB-E48D-5579-983F-74981FBFF627`
     */
    requestId: string;
    /**
     * 错误消息
     * @example `error`
     */
    errorMsg: string;
    /**
     * - 当success为false，返回业务错误码；
     *
     * - 当success为true，返回空值。
     * @example `success`
     */
    errorCode: string;
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true`
     */
    success: string;
    /**
     * true删除成功，false删除失败
     * @example `true/false`
     */
    deleteFlag: boolean;
}
