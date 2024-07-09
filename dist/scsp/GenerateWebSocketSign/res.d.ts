export interface GenerateWebSocketSignResponse {
    /**
     * 错误描述
     * @example `xxxx`
     */
    Message: string;
    /**
     * 请求ID，用于跟踪错误原因
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * messagebox消息通道签名码
     * @example `dnthF_oinHg7JMJDmKqex3UxDD7`
     */
    Data: string;
    /**
     * 错误编码
     * @example `Success`
     */
    Code: string;
    /**
     * 接口调用是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
}
