export interface GetQuotaApplicationApprovalResponse {
    /**
     * 请求ID。
     * @example `7ED584FB-ECBF-4A2A-969D-F54D25EFABF9`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 动态错误码。
     * @example `PARAMETER.ILLEGALL`
     */
    DynamicCode: string;
    /**
     * 动态错误信息。
     * @example `Parameter[%s] is required.`
     */
    DynamicMessage: string;
    /**
     * 错误信息。
     * @example `You are not authorized to do this action or the API input parameter is invalid.`
     */
    ErrorMsg: string;
    /**
     * 错误码。
     * @example `RAM.PERMISSION.DENIED`
     */
    ErrorCode: string;
    /**
     * 是否调用成功。取值：
     * - true：调用成功。
     * - false：调用失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 返回对象。
     */
    Module: {
        /**
         * 配额申请单平均审批时间。单位：小时。
         * @example `24`
         */
        ApprovalHours: number;
        /**
         * 配额申请单是否支持审批提醒。取值：
         * - false：不支持。
         * - true：支持。
         * @example `false`
         */
        SupportReminder: boolean;
        /**
         * 配额申请单不支持审批提醒的原因说明。
         * @example `can only be remind once within the interval`
         */
        UnsupportReminderReason: string;
        /**
         * 配额申请单的审批提醒间隔时间。单位：小时。
         * @example `24`
         */
        ReminderIntervalHours: number;
    };
    /**
     * 是否允许重试。取值：
     * - false：不允许重试。
     * - true：允许重试。
     * @example `false`
     */
    AllowRetry: boolean;
    /**
     * 错误的参数组。
     */
    ErrorArgs: any[];
}
