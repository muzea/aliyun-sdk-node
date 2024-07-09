export interface DescribeSynchronizationJobReplicatorCompareResponse {
    /**
     * 全镜像开关，返回值：
     * - **true**：打开。
     * - **false**：关闭。
     * @example `true`
     */
    SynchronizationReplicatorCompareEnable: boolean;
    /**
     * 请求ID。
     * @example `E6EB407F-C59F-4682-A682-A00FA6A2****`
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
     * 调用错误时返回对应的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
}
