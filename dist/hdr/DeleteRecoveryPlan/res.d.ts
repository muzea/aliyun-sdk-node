export interface DeleteRecoveryPlanResponse {
    /**
     * 返回码
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `36C9E5CF-D575-5074-9A3E-79251448D708`
     */
    RequestId: string;
    /**
     * 任务ID。
     * @example `t-0006ezqwy1swxqgcrfvx`
     */
    TaskId: string;
    /**
     * 请求是否成功。
     * @example `True`
     */
    Success: boolean;
}
