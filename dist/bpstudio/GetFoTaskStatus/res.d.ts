export interface GetFoTaskStatusResponse {
    /**
     * 请求ID
     * @example `923692F0-A15B-58B4-BAF4-2AFA4AF46240`
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
     * 容灾切换任务Task的状态
     * @example `Running`
     */
    Data: string;
}
