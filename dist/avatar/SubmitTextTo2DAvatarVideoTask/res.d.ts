export interface SubmitTextTo2DAvatarVideoTaskResponse {
    /**
     * 请求ID
     * @example `13E0445E-CA7F-5DD3-9B0F-D4B39E0180F7`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `false`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `-10000000`
     */
    Code: string;
    /**
     * 错误消息
     * @example `这个一次错误消息。`
     */
    Message: string;
    /**
     * 调用结果数据
     */
    Data: {
        /**
         * 任务唯一uuid，后续用来查询任务详细请，请务必保存好
         * @example `xxxx-xxx-xxx`
         */
        TaskUuid: string;
    };
}
