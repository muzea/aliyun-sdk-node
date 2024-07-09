export interface SubmitHotExpandPreCheckTaskResponse {
    /**
     * 提交任务的结果。
     * @example `scucess`
     */
    Msg: string;
    /**
     * 请求ID。
     * @example `FE104D26-AC19-49B5-AC67-947F69*****`
     */
    RequestId: string;
    /**
     * 任务ID。
     * @example `11111`
     */
    TaskId: number;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
