export interface CreateReverseDtsJobResponse {
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 请求ID。
     * @example `621BB4F8-3016-4FAA-8D5A-5D3163CC****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 生成的反向同步任务的ID。
     * @example `n99m9jx822k****`
     */
    DtsJobId: string;
    /**
     * 生成的反向任务对应实例的ID。
     * @example `dtsor1f9kr822l****`
     */
    DtsInstanceId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 调用错误时返回的错误信息。
     * @example `The Value of Input Parameter %s is not valid.`
     */
    ErrMessage: string;
}
