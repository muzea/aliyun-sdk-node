export interface WorkitemAttachmentCreateResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `F590C9D8-E908-5B6C-95AC-56B7E8011FFA`
     */
    requestId: string;
    /**
     * - 当success为false，返回业务错误码；
     *
     * - 当success为true，返回空值。
     * @example `SYSTEM_UNKNOWN_ERROR`
     */
    errorCode: string;
    /**
     * - 当success为false，返回业务错误信息；
     * - 当success为true，返回空值。
     * @example `InvalidTagGroup.IdNotFoundntraceId: 2137844496.4337.16624448853053831`
     */
    errorMessage: string;
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true`
     */
    success: string;
}
