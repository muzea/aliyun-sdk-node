export interface SubmitTextTo3DAvatarVideoTaskResponse {
    /**
     * 请求ID
     * @example `13E0445E-CA7F-5DD3-9B0F-D4B39E0180F7`
     */
    RequestId: string;
    /**
     * 是否调用成功
     * @example `false`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `502`
     */
    Code: string;
    /**
     * 错误消息
     * @example `这是一个错误`
     */
    Message: string;
    /**
     * 调用返回数据
     */
    Data: {
        /**
         * 任务唯一uuid，后续用来查询任务详情，请务必保存好
         * @example `xxxxxx-xxxxx-xxxxx`
         */
        TaskUuid: string;
    };
}
