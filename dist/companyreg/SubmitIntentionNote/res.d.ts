export interface SubmitIntentionNoteResponse {
    /**
     * 错误信息
     * @example `没有权限`
     */
    ErrorMsg: string;
    /**
     * 请求id
     * @example `668571EF-1E7E-5435-AA65-4ECFFDDA133F`
     */
    RequestId: string;
    /**
     * 错误码
     * @example `NoPermission`
     */
    ErrorCode: string;
    /**
     * 是否成功
     * @example `True`
     */
    Success: boolean;
}
