export interface ModifyTaskInfoResponse {
    /**
     * 请求ID。
     * @example `18B3000C-2B06-5D4F-AA5B-456D5FBCA55B`
     */
    RequestId: string;
    /**
     * 失败的任务ID，遇到一个失败即返回。
     * @example `t-83br18hlw11ue610yo`
     */
    ErrorTaskId: string;
    /**
     * 成功任务数。
     * @example `5`
     */
    SuccessCount: string;
    /**
     * 错误代码。
     * @example `mst.errorcode.success.errormessage`
     */
    ErrorCode: string;
}
