export interface DeleteWorkitemCommentResponse {
    /**
     * Id of the request
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
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
     * true接口调用成功，false接口调用失败
     * @example `true`
     */
    success: string;
    /**
     * 是否删除成功
     * @example `true/false`
     */
    deleteFlag: boolean;
}
