export interface CancelReserveTaskRequest {
    /**
     * 容器预定任务ID。
     * @example `b354****`
     */
    "TaskId": string;
    /**
     * 自定义Token，保证请求幂等性。
     * > 支持ASCII字符，且不能超过64个字符。
     * @example `2YEF0****`
     */
    "ClientToken"?: string;
}
