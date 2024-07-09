export interface AddRecordingRuleResponse {
    /**
     * 请求ID。
     * @example `9FEA6D00-317F-45E3-9004-7FB8B0B7****`
     */
    RequestId: string;
    /**
     * 响应状态。
     * @example `success`
     */
    Data: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
}
