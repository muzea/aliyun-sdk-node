export interface UpdateEventBusResponse {
    /**
     * 错误信息。
     * @example `The event bus [xxxx] not existed!`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `f2099962-1628-45f1-9782-2bf6daad823f`
     */
    RequestId: string;
    /**
     * 接口返回码：
     * - Success：表示成功。
     * - 其它：表示错误码。错误码详情，请参见错误码。
     * @example `Success`
     */
    Code: string;
    /**
     * 操作成功返回true。
     * @example `true`
     */
    Success: boolean;
}
