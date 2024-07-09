export interface DescribeSubscriptionInstanceAlertResponse {
    /**
     * 请求ID。
     * @example `210ec2e116055198849072222d****`
     */
    RequestId: string;
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
     * 数据订阅实例名称。
     * @example `test`
     */
    SubscriptionInstanceName: string;
    /**
     * 延迟报警的联系人手机号码。
     * @example `1361234****,1371234****`
     */
    DelayAlertPhone: string;
    /**
     * 数据订阅实例ID。
     * @example `dtsl8zl9ek6292****`
     */
    SubscriptionInstanceID: string;
    /**
     * 触发延迟报警的阈值，单位为秒且需为整数，建议取值为10秒。
     * @example `10`
     */
    DelayOverSeconds: string;
}
