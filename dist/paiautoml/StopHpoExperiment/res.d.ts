export interface StopHpoExperimentResponse {
    /**
     * 实验id。
     * @example `abcde`
     */
    ExpId: string;
    /**
     * 内部错误码。只在响应出错时被设置。
     * @example `INVALID_INPUT_PARAMS`
     */
    Code: string;
    /**
     * 响应错误信息。只在响应出错时被设置。
     * @example `Missing 'user_id' in request.`
     */
    Message: string;
    /**
     * POP的请求id
     * @example `071A904D-5A49-597F-9F69-81C7701D04AC`
     */
    RequestId: string;
    /**
     * 额外的错误信息。只在响应出错时被设置。
     */
    Detail: any;
}
