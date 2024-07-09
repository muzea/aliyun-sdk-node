export interface CreateDtsInstanceResponse {
    /**
     * 请求ID。
     * @example `C166D79D-436B-45F0-B5A5-25E1****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 任务ID。
     * @example `bi6e22ay243****`
     */
    JobId: string;
    /**
     * 调用错误时返回对应的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
    /**
     * 实例ID。
     * @example `dtsbi6e22ay243****`
     */
    InstanceId: string;
}
