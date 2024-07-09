export interface ServiceInvokeResponse {
    /**
     * 请求的唯一ID
     * @example `F8F63CAB-A96C-5017-AFB0-324593223817`
     */
    RequestId: string;
    /**
     * 根据不同的认证方式  返回不同的结果
     * @example `"{\"ifaa\"{\"code\":0,\"message\":\"eyJo....BWUFBQUFBIn19\"},\"version\":\"1.0.0\",\"transaction\":{\"id\":\"sIFAA-ios\",\"type\":\"sIFAA-ios\",\"payload\":\"\"},\"action\":\"request/auth\"}" }`
     */
    Data: string;
    /**
     * 错误信息
     * @example `Operation.Failure.ApiInvoke.ServiceInArrears`
     */
    Message: string;
    /**
     * 错误码
     * @example `Operation.Success`
     */
    Code: string;
    /**
     * 请求是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 身份令牌
     * @example `qacdfhigvbcvb`
     */
    IdToken: string;
    EventId: string;
}
