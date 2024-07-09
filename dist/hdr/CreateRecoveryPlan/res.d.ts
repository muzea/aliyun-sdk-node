export interface CreateRecoveryPlanResponse {
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
     * @example `FEC3D491-15BB-5C8F-902E-773794FF1B29`
     */
    RequestId: string;
    /**
     * 任务ID。
     * @example `t-00055g8sxr0ys0g99n83`
     */
    TaskId: string;
    /**
     * 是否成功。
     * @example `True`
     */
    Success: boolean;
}
