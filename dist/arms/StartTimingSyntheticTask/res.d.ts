export interface StartTimingSyntheticTaskResponse {
    /**
     * 请求ID。
     * @example `2A0CEDF1-06FE-44AC-8E21-21A5BE65****`
     */
    RequestId: string;
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
     * 启动结果，成功为true，失败为false。
     * @example `true`
     */
    Data: boolean;
}
