export interface UpdateTimingSyntheticTaskResponse {
    /**
     * 请求ID。
     * @example `F7781D4A-2818-41E7-B7BB-79D809E9****`
     */
    RequestId: string;
    /**
     * 操作是否成功：
     * - `true`：操作成功
     * - `false`：操作失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 任务ID。
         * @example `1eeb351722c84e05b52c82fd0dc9953e`
         */
        TaskId: string;
    };
}
