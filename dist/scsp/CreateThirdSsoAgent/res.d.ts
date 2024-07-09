export interface CreateThirdSsoAgentResponse {
    /**
     * 错误描述
     * @example `xxx`
     */
    Message: string;
    /**
     * 请求id
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 新创建的坐席id
     * @example `123456`
     */
    Data: number;
    /**
     * 错误状态码
     * @example `Success`
     */
    Code: string;
    /**
     * 接口调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
