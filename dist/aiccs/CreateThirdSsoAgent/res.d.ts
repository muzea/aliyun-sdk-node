export interface CreateThirdSsoAgentResponse {
    /**
     * 状态码描述。
     * @example `Success`
     */
    Message: string;
    /**
     * requestId
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 创建的坐席ID。
     * @example `123456`
     */
    Data: number;
    /**
     * 状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 接口调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
