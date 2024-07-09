export interface DeleteProjectResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `error`
     */
    errorMsg: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * 接口请求成功true，
     * 接口请求失败false
     * @example `true`
     */
    success: boolean;
    /**
     * 删除成功true，
     * 删除失败false
     * @example `true`
     */
    result: boolean;
}
