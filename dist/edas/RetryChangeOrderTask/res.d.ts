export interface RetryChangeOrderTaskResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 重试信息。
     * @example `success retry task`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `4823-bhjf-23u4-eiufh`
     */
    RequestId: string;
}
