export interface GetDataModelConfigInfoResponse {
    /**
     * 响应状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 错误消息。
     * @example `The system is busy. Please try again later.`
     */
    Message: string;
    /**
     * 响应内容。
     * @example `{}`
     */
    Data: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `RequestID-1638240165139`
     */
    RequestId: string;
    /**
     * 是否调用成功。-**true**：调用成功，但不代表调用的服务器端口和协议不存在。-**false**：调用失败。
     * @example `true`
     */
    Success: boolean;
}
