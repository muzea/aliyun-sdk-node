export interface ModifyTaskInfoResponse {
    /**
     * 请求ID。
     * @example `6163731A-XXXX-XXXX-B934-3388DE70C217`
     */
    RequestId: string;
    /**
     * 失败的任务ID，遇到一个失败即返回。
     * @example `""`
     */
    ErrorTaskId: string;
    /**
     * 成功记录数。
     * @example `1`
     */
    SuccessCount: string;
    /**
     * 失败错误码，同接口错误码。
     * @example `""`
     */
    ErrorCode: string;
}
