export interface DescribeSynchronizationJobAlertResponse {
    /**
     * 数据同步作业名称。
     * @example `Polar MySQL_TO_RDS MySQL`
     */
    SynchronizationJobName: string;
    /**
     * 是否监控异常状态，返回值：
     * - **enable**：是。
     * - **disable**：否。
     * @example `enable`
     */
    ErrorAlertStatus: string;
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
     * 异常报警的联系人手机号码。
     * @example `1361234****,1371234****`
     */
    ErrorAlertPhone: string;
    /**
     * 调用出错时返回的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
    /**
     * 是否监控延迟状态，返回值：
     * - **enable**：是。
     * - **disable**：否。
     * @example `enable`
     */
    DelayAlertStatus: string;
    /**
     * 延迟报警的联系人手机号码。
     * @example `1361234****,1371234****`
     */
    DelayAlertPhone: string;
    /**
     * 触发延迟报警的阈值，单位为秒。
     * @example `10`
     */
    DelayOverSeconds: string;
    /**
     * 请求ID。
     * @example `210ec20e16055205968635339d****`
     */
    RequestId: string;
    /**
     * 数据同步实例ID。
     * @example `kxz1170c10p****`
     */
    SynchronizationJobId: string;
    /**
     * 同步方向，返回值：
     * - **Forward**：正向。
     * - **Reverse**：反向。
     * > 只有在数据同步的拓扑为双向同步时，才会返回该参数。
     * @example `Forward`
     */
    SynchronizationDirection: string;
}
