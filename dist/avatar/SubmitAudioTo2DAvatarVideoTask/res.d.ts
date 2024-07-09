export interface SubmitAudioTo2DAvatarVideoTaskResponse {
    /**
     * 请求ID
     * @example `4C8BF3A5-948F-1F89-AACD-D18DEF52D1XX`
     */
    RequestId: string;
    /**
     * 错误码
     * @example `10050008`
     */
    Code: string;
    /**
     * 错误消息
     * @example `这个一个错误消息。`
     */
    Message: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用结果数据
     */
    Data: {
        /**
         * 任务唯一uuid，后续用来查询任务详细请，请务必保存好
         * @example `xxxx-xxx-xx-xx`
         */
        TaskUuid: string;
    };
}
