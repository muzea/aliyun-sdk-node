export interface UpdateRecoveryPlanResponse {
    /**
     * 返回码。
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
     * @example `F1B86896-AB3E-5861-9E33-10486F056BB3`
     */
    RequestId: string;
    /**
     * 任务ID。
     * @example `t-000ir69ra7neqp2p4qdv`
     */
    TaskId: string;
    /**
     * 是否成功。
     * @example `True`
     */
    Success: boolean;
}
