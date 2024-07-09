export interface StopHpoTrialsResponse {
    /**
     * 内部错误码。只在响应出错时被设置。
     * @example `INVALID_USER_OR_EXP`
     */
    Code: string;
    /**
     * 响应错误信息。只在响应出错时被设置。
     * @example `failed to stop any trial`
     */
    Message: string;
    /**
     * (trial id: 停止操作结果) map。
     * @example `{
        'xrYq99':'successfully stopped trial,',
        'xrYq9N':'failed to stop trial,'
    }`
     */
    Results: any;
    /**
     * POP 请求id
     * @example `071A904D-5A49-597F-9F69-81C7701D04AC`
     */
    RequestId: string;
    /**
     * 额外的错误信息。只在响应出错时被设置。
     */
    Detail: any;
}
