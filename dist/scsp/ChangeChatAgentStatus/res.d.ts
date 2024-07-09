export interface ChangeChatAgentStatusResponse {
    /**
     * 错误描述
     * @example `xxx`
     */
    Message: string;
    /**
     * 请求ID，用于跟踪错误原因
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * data
     * @example `0`
     */
    Data: string;
    /**
     * 错误编码
     * @example `Agent.NotFound`
     */
    Code: string;
    /**
     * 接口调用是否成功
     * @example `true`
     */
    Success: boolean;
}
