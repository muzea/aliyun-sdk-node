export interface DeleteWorkitemResponse {
    /**
     * Id of the request
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `error`
     */
    errorMsg: string;
    /**
     * 错误状态码
     * @example `InvalidTagGroup.IdNotFound`
     */
    errorCode: string;
    /**
     * true/false
     * @example `true`
     */
    success: boolean;
    /**
     * 是否成功
     * @example `true/false`
     */
    deleteFlag: boolean;
}
