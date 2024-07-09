export interface RejectSolutionResponse {
    /**
     * 错误信息
     * @example `没有权限`
     */
    ErrorMsg: string;
    /**
     * 请求id
     * @example `2174AA97-56FB-50FA-B243-0460B9E4CE0C`
     */
    RequestId: string;
    /**
     * 错误code
     * @example `PARTNER.CONFIG.NOT.FOUND`
     */
    ErrorCode: string;
    /**
     * 是否成功
     * @example `True`
     */
    Success: boolean;
}
