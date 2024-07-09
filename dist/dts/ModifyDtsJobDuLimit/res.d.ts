export interface ModifyDtsJobDuLimitResponse {
    /**
     * 请求ID。
     * @example `621BB4F8-3016-4FAA-8D5A-5D3163CC****`
     */
    RequestId: string;
    /**
     *  状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的%s。
     * @example `Type`
     */
    DynamicMessage: string;
    /**
     * 调用错误时返回的错误信息。
     * @example `The Value of Input Parameter %s is not valid.`
     */
    ErrMessage: string;
    /**
     * 后端错误码，数字递增。
     * @example `500`
     */
    Code: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
}
