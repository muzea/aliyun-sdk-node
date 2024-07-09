export interface RestoreCapacityResponse {
    /**
     * 是否已经发送清空指令。取值：
     * - true：已经发送清空命令，正在清理中
     * - false：发送失败
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求消息ID。
     * @example `6276D891-58D4-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
