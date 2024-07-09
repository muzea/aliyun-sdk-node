export interface CloseUserIntentionResponse {
    /**
     * 错误信息
     * @example `没有权限`
     */
    ErrorMsg: string;
    /**
     * 请求id
     * @example `DD5639FF-1240-51DE-9BA8-2075670A1EAC`
     */
    RequestId: string;
    /**
     * 错误code
     * @example `NoPermission`
     */
    ErrorCode: string;
    /**
     * 成功标识
     * @example `True`
     */
    Success: boolean;
}
