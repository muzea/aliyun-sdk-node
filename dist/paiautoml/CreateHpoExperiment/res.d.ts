export interface CreateHpoExperimentResponse {
    /**
     * HPO实验id
     * @example `sORVEck`
     */
    ExperimentId: string;
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
     * @example `3F190916-B3E5-5D1E-AD0C-35C0DF105F51`
     */
    RequestId: string;
    /**
     * 额外的错误信息。只在响应出错时被设置。
     */
    Detail: any;
}
