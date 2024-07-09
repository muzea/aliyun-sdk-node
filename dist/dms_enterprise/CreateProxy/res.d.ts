export interface CreateProxyResponse {
    /**
     * 请求ID。
     * @example `4FFD154E-F57F-5374-B568-D6276F15****`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `实例代理已存在`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `InvalidParameterValid`
     */
    ErrorCode: string;
    /**
     * 安全访问代理ID。
     * @example `4**`
     */
    ProxyId: number;
}
