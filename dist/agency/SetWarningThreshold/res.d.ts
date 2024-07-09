export interface SetWarningThresholdResponse {
    /**
     * 结果代码:
     * - 200 OK
     * - 1109 系统错误
     * - 3040 子账号冻结，无法完成操作 - 3044 告警比例值非数字
     * - 3045 告警比例值应为1到100
     * @example `200`
     */
    Code: string;
    /**
     * 同Code参数值
     * @example `200`
     */
    Message: string;
    /**
     * 候选值:True/False，代表了是否当前API调用本身是成功的。不代表后续 业务操作的成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求id，阿里云为该请求生成的唯一标识符。
     * @example `9C14ADFE-DF0A-54D4-8BD5-45D0839246B4`
     */
    RequestId: string;
}
