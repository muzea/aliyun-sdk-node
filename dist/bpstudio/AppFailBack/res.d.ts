export interface AppFailBackResponse {
    /**
     * 请求ID
     * @example `7036DDBE-0ABA-52D7-A39D-75E511970F07`
     */
    RequestId: string;
    /**
     * 报错信息
     * @example `OKITHEVRQCN6ULQG`
     */
    Message: string;
    /**
     * 返回码
     * @example `200`
     */
    Code: string;
    /**
     * 容灾切回任务ID（TaskId）
     * @example `3309`
     */
    Data: number;
}
