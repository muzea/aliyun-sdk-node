export interface DescribeMigrationJobAlertResponse {
    /**
     * 请求ID。
     * @example `210ec21916055187057342533d****`
     */
    RequestId: string;
    /**
     * 数据迁移任务名称。
     * @example `PolarDB MySQL_to_RDS MySQL`
     */
    MigrationJobName: string;
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
     * 数据迁移实例ID。
     * @example `lb9113qq11n****`
     */
    MigrationJobId: string;
    /**
     * 触发延迟报警的阈值，单位为秒。
     * @example `10`
     */
    DelayOverSeconds: string;
}
