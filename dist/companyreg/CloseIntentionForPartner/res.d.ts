export interface CloseIntentionForPartnerResponse {
    /**
     * 错误信息
     * @example `没有权限`
     */
    ErrorMsg: string;
    /**
     * 请求id
     * @example `4674B06A-B57F-5922-890C-D23D17C5BD21`
     */
    RequestId: string;
    /**
     * 成功状态标识
     * @example `True`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `NoPermission`
     */
    ErrorCode: string;
}
