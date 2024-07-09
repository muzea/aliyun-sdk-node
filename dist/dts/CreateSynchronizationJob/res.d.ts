export interface CreateSynchronizationJobResponse {
    /**
     * 请求ID。
     * @example `9056C8B0-5799-493A-9655-70F607B8****`
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
     * 数据同步实例ID。
     * @example `dtshvj11k25255****`
     */
    SynchronizationJobId: string;
    /**
     * 调用错误时返回对应的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
}
