export interface QueryTokenResponse {
    /**
     * 您所校验的Token的状态。取值说明如下：
     * - **true**：该Token有效。
     * - **false**：该Token无效。
     * @example `true`
     */
    TokenStatus: boolean;
    /**
     * 公共参数，每个请求的ID都是唯一的。
     * @example `5C8AADD0-6A95-436D-AFA0-3405CCE3****`
     */
    RequestId: string;
}
