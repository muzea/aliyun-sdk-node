export interface CancelVideoTaskResponse {
    /**
     * 请求ID
     * @example `xxxx-xxxx-xxxx`
     */
    RequestId: string;
    /**
     * 返回错误码
     * @example `502`
     */
    Code: string;
    /**
     * 错误消息
     * @example `这是一个错误`
     */
    Message: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用返回数据
     */
    Data: {
        /**
         * 任务UUID
         * @example `xxxx-xxxx-xxxx`
         */
        TaskUuid: string;
        /**
         * 是否取消
         * - true：已取消
         * - false： 未取消
         * @example `true`
         */
        IsCancel: boolean;
        /**
         * 取消失败原因
         * @example `这里是取消失败原因`
         */
        FailReason: string;
    };
}
