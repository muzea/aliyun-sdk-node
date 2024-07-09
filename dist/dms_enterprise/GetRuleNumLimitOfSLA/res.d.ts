export interface GetRuleNumLimitOfSLAResponse {
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `D05B3EE1-B6D3-5B17-8CA6-A8054828E5B2`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * SLA规则数量限制。
     * @example `12`
     */
    RuleNumLimit: number;
}
