export interface SubmitSmoothExpandPreCheckTaskResponse {
    /**
     * 提交任务的结果信息
     * @example `scucess`
     */
    Msg: string;
    /**
     * 请求 ID
     * @example `DSSDF-SEWE-23ERW`
     */
    RequestId: string;
    /**
     * 任务 ID
     * @example `2321`
     */
    TaskId: number;
    /**
     * 请求是否成功
     * @example `true`
     */
    Success: boolean;
}
