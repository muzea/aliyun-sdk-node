export interface GetTokenResponse {
    /**
     * 请求ID。
     * @example `E7D55162-4489-1619-AAF5-3F97D5FCA948`
     */
    RequestId: string;
    /**
     * 成功标志，取值如下：
     * - true
     * - false
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `"XXX"`
     */
    Message: string;
    /**
     * 状态码，取值如下：
     * - InternalError：内部错误（除了参数验证错误外的其他错误，目前都归类到内部错误）。
     * - ValidationError：参数验证错误。
     * @example `ValidationError`
     */
    Code: string;
    /**
     * 访问DSW实例的临时鉴权信息。
     * @example `*******`
     */
    Token: string;
}
