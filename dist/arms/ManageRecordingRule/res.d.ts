export interface ManageRecordingRuleResponse {
    /**
     * 请求ID。用于出现错误后排查问题。
     * @example `CD782AEC-A676-529F-8F26-0ED0FF0EF1EA`
     */
    RequestId: string;
    /**
     * 操作结果信息。
     * @example `success`
     */
    Data: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
}
