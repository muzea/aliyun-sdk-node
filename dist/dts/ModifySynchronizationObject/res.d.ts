export interface ModifySynchronizationObjectResponse {
    /**
     * 请求ID。
     * @example `902DDCDE-C755-4458-85DA-DF9A323C****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 任务ID，您可以根据此参数调用[DescribeSynchronizationObjectModifyStatus](~~49452~~)接口查询同步对象变更的状态及进度。
     * @example `tl911uvi25z****`
     */
    TaskId: string;
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
