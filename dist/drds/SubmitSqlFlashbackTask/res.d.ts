export interface SubmitSqlFlashbackTaskResponse {
    /**
     * 请求ID。
     * @example `DSSDF-SEWE-*****`
     */
    RequestId: string;
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
    /**
     * 任务ID。
     * @example `1111`
     */
    TaskId: number;
}
